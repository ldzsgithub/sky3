<template>
  <div id="real-time-list">
    <!--    <p>{{deptId}}</p>-->
    <!--    <p>{{hostId}}</p>-->
    <!--    <p>{{items}}</p>-->
    <div v-for="dept in this.$store.state.org.depts">
      <div v-if="deptId === 0 || dept.departmentId === deptId" v-for="host in dept.hosts" class="realTimeList">
        <div v-if="hostId === 0 || host.hostId === hostId" v-for="probe in host.probes" class="item">
          <img v-if="ss(probe)" src="~assets/img/alarm/no_alarm.png" alt="">
          <p> {{probe.probeName | ellipsis}} </p>
          <p> {{probe.realtimeValue | ellipsis}} </p>
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
      ss(probe) {
        // probe.realtimeValue
        return probe.realtimeValue>0;
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
