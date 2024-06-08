<template>
  <view class="box">
    <view class="box-top">
      <view class="box-top1">
        <uv-avatar shape="circle" text="北" size="50" fontSize="28" randomBgColor></uv-avatar>
      </view>
      <view class="box-top2">钱清养车服务门店</view>
    </view>
    <view class="box-center">
      <view class="box-center1">
        <view class="box-center1-top">
          <view>
            <image src="../../static/image/钱包.png" mode=""></image>
          </view>
          <view>余额</view>
        </view>
        <view class="box-center1-bottom">1358.00</view>
      </view>
      <view class="box-center2">
        <view class="box-center2-top">
          <view>
            <image src="../../static/image/钱袋.png" mode=""></image>
          </view>
          <view>待入账</view>
        </view>
        <view class="box-center2-bottom">283.00</view>
      </view>
    </view>
    <view class="box-bottom">
      <view class="box-bottom1">我的订单</view>
      <view class="box-bottom2">
        <view class="box-bottom2-left">
          <view><image src="../../static/image/商城.png" mode=""></image></view>
          <view>商品管理</view>
        </view>
        <view class="box-bottom2-left">
          <view><image src="../../static/image/_订单.png" mode=""></image></view>
          <view>客户订单</view>
        </view>
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
  .box {
    background-color: #f5f5f5;
    height: 100vh;
    .box-top {
      display: flex;
      padding: 40px 0 60px;
      background-color: #faeaeb;

      .box-top1 {
        width: 15%;
        margin-left: 5%;
      }

      .box-top2 {
        width: 70%;
        line-height: 50px;
        font-size: 18px;
      }
    }

    .box-center {
      width: 90%;
      background-color: #fff;
      border-radius: 10px;
      margin: -30px auto 0;
      display: flex;
      padding: 20px 0;

      .box-center1 {
        width: 50%;
        text-align: center;
        border-right: 1px solid #ccc;

        .box-center1-top {
          margin-bottom: 10px;
          display: flex;
          justify-content: center;

          image {
            margin-top: -3px;
            width: 25px;
            height: 25px;
          }
        }
      }

      .box-center2 {
        width: 50%;
        text-align: center;

        .box-center2-top {
          margin-bottom: 10px;
          justify-content: center;
          display: flex;

          image {
            margin-top: -3px;
            width: 25px;
            height: 25px;
          }
        }
      }
    }

    .box-bottom {
      width: 90%;
      background-color: #fff;
      border-radius: 10px;
      margin: 10px auto 0;
      padding: 15px 10px;
      box-sizing: border-box;
      .box-bottom1{
        font-weight: bold;
        margin-bottom: 30px;
      }
      .box-bottom2{
        display: flex;
        
        .box-bottom2-left{
          width: 50%;
          text-align: center;
          image{
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
</style>