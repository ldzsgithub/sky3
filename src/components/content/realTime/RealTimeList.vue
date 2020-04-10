<template>
  <div id="real-time-list">
    <div v-for="dept in this.$store.state.org.depts">
      <div v-if="deptId === 0 || dept.departmentId === deptId" v-for="host in dept.hosts" class="realTimeList">
        <div v-if="hostId === 0 || host.hostId === hostId" v-for="probe in host.probes" class="item">
          <img v-if="imgChoose(probe) === 0" src="~assets/img/alarm/no_alarm.png" alt="">
          <img v-if="imgChoose(probe) === 1" src="~assets/img/alarm/low_alarm.png" alt="">
          <img v-if="imgChoose(probe) === 2" src="~assets/img/alarm/high_alarm.png" alt="">
          <p> {{probe.probeName | ellipsis}} </p>
          <p> {{probe.realtimeValue}} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'RealTimeList',
    props: ['deptId', 'hostId'],
    methods: {
      imgChoose(probe) {
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
    --border-color : #f8f9fa;
    margin-bottom: 49px;
  }
  .realTimeList {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    /*border-top: var(--border-color) 1px solid;*/
    border-left: var(--border-color) 1px solid;;
  }
  img {
    margin: 8px auto;
    width: 64px;
    height: 64px;
  }
  .item {
    border-right: var(--border-color) 1px solid;
    border-bottom:  var(--border-color) 1px solid;
    text-align: center;
    flex-basis: calc(100% / 3);
  }
</style>
