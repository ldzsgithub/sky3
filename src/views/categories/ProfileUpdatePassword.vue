<template>
  <div id="updatePassword">
    开发中
    <router-link class="ss" to="/categories/profile">返回</router-link>
  </div>
</template>

<script>
  export default {
    name: 'updatePassword',
    methods: {
    },
    mounted() {
      console.log(this.$store.state.org)
    }
  }
</script>

<style scoped>
  .ss {
    color: red;
  }
</style>
