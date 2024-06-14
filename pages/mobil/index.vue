<template>
  <view class="header">
      <view 
      class="left"
      @click="switchToTab">
          &lt;
      </view>
  </view>
  
  <div class="banner">
    <img src="../../static/image/commodity.png" alt="" />
  </div>
</template>

<script>
</script>

<style lang="scss">
  page{
    background-color: #f5f5f5;
  }
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 50px;
      display: flex;
      z-index: 10;
      .left{
          width: 40px;
          height: 50px;
          text-align: center;
          line-height: 50px;
      }
  }
  
  .banner{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>