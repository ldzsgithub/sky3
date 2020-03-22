<template>
  <div id="button-list-item" @click="itemClick">
    <div class="item-icon"><slot name="icon"></slot></div>
    <div class="item-text"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "ButtonListItem",
    props: {
      link: {
        type: String,
        required: true
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.link).catch(err => {err})
      }
    }
  }
</script>

<style scoped>
  #button-list-item {
    /*text-align: center;*/
    border-bottom: 1px #e9e9e9 solid;
    line-height: 50px;
    height: 44px;
  }
  #button-list-item:last-child {
    border: none;
  }
  .item-icon img {
    width: 18px;
    height: 18px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    vertical-align: middle;
    float: left;
  }
  .item-text {
    /*margin-top: 10px;*/
  }
</style>
