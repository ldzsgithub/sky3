<template>
  <div id="tabbar">
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
    },
    mounted() {
      this.$router.replace("/categories/home");
    }
  }
</script>

<style>
</style>
