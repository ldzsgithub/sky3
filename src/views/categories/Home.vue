<template>
  <div class="home">
    <v-chart class="line-chart" :options="lineDate"/>
  </div>
</template>

<script>
  import ECharts from "vue-echarts/components/ECharts";
  import "echarts/lib/chart/line";

  export default {
    name: "Home",
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
              data: [5, 201, 316, 10, 10, 20,50]
            }
          ]
        }
      };
    }
  };
</script>

<style>
  .line-chart {
    width: 100vw;
    /*height: 100%;*/
  }
</style>
