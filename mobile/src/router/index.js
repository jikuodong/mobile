import Vue from 'vue'
import Router from 'vue-router'
import loginRouter from './login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    ...loginRouter /* 展开运算符: 将一个数组转换为逗号分隔的参数 */
  ]
})
