<template>
  <div class="about">
    关于
    <h1>1212{{$store.state.token}}</h1>
    <i class="el-icon-edit"></i>
    <i class="el-icon-share"></i>
    <i class="el-icon-delete"></i>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
  </div>
</template>

<script>

  export default {
    name: 'About',
    components: {
    }
  }
</script>
