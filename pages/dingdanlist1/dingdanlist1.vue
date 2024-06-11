<template>
  <view class="box">
    <view class="box1">
      <view class="box1-left">
        <image src="../../static/image/ico-9.png" mode=""></image>
      </view>
      <view class="box1-right">
        <view class="box1-right1">李明 186****112</view>
        <view class="box1-right2">上海市宝山区张庙街道泗塘四村62号楼</view>
      </view>
    </view>
    <view class="box2">
      123
    </view>
    <view class="box3">
      <view class="box3-top">订单信息</view>
      <view class="box3-bottom">
        <view class="box3-bottom1">
          <view class="box3-bottom1-1">订单编号</view>
          <view class="box3-bottom1-2">2021987616631</view>
        </view>
        <view class="box3-bottom1">
          <view class="box3-bottom1-1">下单时间</view>
          <view class="box3-bottom1-2">2021-11-12 15:58:32</view>
        </view>
        <view class="box3-bottom1">
          <view class="box3-bottom1-1">支付方式</view>
          <view class="box3-bottom1-2">微信支付</view>
        </view>
      </view>
    </view>
    <view class="box4">
      <button>取消订单</button>
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
  .box {
    height: 100vh;
    background-color: #f0f0f0;
    padding-top: 10px;

    .box1 {
      width: 90%;
      margin: 0 auto 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .box1-left {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        image {
          width: 30px;
          height: 30px;
        }
      }

      .box1-right {
        width: 82%;
        .box1-right2{
          margin-top: 5px;
          font-size: 14px;
          color: #707070;
        }
      }
    }

    .box2 {
      width: 90%;
      margin: 0 auto 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 10px;
      box-sizing: border-box;
    }

    .box3 {
      width: 90%;
      margin: 0 auto 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 10px;
      box-sizing: border-box;
      .box3-top{
        margin-bottom: 20px;
        font-weight: bold;
      }
      .box3-bottom{
        
        .box3-bottom1{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .box3-bottom1-1{
            color: #707070;
            font-size: 15px;
          }
          .box3-bottom1-2{
            color: #707070;
            font-size: 15px;
          }
        }
      }
    }

    .box4 {
      background-color: #fff;
      position: fixed;
      width: 100%;
      bottom: 0;
      padding: 10px 0 20px;
      box-sizing: border-box;

      button {
        width: 100px;
        height: 35px;
        line-height: 35px;
        float: right;
        margin-right: 15px;
        color: #ccc;
        border-radius: 25px;
        border: 1px solid #ccc;
        background-color: #fff;
        font-size: 14px;
      }
    }
  }
</style>