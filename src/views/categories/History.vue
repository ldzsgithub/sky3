<template>
  <div class="history">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" @change="setHostOption()"/>
      <van-dropdown-item v-model="host" :options="hostOption" @change="setProbeOption()"/>
      <van-dropdown-item v-model="probe" :options="probeOption"/>
    </van-dropdown-menu>
    <van-cell is-link @click="showPopup">选择时间<b>{{currentDate | dateFormat}}</b></van-cell>
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
    <button @click="select()">查询</button>
    <van-switch v-model="checked" />
    <div v-if="!checked" v-for="d in data">
      <div style="color: red">{{d.date}}<b>{{d.value}}</b></div>
    </div>
    <div v-if="checked">
      <HistoryLine :probe-id="probe" :date="currentDate"></HistoryLine>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../common/utils";
  import {selectHistoryByProbeId} from "../../network/categories/history";
  import HistoryLine from "../../components/content/echarts/HistoryLine";

  export default {
    name: 'History',
    components: {
      HistoryLine
    },
    data() {
      return {
        minDate: new Date(2019, 1, 1),
        maxDate: new Date(),
        currentDate: new Date(2019, 9, 12),
        show: false,
        dept: 0,
        host: 0,
        probe: 0,
        deptOption: [
          { text: '全部', value: 0 },
        ],
        hostOption: [
          { text: '全部', value: 0 },
        ],
        probeOption: [
          { text: '全部', value: 0 },
        ],
        checked: true,
        data: []
      };
    },
    mounted() {
      this.setOption();
    },
    methods: {
      setOption() {
        for(let d of this.$store.state.org.depts) {
          if(d.hosts.length > 0) {
            this.deptOption.push({text: d.departmentName, value: d.departmentId});
          }
        }
      },
      setHostOption() {
        this.host = 0;
        this.hostOption = [{text: '全部', value: 0}];
        this.probe = 0;
        this.probeOption = [{text: '全部', value: 0}];
        if(this.dept === 0) return false;
        let checkDept = this.$store.state.org.depts.find(c => {
          return c.departmentId === this.dept
        })
        for(let h of checkDept.hosts) {
          this.hostOption.push({text: h.hostName, value: h.hostId});
        }
      },
      setProbeOption() {
        this.probe = 0;
        this.probeOption = [{text: '全部', value: 0}];
        if(this.host === 0) return false;
        for(let dept of this.$store.state.org.depts) {
          if(dept.departmentId === this.dept) {
            for(let host of dept.hosts) {
              if(host.hostId === this.host) {
                for(let probe of host.probes) {
                  this.probeOption.push({text: probe.probeName, value: probe.probeId});
                }
              }
            }
          }
        }
      },
      showPopup() {
        this.show = true;
      },
      select() {
        this.data = [];
        selectHistoryByProbeId(this.probe, formatDate(this.currentDate,'yyyyMMdd')).then(res => {
          if(res.data.state === 0) {
            for(let d of res.data.data) {
              this.data.push(d);
            }
          }
          console.log(res.data.data)
        }).catch(err => {

        })
      }
    },
    filters: {
      dateFormat: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + MM + '-' + d;
      }
    }
  }
</script>

<style scoped>
  b {
    margin-left: 40%;
  }
  .history {
    overflow: hidden;
    margin-bottom: 49px;
  }
</style>
