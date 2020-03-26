<template>
  <div class="RealTime">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" />
      <van-dropdown-item v-model="host" :options="hostOption" @change="f()"/>
    </van-dropdown-menu>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'RealTime',
    data() {
      return {
        dept: 1,
        host: 0,
        deptOption: [
          {text: '全部', value: 0},
          {text: '炼钢厂', value: 1},
        ],
        hostOption: [
          {text: '全部', value: 0},
          {text: '主机一号', value: 'b'},
          {text: '主机二号', value: 'c'},
        ]
      }
    },
    methods: {
      f() {
        this.$router.replace({path: "/categories/realTime/realTimeList", query: {hostId: this.host}}).catch(err => err);
      }
    }
  };
</script>
<style scoped>
  van-dropdown-menu {
    background-color: #0000ee;
  }
</style>
