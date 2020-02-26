<template>
  <div id="app">
    <router-link to="/login"></router-link>
    <router-link to="/home"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/profile"></router-link>
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'app',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
</style>
