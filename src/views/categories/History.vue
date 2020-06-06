<template>
  <div class="history">
    <!-- 顶部导航 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="head.deptId" :options="head.deptOption" @change="setHostOption()"/>
      <van-dropdown-item v-model="head.hostId" :options="head.hostOption" @change="setProbeOption()"/>
      <van-dropdown-item v-model="head.probeId" :options="head.probeOption"/>
      <van-dropdown-item title="筛选">
        <van-cell is-link @click="showPopup()">选择时间<b>{{head.currentDate | dateFormat}}</b></van-cell>
        <van-switch-cell v-model="showModel" title="切换显示方式" />
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-popup v-model="head.show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        confirm-button-text=" "
        cancel-button-text=" "
        v-model="head.currentDate"
        type="date"
        :min-date="head.minDate"
        :max-date="head.maxDate"
      />
    </van-popup>

    <!-- 内容 -->
    <HistoryData ref="line" :key="head.probeId + head.currentDate + showModel"
                 :probe-id="head.probeId" :date="head.currentDate" :show-model="showModel"></HistoryData>
  </div>
</template>

<script>
  import HistoryData from "../../components/content/history/HistoryData";

  export default {
    name: 'History',
    components: {
      HistoryData
    },
    data() {
      return {
        showModel: true,
        date: new Date(),
        begin: false,
        head :{
          minDate: new Date(2019, 1, 1),
          maxDate: new Date(),
          currentDate: new Date(),
          show: false,
          deptId: 0,
          hostId: 0,
          probeId: 0,
          deptOption: [
            { text: '部门', value: 0 },
          ],
          hostOption: [
            { text: '主机', value: 0 },
          ],
          probeOption: [
            { text: '探头', value: 0 },
          ]
        }
      };
    },
    mounted() {
      this.setOption();
    },
    activated() {
      if(this.$route.params.departmentId != null) {
        this.setOption();
        this.head.deptId = this.$route.params.departmentId;
      }
      if(this.$route.params.hostId != null) {
        this.setHostOption();
        this.head.hostId = this.$route.params.hostId;
      }
      if(this.$route.params.probeId != null) {
        this.setProbeOption();
        this.head.probeId = this.$route.params.probeId;
      }
    },
    methods: {
      setOption() {
        for(let d of this.$store.state.org.depts) {
          if(d.hosts.length > 0) {
            this.head.deptOption.push({text: d.departmentName, value: d.departmentId});
          }
        }
      },
      setHostOption() {
        this.head.hostId = 0;
        this.head.hostOption = [{text: '选择主机', value: 0}];
        this.head.probeId = 0;
        this.head.probeOption = [{text: '选择探头', value: 0}];
        if(this.head.deptId === 0) return false;
        let checkDept = this.$store.state.org.depts.find(c => {
          return c.departmentId === this.head.deptId
        })
        for(let h of checkDept.hosts) {
          this.head.hostOption.push({text: h.hostName, value: h.hostId});
        }
      },
      setProbeOption() {
        this.head.probeId = 0;
        this.head.probeOption = [{text: '选择探头', value: 0}];
        if(this.head.hostId === 0) return false;
        for(let dept of this.$store.state.org.depts) {
          if(dept.departmentId === this.head.deptId) {
            for(let host of dept.hosts) {
              if(host.hostId === this.head.hostId) {
                for(let probe of host.probes) {
                  this.head.probeOption.push({text: probe.probeName, value: probe.probeId});
                }
              }
            }
          }
        }
      },
      showPopup() {
        this.head.show = true;
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
    },
    watch: {
    }
  }
</script>

<style scoped>
  .history {
    overflow: hidden;
    margin-bottom: 49px;
  }
  .switch {
    position: absolute;
    right: 0px;
    top: 50px;
  }
  b {
    margin-left: 50%;
  }
</style>
