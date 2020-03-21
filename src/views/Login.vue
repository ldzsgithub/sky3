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
  import {doLogin} from "../network/login";

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
        doLogin(this.loginForm).then(res => {
          if(res.data.state == 0) {
            this.$store.commit('setToken', {token : res.data.data, user : this.loginForm.username});
            this.$router.replace({
              name: "Categories"
            })
          } else {
            this.$message(res.data.msg);
          }
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
