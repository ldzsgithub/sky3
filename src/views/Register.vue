<template>
  <div class="register">
    <h2>注册</h2>

    <van-form @submit="doRegister">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repassword"
        type="repassword"
        name="密码"
        label="密码"
        placeholder="确认密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="phoneNumber"
        name="手机号码"
        label="手机号码"
        placeholder="手机号码"
        :rules="[{ required: true, message: '请填写电话号' }]"
      />
      <div class="but">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
      <div class="but">
        <router-link to="/login">
          <van-button round block type="info">
            返回
          </van-button>
        </router-link>
      </div>
    </van-form>

  </div>
</template>

<script>
  import {doRegister} from "../network/register";

  export default {
    name: 'Register',
    data() {
      return {
        username: '',
        password: '',
        repassword: '',
        phoneNumber: ''
      }
    },
    components: {
    },
    methods: {
      doRegister() {
        if(this.password.trim() == '') {
          this.$toast.fail('请输入密码');
          return false;
        }
        if(this.repassword.trim() == '') {
          this.$toast.fail('请输入密码');
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
        doRegister(this.username, this.password, this.phoneNumber).then(res => {
          if(res.data.state == 0) {
            this.$toast.success(res.data.msg);
            this.$router.replace('/login')
          } else {
            this.$toast.fail(res.data.msg);
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
  .but {
    margin: 20px;
  }
</style>
