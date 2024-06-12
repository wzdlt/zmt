<template>
  <view class="box">
    <view class="box1">
      <image src="../../static/电脑.png" mode=""></image>
      <view class="box2">
        <view>1</view>
        <view>2</view>
        <view>3</view>
      </view>
    </view>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.box{
  background-color: #f5f5f5;
  height: 100vh;
  .box1{
    position: relative;
    image{
      width: 100%;
      height: 150px;
    }
    .box2{
      width: 90%;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
      position: absolute;
      left: 0; top: 80px; right: 0;
      margin: auto;
    }
  }
  
  .box3{
    
  }
}
</style>
