<template>
  <view class="box">
    <view class="box1">
      <uv-sticky bgColor="#fff">
        <uv-tabs :list="list" :scrollable="false" lineColor="#fc4424" :activeStyle="{color:'#fc4424'}"
          :inactiveStyle="{color:'#ccc'}">
        </uv-tabs>
      </uv-sticky>
    </view>

    <view class="box2">
      <view class="box2-1">
        <view class="box2-1-top">
          <view class="box2-1-top1">订单编号:983719387471</view>
          <view class="box2-1-top2">待核销</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          name: '待核销',
        }, {
          name: '已注销',
        }]
      };
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    height: 100vh;
    .box2{
      .box2-1{
        background-color: #fff;
        width: 90%;
        margin: 10px auto;
        padding: 10px;
        border-radius: 10px;
        box-sizing: border-box;
        .box2-1-top{
          display: flex;
          justify-content: space-between;
          .box2-1-top1{
            color: #ccc;
            font-size: 14px;
          }
          .box2-1-top2{
            color: #fc573b;
            font-size: 15px;
          }
        }
      }
    }
  }
</style>