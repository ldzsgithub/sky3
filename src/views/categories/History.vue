<template>
  <div class="history">
    <van-dropdown-menu>
      <van-dropdown-item v-model="dept" :options="deptOption" />
      <van-dropdown-item v-model="host" :options="hostOption" />
      <van-dropdown-item v-model="probe" :options="probeOption" />
    </van-dropdown-menu>
    <van-cell @click="pickTime">选择时间</van-cell>
    <van-field
      v-model="startTime"
      placeholder="选择时间" readonly="readonly"
      @click="startTimePop = true"
    />
    <van-popup position="bottom">
      <van-datetime-picker
        v-model="startTimePop"
        type="datetime"
        @cancel="startTimePop = false"
        @confirm="startTimePop = false"
        @change="startTime"
      />
    </van-popup>
  </div>
</template>

<script>

  export default {
    name: 'History',
    data() {
      return {
        startTime: 0,
        endTime: 0,
        startTimePop: false,
        dept: 0,
        host: 0,
        probe: 0,
        deptOption: [
          { text: '全部', value: 0 },
          { text: '炼钢厂', value: 1 },
        ],
        hostOption: [
          { text: '全部', value: 0 },
          { text: '主机一', value: 1 },
          { text: '主机二', value: 2 },
        ],
        probeOption: [
          { text: '全部', value: 0 },
          { text: '探头一', value: 1 },
          { text: '探头二', value: 2 }
        ]
      };
    },
    methods: {
      pickTime() {
        this.show = true;
      }
    }
  }
</script>

<style>
</style>
