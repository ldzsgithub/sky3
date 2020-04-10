<template>
  <div id="updatePassword">
    1问请问
    {{$store.state.org}}
    <router-link to="/categories/profile">返回</router-link>
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

<style>
</style>
