<template>
  <div class="history">
    <HistoryHead v-on:getParam="getParam"></HistoryHead>
    <div class="switch">切换<van-switch v-model="checked"/></div>
    <div v-if="begin && checked">
      <HistoryLine ref="line" :probe-id="probeId" :date="date"></HistoryLine>
    </div>
    <div v-if="begin && !checked">
      <HistoryList ref="list" :probe-id="probeId" :date="date"></HistoryList>
    </div>
  </div>
</template>

<script>
  import HistoryLine from "../../components/content/history/HistoryLine";
  import HistoryList from "../../components/content/history/HistoryList";
  import HistoryHead from "../../components/content/history/HistoryHead";

  export default {
    name: 'History',
    components: {
      HistoryHead, HistoryLine, HistoryList
    },
    data() {
      return {
        checked: true,
        begin: false,
        probeId: 0,
        date: null
      };
    },
    methods: {
      getParam(probeId, date) {
        this.probeId = probeId;
        this.date = date;
      }
    },
    watch: {
      probeId() {
        this.begin = false;
        this.$nextTick(() => {
          this.begin = true;
        });
      },
      date() {
        this.begin = false;
        this.$nextTick(() => {
          this.begin = true;
        });
      }
    }
  }
</script>

<style scoped>
  .history {
    overflow: hidden;
    margin-bottom: 49px;
  }
  .switch {
    height: 32px;
    width: 30%;
    position: absolute;
    right: 0px;
    top: 56px;
    line-height: 32px;
  }
  .switch b {

  }
</style>
