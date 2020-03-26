<template>
  <div class="realTimeList">

    <div id="wrapper" v-for="">
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/low_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/high_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">
        <p> {{text | ellipsis}} </p><p> {{text | ellipsis}} </p>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'RealTimeList',
    components: {},
    data() {
      return {
        hostId: this.$route.query.hostId,

      }
    },
    methods: {
      f() {
        alert(this.$route.query.hostId)
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
  .realTimeList {
    --border-color : #999999;
  }
  #wrapper {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    border-top: var(--border-color) 1px solid;
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
