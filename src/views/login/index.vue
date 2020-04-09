<template>
  <div>
      <!-- 标题 -->
      <van-nav-bar title="登录"></van-nav-bar>
      <!-- 输入框 -->

      <van-cell-group>
        <van-field v-model="user.mobile" clearable required border type="tel" label="手机号" placeholder="请输入手机号码"/>
        <van-field v-model="user.code" clearable border required  type="password" label="密码"  placeholder="请输入密码"/>
      </van-cell-group>
      <!-- 登录按钮 -->
    <div class="div_btn">

    <van-button type="info" class="btn" @click="hLogin">立即登录</van-button>
    </div>

  </div>
</template>

<script>
import { login } from '@/api/user.js'
export default {
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async hLogin () {
      const result = await login(this.user)
      console.log(result)
    }
  }
}
</script>

<style scoped lang='less'>
.div_btn {
    box-sizing: border-box;
    width: 100%;
    padding:20px;
 .btn {
    width: 100%;

}
}

</style>
