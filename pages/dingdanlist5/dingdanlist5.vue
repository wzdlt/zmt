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
      <view class="box2-1">
        <view class="box2-1-left">
          <image src="../../static/image/shanghu.png" mode=""></image>
        </view>
        <view class="box2-1-right">正茂通用户</view>
      </view>
      <view class="box2-2">
        <view class="box2-2-left">
          <image src="../../static/image/青少年男鞋.png" mode=""></image>
        </view>
        <view class="box2-2-right">
          <view class="box2-2-right1">男运动鞋秋季男鞋青少年正品透气夏网面减震跑步休闲旅游鞋</view>
          <view class="box2-2-right2">标准白:42</view>
          <view class="box2-2-right3">
            <text style="font-size: 12px;">¥</text>890.00
            <text style="font-size: 12px;color: #ccc;margin-left: 5px;">x1</text>
          </view>
        </view>
      </view>
      <view class="box2-3">
        <view class="box2-3-1">
          <view class="box2-3-1-left">优惠金额</view>
          <view class="box2-3-1-right">¥890.00</view>
        </view>
        <view class="box2-3-1">
          <view class="box2-3-1-left">运费</view>
          <view class="box2-3-1-right">¥0.00</view>
        </view>
        <view class="box2-3-2">
          实付<text style="color: #fc5437;margin-left: 10px;">¥890.00</text>
        </view>
        <view  class="box2-3-3">备注： 请尽快发货，发顺丰</view>
      </view>
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
      <button>申请售后</button>
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

        .box1-right2 {
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

      .box2-1 {
        display: flex;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 10px;
        padding-bottom: 15px;

        .box2-1-left {
          margin-right: 5px;

          image {
            width: 20px;
            height: 20px;
          }
        }
      }

      .box2-2 {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e9e9e9;
        margin-bottom: 10px;
        padding-bottom: 15px;

        .box2-2-left {
          width: 30%;
          border-radius: 5px;
          overflow: hidden;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .box2-2-right {
          width: 66%;

          .box2-2-right1 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 15px;
          }

          .box2-2-right2 {
            font-size: 12px;
            color: #ccc;
            margin: 5px 0 10px;
          }

          .box2-2-right3 {}
        }
      }
      .box2-3{
        .box2-3-1{
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          .box2-3-1-left{
            color: #767676;
          }
        }
        .box2-3-2{
          text-align: right;
          font-size: 17px;
          margin-bottom: 15px;
        }
        .box2-3-3{
          background-color: #f5f5f5;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
        }
      }
    }

    .box3 {
      width: 90%;
      margin: 0 auto 10px;
      background-color: #fff;
      border-radius: 15px;
      padding: 10px;
      box-sizing: border-box;

      .box3-top {
        margin-bottom: 20px;
        font-weight: bold;
      }

      .box3-bottom {

        .box3-bottom1 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;

          .box3-bottom1-1 {
            color: #707070;
            font-size: 15px;
          }

          .box3-bottom1-2 {
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