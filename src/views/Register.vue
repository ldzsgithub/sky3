<template>
  <div class="register">
    <el-form :model="registerForm">

      <h2>注册</h2>

      <el-form-item>
        <el-input v-model="registerForm.username" name="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="registerForm.password" name="password" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="registerForm.repassword" name="repassword" placeholder="请确认密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="registerForm.phoneNumber" name="phoneNumber" placeholder="手机号码"></el-input>
      </el-form-item>

      <el-form-item class="center-button">
        <el-button type="primary" @click='doRegister'>注册</el-button>
        <el-button type="primary">
          <router-link to="/login">返回</router-link>
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  import {doRegister} from "../network/register";

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
      doRegister() {
        if(this.registerForm.username.trim() == '') {
          this.$message('请输入用户名');
          return false;
        }
        if(this.registerForm.password.trim() == '') {
          this.$message('请输入密码');
          return false;
        }
        if(this.registerForm.repassword.trim() == '') {
          this.$message('请输入密码');
          return false;
        }
        // if(this.registerForm.password = this.registerForm.repassword) {
        //   this.$message('两次输入密码不一致');
        //   return false;
        // }
        // if(this.registerForm.phoneNumber.equals('')) {
        //   this.$message('请输入电话号码');
        //   return false;
        // }
        doRegister(this.registerForm).then(res => {
          if(res.data.state == 0) {
            this.$message(res.data.msg);
            this.$router.replace({
              name: "Login"
            })
          } else {
            this.$message(res.data.msg);
          }
        })
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
