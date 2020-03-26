<template>
  <tab-bar>
    <tab-bar-item link="/categories/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/categories/realTime">
      <img slot="icon" src="~assets/img/tabbar/grid.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/grid_active.svg" alt="">
      <div slot="text">实时数据</div>
    </tab-bar-item>
    <tab-bar-item link="/categories/history">
      <img slot="icon" src="~assets/img/tabbar/chart.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/chart_active.svg" alt="">
      <div slot="text">历史数据</div>
    </tab-bar-item>
    <tab-bar-item link="/categories/profile">
      <img slot="icon" src="~assets/img/tabbar/person.svg" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/person_active.svg" alt="">
      <div slot="text">个人中心</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "common/tabbar/TabBar"
  import TabBarItem from 'common/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components: {
      TabBar, TabBarItem
    }
  }
</script>
