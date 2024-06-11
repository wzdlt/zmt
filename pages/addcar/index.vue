<template>
  <view class="header">
      <view 
      class="left"
      @click="syy">
          &lt;
      </view>
  
      <view class="center">添加车辆</view>
  </view>
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
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      .left{
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
      }
      .center{
          flex: 1;
          text-align: center;
          line-height: 40px;
      }
  }
</style>