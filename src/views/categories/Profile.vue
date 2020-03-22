<template>
  <div class="home">
    <div class="header">
      <div class="wrapper">
        <el-avatar :size="100">{{$store.state.user}}</el-avatar>
        <b>兰大中{{$store.state.user}}</b>
      </div>
    </div>
    <div class="content">
      <profile-list></profile-list>
    </div>

  </div>
</template>

<script>
  import ProfileList from "../../components/content/profileList/ProfileList";

  export default {
    name: 'Profile',
    components: {
      ProfileList
    },
    methods: {
    }
  }
</script>

<style scoped>
  .header .wrapper {
    margin: 30px;
  }
  .header b {
    font-size: 30px;
    margin-left: 30px;
    margin-top: 60px;
  }
  /* 间距阴影 */
  .header::after, .content::after {
    content: "";
    display: block;
    height: 8px;
    background-color: #e9e9e9;
    border-top: 1px #dcdcdc solid;
    border-bottom: 1px #dcdcdc solid;
  }
</style>
