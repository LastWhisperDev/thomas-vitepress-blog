import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  base: '/thomas-vitepress-blog',
  title: "Thomas的笔记本",
  lastUpdated: true,
  description: "用来记录工作中遇到的一些知识点或填坑小技巧",
  head: [
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?21ef86ac7b5a0052c4036a28bd236e6c";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `],
    ['meta', {name: 'google-site-verification', content: 'au0z1rGENKzXkxic5kUDx1T-ptwg4yUdS0k-rdz6-NI'}]
  ],
  themeConfig: {
    outlineTitle: '目录',
    nav: [
      { text: '代码段', link: '/code-snippet/down-load-snippet' },
      { text: '错题本', link: '/error-notepad/destructuring-assignment-error' },
      { text: '扩展', link: '/learn-extend/chrome-extensions-learn' }
    ],
    sidebar: {
      '/code-snippet/': [
        {
          text: '代码段',
          items: [
            { text: '下载文件', link: '/code-snippet/down-load-snippet' },
            { text: '滚动溢出', link: '/code-snippet/overscroll-behavior-snippet' },
            { text: 'div内凹', link: '/code-snippet/div-dig-css' },
          ]
        }
      ],
      '/error-notepad/': [
        {
          text: '问题',
          items: [
            { text: '解构赋值默认值问题', link: '/error-notepad/destructuring-assignment-error' },
            { text: 'Vue2 provide/inject 响应式问题', link: '/error-notepad/vue2-provide-inject-error' },
            { text: 'flex布局文本溢出省略号问题', link: '/error-notepad/flex-ellipsis-failure-error' },
          ]
        }
      ],
      '/learn-extend/': [
        {
          text: '更多文档',
          items: [
            { text: '快速开发一个chrome扩展程序', link: '/learn-extend/chrome-extensions-learn' },
            { text: '快速开发一个cli脚手架', link: '/learn-extend/create-cli-learn' },
          ]
        }
      ]
    },
    search: {
      provider: 'local'
      // provider: 'algolia',
      // options: {
      //   appId: 'U6UIMBQT6X',
      //   apiKey: '54076f167695d6f3954f54a5c6c125f0',
      //   indexName: 'vite-press-blog'
      // }
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/web-wangle/thomas-vitepress-blog' }
    ]
  },
  sitemap: {
    hostname: 'https://web-wangle.github.io/thomas-vitepress-blog/'
  }
})
