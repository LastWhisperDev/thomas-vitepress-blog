import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/',
  title: "Thomas的笔记本",
  lastUpdated: true,
  description: "用来记录工作中遇到的一些知识点或填坑小技巧",
  themeConfig: {
    outlineTitle: '目录',
    nav: [
      { text: '首页', link: '/' },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/web-wangle/thomas-vitepress-blog' }
    ]
  }
})
