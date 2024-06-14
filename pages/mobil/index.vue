<template>
  <view class="header">
      <view 
      class="left"
      @click="switchToTab">
          &lt;
      </view>
  </view>
  
  <div class="banner">
    <img src="../../static/image/commodity" alt="" />
  </div>
</template>

<script>
</script>

<style lang="scss">
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
      z-index: 10;
      border-bottom: 1px solid #ccc;
      .left{
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
      }
  }
</style>