<template>
  <div class="history">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption"/>
      <van-dropdown-item v-model="host" :options="hostOption"/>
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
  </div>
</template>

<script>

  export default {
    name: 'History',
    data() {
      return {
        minDate: new Date(2019, 1, 1),
        maxDate: new Date(),
        currentDate: new Date(),
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
        ]
      };
    },
    methods: {
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
    }
  }
</script>

<style>
  b {
    margin-left: 40%;
  }
</style>
