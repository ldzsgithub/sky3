<template>
  <div id="history-list">
    <div v-for="d in data">
      <div style="color: red">{{d.date}}<b>{{d.value}}</b></div>
    </div>
  </div>
</template>

<script>
  import {selectHistoryByProbeId} from "../../../network/categories/history";
  import {formatDate} from "../../../common/utils";

  export default {
    name: "HistoryList",
    props: ['probeId', 'date'],
    data() {
      return {
        data: []
      };
    },
    mounted() {
      this.select();
    },
    methods: {
      select() {
        this.data = [];
        selectHistoryByProbeId(this.probeId, formatDate(this.date,'yyyyMMdd')).then(res => {
          if(res.data.state === 0) {
            for(let d of res.data.data) {
              this.data.push(d);
            }
          }
        }).catch(err => {

        })
      }
    }
  };
</script>

<style scoped>
  b {
    margin-left: 40%;
  }
</style>
