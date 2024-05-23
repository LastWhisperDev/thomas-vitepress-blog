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
      { text: '代码段', link: '/code-snippet/index' },
      { text: '错题本', link: '/error-notepad/index' },
      { text: '工具集', link: '/popular-website/index' }
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'CPV0H4UKRK',
        apiKey: 'f3834e275248d70e18a41d96ec571ca1',
        indexName: 'web-wangleio'
      }
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/web-wangle/thomas-vitepress-blog' }
    ]
  },
  sitemap: {
    hostname: 'https://web-wangle.github.io/thomas-vitepress-blog/'
  }
   // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
})
