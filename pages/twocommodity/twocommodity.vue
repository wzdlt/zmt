<!-- 二手商品详情 -->
<template>
  <view class="commodity">
    <view class="commodity-box">
      <view class="top">
        <view class="avatar">
          <uv-avatar src="../../static/image/头像.jpg"></uv-avatar>
          <view class="right">
            <view>蜡笔小生</view>
            <view>发布于： 2022-04-12 09:38:12</view>
          </view>
        </view>
        <view class="paragraph">
          而根据同程旅行发布的《2020端午小长假居民出行及出游趋势报告》，今年端午三天假期的机票价格平均较去年便宜了
          30%左右。火车票的预订数据显示，深圳一广州、上海一杭州、上海一南京、深圳一长沙、深圳一汕头、重庆一成都的预
          订热度排名最前。
        </view>
        <view class="img">
          <image src="../../static/image/phone.png" mode=""></image>
        </view>
      </view>
      <!-- 分割线 -->
      <view class="line"></view>
      <view class="input" v-for="(item,index) in list" :key="index">
        <view class="person">
          <view class="left">
            <image :src="item.image" mode=""></image>
            <text>{{item.text1}}</text>
          </view>
          <view class="right">
            {{item.text2}}
          </view>
        </view>
      </view>
      <!-- 分割线 -->
      <view class="line"></view>
      <view class="message">
        <view class="title">
          <view class="left">
            留言
          </view>
          <view class="right">
            <text>查看全部</text>
            <uv-icon name="arrow-right" color="#fc4424" size="18"></uv-icon>
          </view>
        </view>
        <view class="paragraph" v-for="(item,index) in message" :key="index">
          <view class="avatar">
            <uv-avatar :src="item.image"></uv-avatar>
            <view class="right">
              <view>{{item.name}}</view>
              <view>{{item.time}}</view>
            </view>
          </view>
          <view class="p">{{item.text}}</view>
        </view>
      </view>
      <!-- 分割线 -->
      <view class="line"></view>
      <view class="bottom">
        <view class="left">
          <image src="../../static/image/收藏.png" mode=""></image>
          <view>收藏</view>
        </view>
        <view class="middle">
          <uv-input placeholder="说点什么…" shape="circle" border="surround"></uv-input>
        </view>
        <view class="button">
          <uv-button type="primary" color="#f7433d" text="留言"></uv-button>
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
          image: '../../static/image/我的1.png',
          text1: '联系人',
          text2: '李昭'
        }, {
          image: '../../static/image/电话1.png',
          text1: '联系电话',
          text2: '13610926112'
        }],
        message: [{
          image: '../../static/image/头像.jpg',
          name: '雪山飞狐',
          time: '2022-04-12 09:38:12',
          text: '整个人生就是思想与劳动，劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫'
        }, {
          image: '../../static/image/头像.jpg',
          name: '雪山飞狐',
          time: '2022-04-12 09:38:12',
          text: '整个人生就是思想与劳动，劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .commodity {
    margin: 0;
    padding: 0;

    .commodity-box {
      width: 100%;

      .top {
        padding: 30rpx;

        .avatar {
          display: flex;

          .right {
            margin-left: 20rpx;

            view:nth-child(1) {
              font-weight: bold;
            }

            view:nth-child(2) {
              font-size: 24rpx;
              margin-top: 12rpx;
              color: #cdcdcd;
            }
          }
        }

        .paragraph {
          margin: 30rpx 0;
        }

        .img {
          width: 100%;

          image {
            width: 100%;
            height: 800rpx;
            border-radius: 10px;
          }
        }
      }

      .line {
        height: 40rpx;
        background-color: #f5f5f5;
        width: 100%;
      }

      .input {
        padding: 30rpx;

        .person {
          display: flex;
          justify-content: space-between;

          .left {
            width: 50%;

            text {
              margin-left: 20rpx;
            }

            image {
              width: 10%;
              height: 30rpx;
            }
          }
        }
      }

      .message {
        padding: 30rpx;

        .title {
          display: flex;
          justify-content: space-between;

          .left {
            font-weight: bold;
            font-size: 36rpx;
          }

          .right {
            color: #fc4424;
            display: flex;

            text {
              margin-right: 10rpx;
            }
          }
        }

        .paragraph {
          .avatar {
            display: flex;
            margin-top: 30rpx;

            .right {
              margin-left: 20rpx;

              view:nth-child(2) {
                font-size: 24rpx;
                margin-top: 12rpx;
                color: #cdcdcd;
              }
            }
          }

          .p {
            margin: 20rpx 0;
            font-size: 26rpx;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-around;
        padding: 30rpx;

        .left {
          text-align: center;

          view {
            font-size: 20rpx;
          }

          image {
            width: 50rpx;
            height: 50rpx;
          }
        }

        .middle {
          width: 46%;
          .uv-input {
            background-color: #f5f5f5;
            width: 100%;
          }
        }

        .button {
          width: 26%;
          ::v-deep .uv-button--square {
            border-radius: 20px;
            width: 100%;
          }
        }
      }
    }
  }
</style>