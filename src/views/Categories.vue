<template>
  <div id="tabbar">
    <router-link to="/categories/home"></router-link>
    <router-link to="/categories/Category"></router-link>
    <router-link to="/categories/about"></router-link>
    <router-link to="/categories/profile"></router-link>
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
