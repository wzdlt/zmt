<!-- 待评价 -->
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
        <!-- 汽车保养 -->
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
          <!-- 主要商品 -->
          <view class="mobil">
            <view class="img">
              <image src="../../static/image/美孚.png" mode=""></image>
            </view>
            <view class="right">
              <view>美孚（Mobil）金装美孚1号FS0W-30全合成机油润滑油</view>
              <view>全合成 | 0W-30 | 4L</view>
              <view>￥430.00 <text>× 1</text></view>
            </view>
          </view>
          <view class="title">
            搭配商品
          </view>
          <!-- 搭配商品 -->
          <view class="loop" v-for="(item,index) in ride" :key="index">
            <view class="ride">
              <view class="img">
                <image :src="item.image" mode=""></image>
              </view>
              <view class="right">
                <view>{{item.text1}}</view>
                <view>{{item.text2}}</view>
                <view>{{item.text3}}<text>{{item.text4}}</text></view>
              </view>
            </view>
          </view>
          <!-- 优惠金额 -->
          <view class="money">
            <view class="top">
              <view class="left">
                优惠金额
              </view>
              <view class="right">
                ￥20.00
              </view>
            </view>
            <view class="middle">
              <view class="left">
                工时费
              </view>
              <view class="right">
                ￥100.00
              </view>
            </view>
            <view class="bottom">
              实付<text>￥582.50</text>
            </view>
            <view class="input">
              <uv-input placeholder="备注: 请尽快发货, 发顺丰" border="surround"></uv-input>
            </view>
          </view>
        </view>
      </view>
      <!-- 订单信息 -->
      <view class="p-bottom">
        <view class="title">
          订单信息
        </view>
        <view class="loop" v-for="(item,index) in orders" :key="index">
          <view class="orders">
            <view class="left">
              {{item.text1}}
            </view>
            <view class="right">
              {{item.text2}}
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="payment-bottom">
      <view class="button">
        <view class="pay">
          <uv-button type="primary" color="#fc4424" shape="circle" text="去评价"></uv-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        ride: [{
          image: '../../static/image/马勒.png',
          text1: '马勒PM2.5活性炭空调滤LAK709',
          text2: '全合成 | 0W-30 | 4L',
          text3: '￥61.00',
          text4: '× 1'
        }, {
          image: '../../static/image/驾驰.png',
          text1: '驾驰/THINKAUTO 放油螺栓 发动机油底壳放油螺丝含密封圈',
          text2: '全合成 | 0W-30 | 4L',
          text3: '￥11.50',
          text4: '× 1'
        }],
        orders: [{
          text1: '订单编号',
          text2: '2021987616631'
        }, {
          text1: '下单时间',
          text2: '2021-11-12 15:58:32'
        }, {
          text1: '支付方式',
          text2: '微信支付'
        }]
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

      // 顶部
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

      //中部
      .p-middle {
        margin-top: 30rpx;
        padding: 30rpx;
        background-color: #fff;
        border-radius: 14px;

        //汽车保养
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

        .title {
          font-weight: bold;
          margin: 20rpx 0;
        }

        .main {

          //主要商品
          .mobil {
            display: flex;
            border-bottom: 1px solid #f5f5f5;
            padding-bottom: 20rpx;

            .img {
              width: 34%;

              image {
                width: 100%;
                height: 220rpx;
                border-radius: 10rpx;
              }
            }

            .right {
              width: 68%;
              height: 210rpx;
              padding-left: 30rpx;

              view:nth-child(2) {
                margin: 20rpx 0;
                font-size: 26rpx;
                color: #828282;
              }

              view:nth-child(3) {
                font-weight: bold;

                text {
                  font-weight: 400;
                  font-size: 22rpx;
                  color: #828282;
                }
              }
            }
          }

          //搭配商品
          .ride {
            display: flex;
            margin: 10rpx;
            border-bottom: 1px solid #f5f5f5;
            padding-bottom: 20rpx;

            .img {
              width: 34%;

              image {
                width: 100%;
                height: 220rpx;
                border-radius: 10rpx;
              }
            }

            .right {
              width: 68%;
              height: 210rpx;
              padding-left: 30rpx;

              view:nth-child(1) {
                font-size: 28rpx;
              }

              view:nth-child(2) {
                margin: 20rpx 0;
                font-size: 26rpx;
                color: #828282;
              }

              view:nth-child(3) {
                font-weight: bold;

                text {
                  font-weight: 400;
                  font-size: 22rpx;
                  color: #828282;
                  margin-left: 10rpx;
                }
              }
            }
          }

          // 优惠金额
          .money {
            padding-top: 30rpx;

            .top {
              display: flex;
              justify-content: space-between;
              color: #828282;
            }

            .middle {
              display: flex;
              justify-content: space-between;
              color: #828282;
              margin: 20rpx 0;
            }

            .bottom {
              text-align: right;
              font-weight: bold;

              text {
                color: #fc755e;
                margin-left: 20rpx;
              }
            }

            .input {
              margin-top: 30rpx;
            }
          }
        }
      }

      // 订单信息
      .p-bottom {
        margin-top: 30rpx;
        padding: 30rpx;
        background-color: #fff;
        border-radius: 14px;

        .title {
          font-weight: bold;
          margin-bottom: 40rpx;
        }

        .loop {
          .orders {
            margin: 20rpx 0;
            display: flex;
            justify-content: space-between;
            color: #828282;
          }
        }
      }
    }

    .payment-bottom {
      background-color: #fff;
      padding: 10rpx 30rpx 20rpx 30rpx;

      .button {
        display: flex;
        justify-content: end;

        .pay {
          width: 200rpx;
        }
      }
    }
  }
</style>