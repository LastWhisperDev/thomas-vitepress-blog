---
outline: deep
---

# 快速开发一个cli脚手架
---
> [!warning]
> 未完成，待补充

### package.json
```json{5-7}
{
  // node version v20.12.0
  ...
  "author": "thomas.wang",
  "bin": {
    "suggest-template": "./bin/index.js"
  },
  "dependencies": {
    "chalk": "^5.3.0", // 用于在命令行中添加样式和颜色,使输出更具可读性和吸引力
    "commander": "^12.1.0", // 快速构建命令行工具
    "inquirer": "^10.1.4", // 用户与命令行交互的工具
    "ncp": "^2.0.0", // 用于复制文件和目录的Node模块
    "ora": "^8.0.1" // 用于在命令行中显示加载动画的模块
  }
}
```

### 源码
::: code-group

```js [bin/index.js]
#!/usr/bin/env node
import { program } from "commander"
import fs from 'fs'
import ncp from 'ncp'
import path from 'path'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { checkPageName } from './util.js'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

const json = JSON.parse(fs.readFileSync('./package.json'))
program.version(json.version)
program
  .command('create')
  .description('创建页面模板')
  .action(() => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'pageName',
          message: '请输入页面名称',
          default: 'Example'
        }
      ])
      .then((res) => {
        const checkRes = checkPageName(res.pageName)
        if(!checkRes) {
          console.log(chalk.red('Error: 自定义page的名字首字母需要大写'))
          return false
        }
        selectTemplate(res.pageName)
      })
  })

function selectTemplate(pageName) {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'templateType',
        message: '请选择模板种类',
        choices: ['General']
      }
    ])
    .then((res) => {
      createTemplate(res.templateType, pageName)
    })
}

function createTemplate(templateType, pageName) {
  const templatePath = path.resolve(__dirname, `../template/${templateType}`);
  const destinationPath = path.join(process.cwd(), 'src', 'pages', pageName);

  ncp(templatePath, destinationPath, (err) => {
    if(err) {
      console.log(chalk.red('Error: ' + err))
      return false
    }

    console.log(chalk.green('成功创建page模板~'))
  })
}

program.parse(process.argv)
```

```js [bin/util.js]
const checkPageName = (pageName) => {
  const regex = /^[A-Z].*/
  return regex.test(pageName)
}

export {checkPageName}
```

:::