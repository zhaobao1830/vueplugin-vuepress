const pkg = require('../../package.json')

module.exports = {
  title: pkg.name,
  description: 'vue插件文档',
  base: '/plugin/',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/guide/introduction' },
      { text: '常见问题', link: '/problem' }
    ]
  }
}
