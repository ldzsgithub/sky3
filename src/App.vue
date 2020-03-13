<template>
  <div id="app">
    <router-link to="/categories" v-show='isActive'><el-button type="primary">登录</el-button></router-link>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    methods: {
      show() {
        console.log("alert(122)");
      }
    },
    computed: {
      isActive() {
        return false
      },
      activeStyle() {
        return this.isActive ? {'color': 'red'} : {}
      }
    }
  }
</script>

<style>
</style>
