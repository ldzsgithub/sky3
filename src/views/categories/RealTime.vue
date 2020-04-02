<template>
  <div class="RealTime">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" @change="setHostOption()"/>
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
        dept: 0,
        host: 0,
        deptOption: [
          {text: '全部', value: 0},
        ],
        hostOption: [
          {text: '全部', value: 0},
        ]
      }
    },
    mounted() {
      this.setOption();
      this.selectByHostId();
    },
    methods: {
      setOption() {
        for(let d of this.$store.state.org.depts) {
          if(d.hosts.length > 0) {
            this.deptOption.push({text: d.departmentName,value: d.departmentId});
          }
        }
      },
      setHostOption() {
        this.host = 0;
        this.hostOption = [{text: '全部', value: 0}];
        if(this.dept === 0) return false;
        let checkDept = this.$store.state.org.depts.find(checkDept => {
          return checkDept.departmentId === this.dept
        })

        for(let h of checkDept.hosts) {
          this.hostOption.push({text: h.hostName,value: h.hostId});
        }
      },
      selectByHostId() {
        selectByHostId(0).then(res => {
          if(res.data.state == 0) {
            console.log(res.data)
          } else {
            //失败处理
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
