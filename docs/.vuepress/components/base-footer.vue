<template>
  <div class="base-footer">
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
  export default {
    name: 'base-footer'
  }
</script>

<style scoped lang="scss">
  .base-footer{
    position: absolute;
    height: 50px;
    width: 100%;
    bottom: 0;
    background: rgba(255, 255, 255, 0.9);
    border-top: 1px solid rgba(0, 0, 0, 0.25);
  }
</style>
