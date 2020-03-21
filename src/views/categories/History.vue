<template>
  <div class="history">

<!--    <el-date-picker-->
<!--      v-model="value1"-->
<!--      type="datetime"-->
<!--      placeholder="选择日期时间">-->
<!--    </el-date-picker>-->

    <el-time-picker
      v-model="value1"
      :picker-options="{
      selectableRange: '00:00:00 - 23:59:59'
    }"
      placeholder="起始时间点">
    </el-time-picker>
    <el-time-picker
      v-model="value2"
      :picker-options="{
      selectableRange: '00:00:00 - 23:59:59',
      minTime: value1
    }"
      placeholder="结束时间点">
    </el-time-picker>
<p>------------</p>
    <el-time-picker
      is-range
      v-model="value1"
      range-separator="-"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围">
    </el-time-picker>
  </div>
</template>

<script>

  export default {
    name: 'History',
    data() {
      return {
        value1: '',
        value2: '',
        startTime: '',
        endTime: ''
      };
    },
    components: {
    }
  }
</script>

<style>
</style>
