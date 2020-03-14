<template>
  <div id="login">
    <el-form :model="loginForm">

      <h2>登录</h2>

      <el-form-item>
        <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="loginForm.password" name="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item class="login-button">
        <el-button type="primary" @click='doLogin'>登录</el-button>
        <el-button type="primary" @click='toRegister'>注册</el-button>
      </el-form-item>

    </el-form>

  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        }
      }
    },
    methods: {
      doLogin() {
        //验证登录，成功 保存token 跳转
        //          失败 弹出错误信息
        this.$router.replace({
          name: "About"
        })
      },
      toRegister() {
        this.$router.replace({
          name: "Register"
        })
      }
    }
  };
</script>
<style scoped>
  #login {
    margin: auto 0;
  }
  h2 {
    text-align: center;
  }
  .login-button {
    text-align:center;
    margin: 0 auto;
  }
</style>
