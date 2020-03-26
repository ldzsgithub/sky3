<template>
  <div id="login">
    <h2>登录</h2>
    <van-form @submit="doLogin">
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
      <div class="but">
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <div class="but">
      <router-link to="/register">
        <van-button round block type="info">
          注册
        </van-button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {doLogin} from "../network/login";

  export default {
    name: "login",
    data() {
      return {
        username: '兰大中',
        password: '1',
      }
    },
    methods: {
      doLogin() {
        doLogin(this.username, this.password).then(res => {
          if(res.data.state == 0) {
            this.$store.commit('setToken', {token : res.data.data, user : this.username});
            this.$router.replace({
              name: "Categories"
            })
          } else {
            //this.$message(res.data.msg);
          }
        })
      }
    }
  };
</script>
<style scoped>
  h2 {
    text-align: center;
  }
  .but {
    margin: 20px;
  }
</style>
