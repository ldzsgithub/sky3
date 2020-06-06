<template>
  <div id="updatePassword">
  </div>
</template>

<script>
  import RealTimeListDetail from "../../components/content/realTime/RealTimeListDetail";
  export default {
    name: 'updatePassword',
    components: {
      RealTimeListDetail
    },
    methods: {
    },
    data() {
      return {
        show: false,
        probeId: 123
      }
    },
    mounted() {
      console.log(this.$store.state.org)
    }
  }
</script>

<style scoped>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
  .ss {
    color: red;
  }
</style>
