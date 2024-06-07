<!-- 待付款 -->
<template>
  <view class="payment">
    <view class="payment-top">
      <view class="p-top">
        <view>
          <image src="../../static/打车出行.png" mode=""></image>
          <text>车辆信息</text>
        </view>
        <view>奥迪A6 2020款 豪华动感型</view>
        <view>当前里程：28741km</view>
      </view>
      <view class="p-middle">
        <view class="car">
          <view class="img">
            <image src="../../static/image/汽车保养.png" mode=""></image>
          </view>
          <view class="right">
            <view>汽车保养</view>
            <view>￥582.5</view>
          </view>
        </view>
        <view class="main">
          <view class="title">
            主要商品
          </view>
          <view class="mobil">
            <view class="img">
              <image src="../../static/image/美孚.png" mode=""></image>
            </view>
            <view class="right">
              <view></view>
              <view></view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="payment-bottom">

    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .payment {
    margin: 0;
    padding: 0;

    .payment-top {
      padding: 20rpx;
      background-color: #f5f5f5;

      .p-top {
        background-color: #fff;
        padding: 20rpx;
        border-radius: 14px;

        view:nth-child(1) {
          image {
            width: 6%;
            height: 36rpx;
          }

          text {
            margin-left: 10rpx;
          }
        }

        view:nth-child(2) {
          padding: 30rpx 0 10rpx 30rpx;
        }

        view:nth-child(3) {
          padding: 10rpx 0 20rpx 30rpx;
          color: #828282;
          font-size: 28rpx;
        }
      }

      .p-middle {
        margin-top: 30rpx;
        padding: 30rpx;
        background-color: #fff;
        border-radius: 14px;

        .car {
          display: flex;
          border-bottom: 1px solid #f5f5f5;
          padding-bottom: 20rpx;

          .img {
            width: 32%;

            image {
              width: 100%;
              height: 210rpx;
              border-radius: 10rpx;
            }
          }

          .right {
            height: 210rpx;
            padding-left: 30rpx;

            view:nth-child(2) {
              color: #fc755e;
              font-weight: bold;
              padding-top: 110rpx;
            }
          }
        }

        .main {
          display: flex;
          border-bottom: 1px solid #f5f5f5;
          padding-bottom: 20rpx;
        }
      }
    }

    .payment-bottom {
      background-color: #fff;
    }
  }
</style>