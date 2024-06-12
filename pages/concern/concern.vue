<!-- 关注店铺 -->
<template>
  <view class="concren">
    <view class="concren-box" v-for="(item,index) in list" :key="index">
      <view class="shop">
        <view class="left">
          <view class="img">
            <image :src="item.image" mode=""></image>
          </view>
          <view class="name">
            <view>{{item.text1}}<text v-if="item.text2=item.text2">{{item.text2}}</text></view>
            <view>{{item.text3}}</view>
          </view>
        </view>
        <view class="right">
          <uv-icon name="arrow-right" color="#dddddd" size="20"></uv-icon>
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
          image: '../../static/image/正茂通.png',
          text1: '正茂通商户',
          text2: '官方自营',
          text3: '34人关注'
        }, {
          image: '../../static/image/小米.png',
          text1: '小米专卖店',
          text3: '34人关注'
        }, {
          image: '../../static/image/华为1.png',
          text1: '华为官方旗舰店',
          text3: '34人关注'
        }, {
          image: '../../static/image/vivo.png',
          text1: 'vivo旗舰店',
          text3: '34人关注'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .concren {
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
    height: 100vh;

    .concren-box {
      padding: 30rpx 30rpx 0;

      .shop {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        padding: 20rpx;

        .left {
          width: 60%;
          display: flex;

          .img {
            width: 20%;

            image {
              width: 100%;
              height: 80rpx;
            }
          }

          .name {
            margin-left: 20rpx;

            view:nth-child(1) {
              font-size: 30rpx;

              text {
                background-color: #fc4424;
                padding: 3rpx;
                color: #fff;
                font-size: 20rpx;
                border-radius: 3px;
                margin-left: 6rpx;
              }
            }

            view:nth-child(2) {
              font-size: 24rpx;
              color: #cdcdcd;
              margin-top: 10rpx;
            }
          }
        }

        .right {}
      }
    }
  }
</style>