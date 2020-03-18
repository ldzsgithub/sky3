<template>
  <div class="home">
    <ul class="header">
      <el-avatar :size="100">{{$store.state.user}}</el-avatar>
      <b>兰大中{{$store.state.user}}</b>
    </ul>
    <ul class="mid"></ul>
    <ul class="content">
      <li>
        <router-link to="#"></router-link>
      </li>
      <li>
        <router-link to="#">首页</router-link>
      </li>
      <li>
        <router-link to="#">修改密码</router-link>
      </li>
    </ul>
    <ul class="mid"></ul>
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
  body {
    background-color: #999999;
  }
  .header {
    margin: 30px;
  }
  .header b {
    font-size: 30px;
    position: absolute;
    margin-left: 30px;
    margin-top: 60px;
  }
  .mid {
    height: 8px;
    background-color: #e9e9e9;
    border: 1px #dcdcdc solid;
    border-left: none;
    border-right: none;
  }
  .content {
    /*margin: 0px 0;*/
    /*border-top: 1px #999 solid;*/
    /*box-shadow: 0px 0px 50px #999999;*/
  }

  li {
    /*text-align: center;*/
    border-bottom: 1px #e9e9e9 solid;
    line-height: 44px;
    height: 44px;
  }
  li:before {
    content: '';
  }
  li:last-child {
    border: none;
  }
</style>
