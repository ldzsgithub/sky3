<template>
  <div id="categories">
    <keep-alive><router-view></router-view></keep-alive>
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
