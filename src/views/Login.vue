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
        <el-button type="primary" @click='sub'>登录</el-button>
        <el-button type="primary" @click='register'>注册</el-button>
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
          username: '123123',
          password: '',
        }
      }
    },
    methods: {
      sub() {
        this.$router.replace({
          name: "About"
        })
      },
      register() {
        this.$router.replace({
          name: "Register"
        })
      }
    }
  };
</script>
<style scoped>
  h2 {
    text-align: center;
  }
  .login-button {
    text-align:center;
    margin: 0 auto;
  }
</style>
