<template>
  <div class="register">
    <el-form :model="registerForm">
      <el-form-item>
        <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="loginForm.username" name="username" placeholder="请输入用户名"></el-input>
      </el-form-item>

      <el-form-item class="center-button">
        <el-button type="primary" @click='register'>注册</el-button>
        <el-button type="primary" @click='register'>返回</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'Register',
    components: {
    }
  }
</script>
