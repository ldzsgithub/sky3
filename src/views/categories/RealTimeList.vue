<template>
  <div id="real-time-list" class="realTimeList">

<!--    <div id="wrapper" v-for="item in items">-->
<!--      <div class="item"><img src="~assets/img/alarm/no_alarm.png" alt="">-->
<!--        <p> {{item.probeName | ellipsis}} </p><p> {{item.probe | ellipsis}} </p>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>

  import {selectByHostId} from "../../network/categories/realTimeList";

  export default {
    name: 'RealTimeList',
    components: {},
    data() {
      return {
        items: []
      }
    },
    created() {
    },
    methods: {

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
