<template>
  <div id="history-data">
    <!-- echarts -->
    <div v-if="showModel">
      <v-chart class="line-chart" :options="lineData"/>
    </div>

    <!-- 列表 -->
    <div v-if="!showModel">
      <table>
        <thead>
        <tr>
          <th width="70%">时间</th>
          <th width="30%">报警值</th>
        </tr>
        </thead>
        <tr v-for="d in listData">
          <td>{{d.date}}</td>
          <td>{{d.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import ECharts from "vue-echarts/components/ECharts";
  import "echarts/lib/chart/line";
  import {selectHistoryByProbeId, selectHistoryByProbeIdLine} from "../../../network/categories/history";
  import {formatDate} from "../../../common/utils";

  export default {
    name: "HistoryData",
    props: ['probeId', 'date', 'showModel'],
    components: {
      "v-chart": ECharts
    },
    data() {
      return {
        lineData: {
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
        },
        listData: []
      };
    },
    mounted() {
      if(this.probeId != 0) {
        if(this.showModel) {
          this.selectLine();
        } else {
          this.selectList();
        }
      }
    },
    methods: {
      selectLine() {
        selectHistoryByProbeIdLine(this.probeId, formatDate(this.date,'yyyyMMdd')).then(res => {
          if(res.data.state === 0) {
            this.lineData.series[0].data =
              [res.data.data[0],
                res.data.data[3],
                res.data.data[7],
                res.data.data[11],
                res.data.data[15],
                res.data.data[19],
                res.data.data[23]]
          }
        }).catch(err => {
        })
      },
      selectList() {
        this.listData = [];
        selectHistoryByProbeId(this.probeId, formatDate(this.date,'yyyyMMdd')).then(res => {
          if(res.data.state === 0) {
            for(let d of res.data.data) {
              this.listData.push(d);
            }
          }
        }).catch(err => {
        })
      }
    },
    watch: {
    }
  };
</script>

<style scoped>
  .line-chart {
    width: 100vw;
    height: 75vh;
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
</style>
