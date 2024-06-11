<template>
  <view class="header">
      <view 
      class="left"
      @click="syy">
          &lt;
      </view>
  
      <view class="center">提现</view>
  </view>
  
</template>

<script setup>
  const syy = () => {
    uni.navigateTo({
      url: '/pages/balance/index'
    });
  };
</script>

<style lang="scss">
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
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