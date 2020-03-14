<template>
  <div class="register">
    <el-form :model="registerForm">

      <h2>注册</h2>

      <el-form-item>
        <el-input v-model="registerForm.username" name="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="registerForm.password" name="username" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="registerForm.repassword" name="username" placeholder="请确认密码"></el-input>
      </el-form-item>

      <el-form-item class="center-button">
        <el-button type="primary" @click='doRegister'>注册</el-button>
        <el-button type="primary" @click='toLogin'>返回</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Register',
    data() {
      return {
        registerForm: {
          username: '',
          password: '',
          repassword: ''
        }
      }
    },
    components: {
    },
    methods: {
      toLogin() {
        this.$router.replace({
          name: "Login"
        })
      },
      doRegister() {
        //注册
      }
    }
  }
</script>

<style scoped>
  h2 {
    text-align: center;
  }
  .center-button {
    text-align:center;
    margin: 0 auto;
  }
</style>
