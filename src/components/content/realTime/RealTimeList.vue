<template>
  <div id="real-time-list" class="realTimeList">
    <!-- 图片显示 -->
    <template v-if="showModel == false" v-for="dept in this.$store.state.org.depts">
      <template v-if="deptId === 0 || dept.departmentId === deptId" v-for="host in dept.hosts">
        <div v-if="hostId === 0 || host.hostId === hostId" v-for="probe in host.probes"
             :class="onlyWarn && alarmLevel(probe) !== 0 || !onlyWarn?'item':''"
             @click="probeDetail(probe, host, dept)">
          <div v-if="onlyWarn && alarmLevel(probe) !== 0">
            <img v-if="alarmLevel(probe) === 1" src="~assets/img/alarm/low_alarm.png" alt="">
            <img v-if="alarmLevel(probe) === 2" src="~assets/img/alarm/high_alarm.png" alt="">
            <p> {{probe.probeName}} </p>
            <p> {{probe.realtimeValue}} </p>
          </div>
          <div v-if="!onlyWarn">
            <img v-if="alarmLevel(probe) === 0" src="~assets/img/alarm/no_alarm.png" alt="">
            <img v-if="alarmLevel(probe) === 1" src="~assets/img/alarm/low_alarm.png" alt="">
            <img v-if="alarmLevel(probe) === 2" src="~assets/img/alarm/high_alarm.png" alt="">
            <p> {{probe.probeName}} </p>
            <p> {{probe.realtimeValue}} </p>
          </div>
        </div>
      </template>
    </template>
    <!-- 列表展示 -->
    <table v-if="showModel == true">
      <thead>
      <tr>
        <th width="32%">主机</th>
        <th width="52%">检测点</th>
        <th width="16%">报警值</th>
      </tr>
      </thead>
      <template v-for="dept in this.$store.state.org.depts">
        <template v-if="deptId === 0 || dept.departmentId === deptId" v-for="host in dept.hosts">
          <template v-if="hostId === 0 || host.hostId === hostId" v-for="probe in host.probes">
            <tr v-if="onlyWarn && alarmLevel(probe) > 0" @click="probeDetail(probe, host, dept)">
              <td> {{host.hostName}} </td>
              <td> {{probe.probeName}} </td>
              <td :class="alarmColor(probe)"> {{probe.realtimeValue}} </td>
            </tr>
            <tr v-if="!onlyWarn" @click="probeDetail(probe, host, dept)">
              <td> {{host.hostName}} </td>
              <td> {{probe.probeName}} </td>
              <td :class="alarmColor(probe)"> {{probe.realtimeValue}} </td>
            </tr>
          </template>
        </template>
      </template>
    </table>
    <van-overlay :show="show" @click="show = false">
      <div @click.stop>
        <real-time-list-detail :probe="probe" :host="host" :dept="dept" v-on:closeDetail="closeDetail"></real-time-list-detail>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import RealTimeListDetail from "./RealTimeListDetail";
  export default {
    name: 'RealTimeList',
    props: ['deptId', 'hostId', 'onlyWarn', 'showModel'],
    components: {
      RealTimeListDetail
    },
    data() {
      return {
        show: false,
        probe: -1,
        host: -1,
        dept: -1
      }
    },
    methods: {
      alarmLevel(probe) {
        if(probe.probeType === 1) {
          if(probe.realtimeValue < probe.lowValue) {
            return 1;
          } else if(probe.realtimeValue > probe.highValue) {
            return 2;
          } else {
            return 0;
          }
        } else {
          if(probe.realtimeValue > probe.highValue) {
            return 2;
          } else if (probe.realtimeValue > probe.lowValue) {
            return 1;
          } else {
            return 0;
          }
        }
      },
      probeDetail(probe, host, dept) {
        this.show = true;
        this.probe = probe;
        this.host = host;
        this.dept = dept;
      },
      closeDetail() {
        this.show = false;
      },
      alarmColor(probe) {
        let flag = this.alarmLevel(probe)
        if(flag === 1) {
          return "low-alarm";
        } else if(flag === 2) {
          return "high-alarm"
        }
      }
    },
    filters: {
      ellipsis: function (value) {
        if (!value) return "";
        if (value.length > 5) {
          return value.slice(0, 5) + "...";
        }
        return value;
      }
    }
  }
</script>
<style scoped>
  #real-time-list {
    margin-bottom: 49px;
  }
  .realTimeList {
    display: flex;
    flex-wrap: wrap;
    border-left: #f8f9fa 1px solid;;
  }
  img {
    margin: 8px auto;
    width: 64px;
    height: 64px;
  }
  .item {
    text-align: center;
    border-right: #f8f9fa 1px solid;
    border-bottom:  #f8f9fa 1px solid;
    width: calc(100% / 3);
    flex-basis: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
  }
  table td, table th {
    border: 0.5px solid #cad9ea;
    color: #666;
    height: 30px;
  }
  table thead th {
    background-color: #CCE8EB;
  }
  table tr:nth-child(odd) {
    background: #fff;
  }
  table tr:nth-child(even) {
    background: #F5FAFA;
  }

  .low-alarm {
    color: #FF9900;
  }
  .high-alarm {
    color: red;
  }
</style>
