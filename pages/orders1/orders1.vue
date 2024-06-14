<!-- 商品订单 -->
<template>
  <view class="orders">
    <view class="top">
      <uv-tabs :list="list" @click="click" lineColor="#f56c6c" :activeStyle="{
			color: '#f56c6c',
			fontWeight: 'bold',
			transform: 'scale(1.05)'
    	}"></uv-tabs>
    </view>
    <view class="bottom">
      <view class="bottom-box" v-for="(item,index) in shop" :key="index">
        <view class="bottom-loop">
          <view class="top1">
            <view class="left">
              <image :src="item.image1" mode=""></image>
              <view>{{item.text1}}</view>
            </view>
            <view class="right">
              {{item.text2}}
            </view>
          </view>
          <view class="middle">
            <view class="left">
              <image :src="item.image2" mode=""></image>
            </view>
            <view class="right">
              <view>{{item.text3}}</view>
              <view>{{item.text4}}</view>
              <view>{{item.text5}}<text>{{item.text6}}</text></view>
            </view>
          </view>
          <view class="bottom1">
            <view>
              <text>共{{item.text7}}件商品</text>
              <text>合计</text>
              <text>{{item.text8}}</text>
            </view>
          </view>
          <view class="bottom2">
            <view class="button">
              <uv-button v-if="item.text9=item.text9" type="primary" shape="circle" color="#d7d7d7" :plain="true"
                :text="item.text9"></uv-button>
              <uv-button v-if="item.text10=item.text10" type="primary" shape="circle" color="#f56c6c" :plain="true"
                :text="item.text10"></uv-button>
            </view>
          </view>
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
          name: '全部',
        }, {
          name: '待付款',
        }, {
          name: '待发货'
        }, {
          name: '待收货'
        }, {
          name: '待评价'
        }],
        shop: [{
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '待付款',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00',
          text9: '取消订单',
          text10: '立即付款'
        }, {
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '待发货',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00',
          text9: '取消订单',
          text10: '邀请好友'
        }, {
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '待收货',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00',
          text10: '确认收货'
        }, {
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '待评价',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00',
          text9: '申请售后',
          text10: '评价'
        }, {
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '已完成',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00',
          text9: '申请售后'
        }, {
          image1: '../../static/image/店铺.png',
          text1: '正茂通商户',
          text2: '已取消',
          image2: '../../static/image/运动鞋.png',
          text3: '男运动鞋秋季男鞋青少年正品透…',
          text4: '标准白、42',
          text5: '￥890.00',
          text6: '×1',
          text7: '1',
          text8: '￥890.00'
        }]
      }
    },
    methods: {
      click(item) {
        console.log('item', item);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .orders {
    .top {
      padding: 30rpx;
    }

    .bottom {
      background-color: #f5f5f5;
      padding: 30rpx;

      .bottom-box {
        border-radius: 10rpx;
        background-color: #fff;
        margin: 20rpx 0;

        .bottom-loop {
          padding: 20rpx;

          .top1 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
              width: 50%;
              display: flex;
              align-items: center;

              image {
                width: 40rpx;
                height: 40rpx;
              }

              view {
                margin-left: 10rpx;
              }
            }

            .right {
              color: #fc735b;
              font-size: 28rpx;
            }
          }

          .middle {
            display: flex;
            margin: 40rpx 0 20rpx;

            .left {
              width: 30%;

              image {
                width: 100%;
                height: 180rpx;
                border-radius: 10rpx;
              }
            }

            .right {
              margin-left: 20rpx;

              view:nth-child(1) {
                font-size: 28rpx;
              }

              view:nth-child(2) {
                font-size: 26rpx;
                margin: 20rpx 0;
                color: #b0b0b0;
              }

              view:nth-child(3) {
                font-weight: bold;
                margin-top: 40rpx;

                text {
                  font-weight: 400;
                  font-size: 24rpx;
                  margin-left: 10rpx;
                  color: #b0b0b0;
                }
              }
            }
          }

          .bottom1 {
            margin: 20rpx 0;
            padding: 20rpx 0 0 0;
            border-top: 1px solid #f5f5f5;

            view {
              text-align: right;

              text:nth-child(1) {
                color: #b0b0b0;
                font-size: 26rpx;
              }

              text:nth-child(2) {
                margin: 0 20rpx;
              }

              text:nth-child(3) {
                color: #fc735b;
                font-weight: bold;
              }
            }
          }

          .bottom2 {
            padding: 20rpx 0 0 0;
            margin: 20rpx 0;
            border-top: 1px solid #f5f5f5;

            .button {
              display: flex;
              justify-content: end;

              ::v-deep .uv-button-wrapper:nth-child(1) {
                margin-right: 20rpx;
              }
            }
          }
        }
      }
    }
  }
</style>