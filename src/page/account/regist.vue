<template lang="pug">
  .page.regist
    .top
      back-circle(
        @click="$router.go(-1)"
      )
      p.title 注册
    section.form
      input-line(
        class="input"
        :autofocus="true"
        autofocus
        @input="inputUsername"
        placeholder='请输入手机号码'
        type='number'
      )
      input-ver(
        class="input"
        @input="inputVer"
        :clickAllow="verClickAllow"
        placeholder='请输入验证码'
        :getVer="clickGetVer"
      )
      input-line(
        class="input"
        @input="inputPassword"
        type="password"
        placeholder='请设置密码'
      )
      cell-select(
        class="cell-select"
        title="业务类型"
        placeholder="请选择业务类型"
        :result="type.ctName"
        @click="clickTypeSelect"
      )
      cell-select(
        class="cell-select"
        title="经营类目"
        placeholder="请选择经营类目(可多选)"
        :result="category"
        @click="clickCategorySelect"
      )
      input-line(
        class="input"
        @input="inputApply"
        placeholder='请输入邀请码(非必填)'
      )
      button-normal.login-button(
        @click="clickRegist"
        text="注册")
    section.delegate-area
      check-box(
        @changeChecked="changeDelegateChecked"
        title="同意"
      )
      a.delegate(
        @click="clickDelegate"
      ) 买卖通用户协议
    transition(:name="transitionName")
      router-view(
        :obj="routerObj"
        :showKey="isType ? 'ctName' : 'gcName'"
        @callback="routerCallback"
      )
</template>

<script lang="coffee">
export default
  data: ->
    {
      routerObj: {} # 路由携带参数
      onlyNum: /\D/g
      type: ''
      category: ''
      delegateChecked: false
      verClickAllow: false # 获取验证码是否可以点击
      username: ''
      password: ''
      ver: ''
      isType: false # 是否为业务类型\
    }
  computed:
    typeObj: ->
      {
        # items: @types
        items: [{
          ctId: 1
          ctName: '一批'
        }]
        title: '业务类型'
      }
    categoryObj: ->
      {
        items: @categorys
        title: '经营类目'
      }
  methods:
    # @author zwei
    # 用户名同步更新
    # @param {String} val 内容
    inputUsername: (val) ->
      @verClickAllow = val.length is 11
      @username = val
    # @author zwei
    # 验证码同步更新
    # @param {String} val 内容
    inputVer: (val) ->
      @ver = val
    # @author zwei
    # 密码同步更新
    # @param {String} val 内容
    inputPassword: (val) ->
      @password = val
    # @author zwei
    # 点击前往业务类型
    clickTypeSelect: ->
      @isType = true
      @routerObj = @typeObj
      @$router.push '/account/login/regist/type_single'
    # @author zwei
    # 点击前往经营类目
    clickCategorySelect: ->
      @isType = false
      @routerObj = @categoryObj
      @$router.push '/account/login/regist/type_multiple'
    # @author zwei
    # 邀请码同步更新
    # @param {String} val 内容
    inputApply: (val) ->
      # console.log(val)
    # @author zwei
    # 点击注册
    clickRegist: ->
      if not @delegateChecked
        alert('请同意买卖通用户协议')
      else if @username.length < 6
        alert('用户名太短')
      else if @ver.length < 1
        alert('验证码太短')
      else if @password.length < 6
        alert('密码太短')
      else if @type.length < 1
        alert('请选择业务类型')
      else if @category.length < 1
        alert('请选择经营类目')
      else
        @$router.push('/account')
    # @author zwei
    # 点击获取验证码
    # @return {Promise} 返回一个用来执行倒计时
    clickGetVer: ->
      new Promise((res, rej) ->
        alert('测试使用，无实际小效果')
        res()
      )
    # @author zwei
    # 点击用户协议
    clickDelegate: ->
      @$router.push '/account/login/regist/delegate'
    # @author zwei
    # 检测用户协议是否勾选
    # @param {Object} payload 回调载体
    changeDelegateChecked: (payload) ->
      @delegateChecked = payload.checked
    # @author zwei
    # 前往类型选择的回调
    # @param {Object} obj 回调参数
    routerCallback:(obj) ->
      @$router.go(-1)
</script>

<style lang="sass" scoped>
.regist
  display: flex
  flex-direction: column
  align-items: center
  color: #333
  background: white
  .top
    width: 100%
    margin-top: 0.2rem
    padding-left: 0.24rem
    .title
      font-weight: 800
      font-size: 0.32rem
      margin-top: 0.08rem
  .footer
    position: absolute
    left: 0
    display: flex
    width: 100%
    z-index: -1
  .logo
    top: 0
    flex-direction: column
    justify-content: center
    align-items: center
    height: 2rem
    margin: 0
  .form
    display: flex
    flex-direction: column
    margin-top: 0.32rem
    .input
      width: 3rem
      height: 0.4rem
      margin-top: 0.2rem
      &:focus
        border-color: #aaa
    .cell-select
      width: 3rem
      height: 0.4rem
      margin-top: 0.2rem
      border-color: #eee
    .login-button
      color: white
      width: 3rem
      height: 0.48rem
      border-radius: 0.24rem
      margin-top: 0.2rem
  .tools
    display: flex
    justify-content: space-between
    margin-top: 0.2rem
    .ver
      margin-left: 0.2rem
  .footer
    bottom: 0
    justify-content: center
    align-items: center
    height: 0.32rem
  .delegate-area
    display: flex
    align-items: center
    margin-top: 0.16rem
    font-size: .12rem
    .delegate
      text-decoration: underline
      color: #ff4063
      opacity: 0.85
      font-size: 0.14rem
  .typeShow
    transform: translateX(0)
</style>
