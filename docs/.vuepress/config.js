module.exports = {
  base: '/',
  title: 'mrapi',
  description: 'mrapi docs',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'mrapi',
      description: 'mrapi en-us docs'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'mrapi',
      description: ' mrapi zh docs'
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        sidebarDepth: 2,
        // displayAllHeaders: true,
        sidebar: [
          {
            title: 'GettingStart',
            path: './GettingStart',
            sidebarDepth: 2
          },
          {
            title: 'CLI',
            path: './CLI',
            sidebarDepth: 2
          },
          {
            title: 'Congifuguration',
            children: [
              {
                title: 'Common',
                path: './Configuration/Common',
                sidebarDepth: 2
              },
              {
                title: 'API',
                path: './Configuration/API'
              },
              {
                title: 'DAL',
                path: './Configuration/DAL'
              }
            ]
          }
        ],
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/mrapi-js/mrapi'
          }
        ]
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/mrapi-js/mrapi'
          }
        ],
        // sidebar: 'auto',
        sidebar: [
          {
            title: '入门',
            path: './zh/GettingStart',
            sidebarDepth: 1
          },
          {
            title: 'CLI',
            path: './zh/CLI',
            sidebarDepth: 1
          },
          {
            title: '配置',
            children: [
              {
                title: 'Common',
                path: '.zh/Configuration/Common'
              },
              '.zh/Configuration/API',
              '.zh/Configuration/DAL'
            ]
          }
        ],
        nav: [
          {
            text: 'GitHub',
            link: 'https://github.com/mrapi-js/mrapi'
          }
        ]
      }
    }
  }
}
