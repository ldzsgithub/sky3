<template>
  <div class="home">
    <ul class="header">
      <li class="wrapper">
        <el-avatar :size="100">{{$store.state.user}}</el-avatar>
        <b>兰大中{{$store.state.user}}</b>
      </li>
    </ul>
    <ul class="content">
      <li>
        <i class="el-icon-s-tools"></i>
        <router-link to="#"></router-link>
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        <router-link to="#">首页</router-link>
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        <router-link to="#">修改密码</router-link>
      </li>
      <li>
        <i class="el-icon-s-tools"></i>
        <router-link to="/login">退出登录</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Profile',
    components: {
    }
  }
</script>

<style scoped>
  .header .wrapper {
    margin: 30px;
  }
  .header b {
    font-size: 30px;
    margin-left: 30px;
    margin-top: 60px;
  }
  .content li {
    /*text-align: center;*/
    border-bottom: 1px #e9e9e9 solid;
    line-height: 44px;
    height: 44px;
  }
  .content li:last-child {
    border: none;
  }
  .content li i {
    margin-left: 20px;
    margin-right: 20px;
  }
  /* 间距阴影 */
  .header::after, .content::after {
    content: "";
    display: block;
    height: 8px;
    background-color: #e9e9e9;
    border-top: 1px #dcdcdc solid;
    border-bottom: 1px #dcdcdc solid;
  }
</style>
