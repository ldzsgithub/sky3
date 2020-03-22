<template>
  <button-list>
    <button-list-item link="/categories/profile/updatePassword">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <div slot="text">修改密码</div>
    </button-list-item>
    <button-list-item link="#">
      <img slot="icon" src="~assets/img/tabbar/grid.svg" alt="">
      <div slot="text">修改密码</div>
    </button-list-item>
    <button-list-item link="#">
      <img slot="icon" src="~assets/img/tabbar/chart.svg" alt="">
      <div slot="text">修改密码</div>
    </button-list-item>
    <button-list-item link="#">
      <img slot="icon" src="~assets/img/tabbar/person.svg" alt="">
      <div slot="text">修改密码</div>
    </button-list-item>
  </button-list>
</template>

<script>
  import ButtonList from "common/buttonList/ButtonList";
  import ButtonListItem from "common/buttonList/ButtonListItem";

  export default {
    name: "ProfileBottomList",
    components: {
      ButtonList, ButtonListItem
    }
  }
</script>
