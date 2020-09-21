module.exports = {
  base: '/docs/',
  title: 'mrapi',
  description: 'mrapi docs',
  head: [['link', { rel: 'icon', href: '/assets/favico.ico' }]],
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
    lineNumbers: true, // 代码块显示行号
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'), { enabled: true })
    }
  },
  themeConfig: {
    // sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // displayAllHeaders: true,
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
    logo: 'mrapi-w@1x.png',

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        // displayAllHeaders: true,
        sidebar: [
          {
            title: 'GettingStart',
            path: './GettingStart',
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
          },
          {
            title: 'CLI',
            path: './CLI',
            sidebarDepth: 2
          },
          {
            title: 'API',
            path: './API'
          },
          {
            title: 'DAL',
            children: [
              {
                title: 'DAL',
                path: './DAL/DAL'
              },
              {
                title: 'OpenAPI',
                path: './DAL/OpenAPI'
              },
              {
                title: 'GraphQl-API',
                path: './DAL/GraphQl-API'
              }
            ]
          },
          {
            title: 'Examples',
            path: './Examples.md'
          },
          {
            title: 'Deployment',
            path: './Deployment.md'
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
            title: '配置',
            children: [
              {
                title: 'Common',
                path: './zh/Configuration/Common'
              },
              {
                title: 'API',
                path: './zh/Configuration/API'
              },
              {
                title: 'DAL',
                path: './zh/Configuration/DAL'
              }
            ]
          },
          {
            title: 'CLI',
            path: './zh/CLI',
            sidebarDepth: 1
          },
          {
            title: 'API',
            path: './zh/API'
          },
          {
            title: 'DAL',
            children: [
              {
                title: 'DAL',
                path: './zh/DAL/DAL'
              },
              {
                title: 'OpenAPI',
                path: './zh/DAL/OpenAPI'
              },
              {
                title: 'GraphQl-API',
                path: './DAL/GraphQl-API'
              }
            ]
          },
          {
            title: '示例',
            path: './zh/Examples.md'
          },
          {
            title: '部署',
            path: './zh/Deployment.md'
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
