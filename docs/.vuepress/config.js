const pkg = require('../../package.json')

module.exports = {
  title: pkg.name,
  description: 'vue插件文档',
  dest: 'dist',   // 设置输出目录1
  base: '/vueplugin-vuepress/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/guide/introduction' },
      { text: '常见问题', link: '/problem' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '简介',
          collapsable: false,
          children: [
            {
              title: '介绍',
              path: 'introduction',
              collapsable: false
            },
            'loading',
            'base-footer',
            'base-scroll'
          ]
        }
      ]
    },
    sidebarDepth: 1
  },
  plugins: [
    // 回到顶部
    '@vuepress/back-to-top',

    // 放大
    ['@vuepress/medium-zoom',
      {
        selector: 'img'
      }
    ]
  ]
}
