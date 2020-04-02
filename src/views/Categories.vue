<template>
  <div id="categories">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from 'content/mainTabbar/MainTabBar'

  export default {
    name: 'categories',
    components: {
      MainTabBar,
    },
    mounted() {
      this.$router.replace("/categories/home").catch(err => {});
    }
  }
</script>

<style>
</style>
