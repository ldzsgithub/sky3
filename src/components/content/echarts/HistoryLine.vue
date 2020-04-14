<template>
  <div id="history-line">
    <v-chart class="line-chart" :options="lineDate"/>
  </div>
</template>

<script>
  import ECharts from "vue-echarts/components/ECharts";
  import "echarts/lib/chart/line";
  import {selectHistoryByProbeIdLine} from "../../../network/categories/history";
  import {formatDate} from "../../../common/utils";

  export default {
    name: "HistoryLine",
    props: ['probeId', 'date'],
    components: {
      "v-chart": ECharts
    },
    data() {
      return {
        lineDate: {
          xAxis: {
            data: ["00:00","04:00","08:00","12:00","16:00","20:00","24:00"]
          },
          yAxis: {name:'数值'},
          series: [
            {
              type: "line",
              smooth: true,
              data: []
            }
          ]
        }
      };
    },
    mounted() {
      this.select();
    },
    methods: {
      select() {
        selectHistoryByProbeIdLine(this.probeId, formatDate(this.date,'yyyyMMdd')).then(res => {
          if(res.data.state === 0) {
            this.lineDate.series[0].data = [res.data.data[0], res.data.data[3], res.data.data[7],
              res.data.data[11], res.data.data[15], res.data.data[19], res.data.data[23],]
          }
          console.log(this.lineDate.series[0].data)
        }).catch(err => {

        })
      }

    }
  };
</script>

<style>
  .line-chart {
    width: 100vw;
  }
</style>
