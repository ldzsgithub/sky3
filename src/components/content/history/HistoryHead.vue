<template>
  <div id="history-head">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" @change="setHostOption()"/>
      <van-dropdown-item v-model="host" :options="hostOption" @change="setProbeOption()"/>
      <van-dropdown-item v-model="probe" :options="probeOption"/>
    </van-dropdown-menu>

<!--    <van-dropdown-menu>-->
<!--      <van-dropdown-item title="选择时间">-->
<!--        <van-cell is-link @click="showPopup">选择时间<b>{{currentDate | dateFormat}}</b></van-cell>-->
<!--      </van-dropdown-item>-->
<!--      <van-dropdown-item title="筛选">-->
<!--        <van-switch-cell v-model="onlyWarn" title="仅显示报警" />-->
<!--      </van-dropdown-item>-->
<!--    </van-dropdown-menu>-->
    <div style="width: 70%"><van-cell is-link @click="showPopup">选择时间<b>{{currentDate | dateFormat}}</b></van-cell></div>

    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        confirm-button-text=" "
        cancel-button-text=" "
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>
  </div>
</template>

<script>

  export default {
    name: "HistoryHead",
    props: ['probeId', 'date'],
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
          { text: '选择部门', value: 0 },
        ],
        hostOption: [
          { text: '选择主机', value: 0 },
        ],
        probeOption: [
          { text: '选择探头', value: 0 },
        ]
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
        this.hostOption = [{text: '选择主机', value: 0}];
        this.probe = 0;
        this.probeOption = [{text: '选择探头', value: 0}];
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
        this.probeOption = [{text: '选择探头', value: 0}];
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
      probe: function (val) {
        if(this.probe != 0) this.$emit('getParam', val, this.currentDate);
      },
      currentDate: function (val) {
        if(this.probe != 0) this.$emit('getParam', this.probe, val);
      }
    }
  };
</script>

<style scoped>
  b {
    margin-left: 20%;
  }
</style>
