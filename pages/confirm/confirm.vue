<!-- 确认订单 -->
<template>
  <view class="confirm">
    <view class="confirm-box">
      <view class="on">
        <view class="top" v-for="(item,index) in list" :key="index">
          <view class="top-loop">
            <view class="img">
              <view class="left">
                <image :src="item.image" mode=""></image>
              </view>
              <view class="right">
                <view>{{item.text1}}</view>
                <view>{{item.text2}}</view>
                <view>{{item.text3}}<text>{{item.text4}}</text></view>
              </view>
            </view>
          </view>
        </view>
        <view class="money">
          <view class="money-loop" v-for="(item,index) in money" :key="index">
            <view class="money-box">
              <view>{{item.text1}}</view>
              <view>{{item.text2}}<text>{{item.text3}}</text></view>
            </view>
          </view>
        </view>
      </view>
      <view class="under">
        <view class="under-loop" v-for="(item,index) in pay" :key="index">
          <view class="under-box">
            <view>
              <image :src="item.image" mode=""></image>
              <text>{{item.text}}</text>
            </view>
            <view>
              <uv-radio-group>
                <uv-radio activeColor="#fc4424"></uv-radio>
              </uv-radio-group>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view class="bottom-box">
        <view class="left">
          <view>合计：<text>￥890</text><text>.00</text></view>
        </view>
        <view class="button">
          <uv-button type="primary" color="#f7433d" text="立即支付"></uv-button>
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
          image: '../../static/image/美孚.png',
          text1: '美孚(Mobil)金装美孚1号 全合…',
          text2: '全合成;4L',
          text3: '￥439.00',
          text4: '×1'
        }, {
          image: '../../static/image/驾驰.png',
          text1: '驾驰/THINKAUTO 放油螺栓…',
          text2: '全合成;4L',
          text3: '￥11.50',
          text4: '×1'
        }],
        money: [{
          text1: '工时费',
          text2: '￥100',
          text3: '选择抵扣卷'
        }, {
          text1: '实付金额',
          text2: '￥539'
        }, {
          text1: '备注',
          text2: '填写备注'
        }],
        pay: [{
          image: '../../static/image/微信.png',
          text: '微信支付'
        }, {
          image: '../../static/image/支付宝.png',
          text: '支付宝'
        }, {
          image: '../../static/image/ico-12.png',
          text: '余额'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .confirm {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;

    .confirm-box {
      padding: 30rpx;

      .on {
        background-color: #fff;
        padding: 20rpx 0;
        border-radius: 20px;

        .top {
          margin-top: 20rpx;

          .img {
            display: flex;

            .left {
              width: 30%;
              padding-left: 20rpx;

              image {
                width: 100%;
                height: 210rpx;
              }
            }

            .right {
              width: 70%;
              padding: 10rpx;

              view:nth-child(1) {
                font-size: 30rpx;
              }

              view:nth-child(2) {
                margin: 20rpx 0;
                font-size: 28rpx;
                color: #cdcdcd;
              }

              view:nth-child(3) {
                color: #fc4424;
                font-weight: bold;
                font-size: 34rpx;
                margin-top: 40rpx;

                text {
                  font-weight: 400;
                  font-size: 24rpx;
                  color: #cdcdcd;
                }
              }
            }
          }
        }

        .money {
          padding: 30rpx;

          .money-loop {
            .money-box {
              display: flex;
              justify-content: space-between;
              padding: 20rpx 0;

              view:nth-child(2) {
                text {
                  margin-left: 20rpx;
                  color: #fc4424;
                }
              }
            }
          }
        }
      }

      .under {
        margin-top: 30rpx;
        background-color: #fff;
        padding: 30rpx;
        border-radius: 20px;

        .under-loop {
          .under-box {
            display: flex;
            justify-content: space-between;
            padding: 20rpx 0;

            view:nth-child(1) {
              image {
                width: 40rpx;
                height: 40rpx;
              }

              text {
                margin-left: 20rpx;
              }
            }
          }
        }
      }
    }

    .bottom {
      padding: 10rpx 20rpx 40rpx;
      margin-top: 100rpx;
      background-color: #fff;

      .bottom-box {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left {
          view {
            font-size: 30rpx;

            text:nth-child(1) {
              color: #fc4424;
              font-size: 40rpx;
            }

            text:nth-child(2) {
              color: #fc4424;
              font-size: 28rpx;
            }
          }
        }

        .button {
          width: 40%;

          ::v-deep .uv-button--square {
            border-radius: 20px;
            width: 100%;
          }
        }
      }
    }
  }
</style>