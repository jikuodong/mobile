<template>
  <div id="login">
    <div class="username">
      <group>
        <x-input title="用户名:" name="username" placeholder="请输入用户名" v-model="username"></x-input>
      </group>
    </div>
    <div class="password">
      <group>
        <x-input label-width="87px" title="密&nbsp;&nbsp;&nbsp;码:" name="password" placeholder="请输入密码" v-model="password"></x-input>
      </group>
    </div>
    <div style="margin: 16% 6% 65% 6%">
      <x-button type="primary" @click.native="login" style="background-color: red">登录</x-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput, XButton } from 'vux'
export default {
  name: 'login',
  components: {
    Group,
    XInput,
    XButton
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #login
    font-size 0
    display inline-block
    height 100%
    .username
      text-align left
      height 60px
      line-height 60px
      margin 10% 6% auto 6%
      font-size 14px
    .password
      text-align left
      margin auto 6% auto 6%
      font-size 14px
    #login .weui-btn_primary
      background-color #fff
</style>
