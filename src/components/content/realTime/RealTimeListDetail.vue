<template>
  <div class="wrapper">
    <b>监测点名称:</b>
    <div>{{probe.probeName}}</div>
    <br>
    <b>监测点类型:</b>{{probe.remarks}}
    <br>
    <b>低报值:</b>{{probe.lowValue}}
    <b>高报值:</b>{{probe.highValue}}
    <br>
    <b>所属主机:</b>
    <div>{{host.hostName}}</div>
    <br>
    <b>所属部门:</b>
    <div>{{dept.departmentName}}</div>
    <br>
    <b>负责人:</b>
    <div>{{probe.managerName}}</div>

    <van-button type="primary" @click="toHis()" class="historyBtn">历史数据</van-button>
    <van-button type="primary" @click="returnBtn()" class="returnBtn">返回</van-button>
  </div>

</template>

<script>

  export default {
    name: 'RealTimeListDetail',
    props: ['probe', 'host', 'dept'],
    methods: {
      returnBtn() {
        this.$emit("closeDetail")
      },
      toHis() {
        this.$router.push({
          name: 'History',
          params: {
            probeId: this.probe.probeId,
            hostId: this.host.hostId,
            departmentId: this.dept.departmentId
          }
        })
      }
    }
  }
</script>
<style scoped>
  .wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 80%;
    height: 60%;
    background-color: #fff;

    padding: 50px;
  }
  .historyBtn {
    position: absolute;
    bottom: 8%;
    left: 10%;
    width: 35%;
  }
  .returnBtn {
    position: absolute;
    bottom: 8%;
    right: 10%;
    width: 35%;
  }

  b {
    color: #42b983;
  }
</style>
