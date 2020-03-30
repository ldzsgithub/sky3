<template>
  <div class="RealTime">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" />
      <van-dropdown-item v-model="host" :options="hostOption" @change="selectByHostId()"/>
    </van-dropdown-menu>
    <real-time-list ref="realTimeList"></real-time-list>
  </div>
</template>

<script>

  import {selectByHostId} from "../../network/categories/realTimeList";
  import RealTimeList from "./RealTimeList";

  export default {
    name: 'RealTime',
    components: {
      RealTimeList
    },
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
          {text: '主机一号', value: 1},
          {text: '主机二号', value: 2},
        ]
      }
    },
    mounted() {
      this.setOption();
      this.selectByHostId();
    },
    methods: {
      setOption() {
        console.log("org*")
      },
      selectByHostId() {
        selectByHostId(0).then(res => {
          if(res.data.state == 0) {
            console.log(res.data)
          } else {
            console.log(123)
          }
        })
      }
    }
  };
</script>
<style scoped>
  van-dropdown-menu {
    background-color: #0000ee;
  }
</style>
