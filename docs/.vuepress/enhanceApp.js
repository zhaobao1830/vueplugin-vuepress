// 用来进行vue的配置，比如vue全局注册
import Vue from 'vue'
import Loading from "./components/loading"

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  Register()
}

// Vue全局注册方法
function Register() {
  const files = require.context('./components', true, /.vue$/)
  files.keys().forEach((key) => {
    let fileUrl = './components' + key.substring(1)
    import(fileUrl+'').then(res => {
      let { default: component } = res
      Vue.component(component.name, component)
    })
  })
}
