<template>
  <view class="shoplist1">
    <!-- 返回箭头 -->
    <!-- <view class="return">
      <image src="/static/image1.png"></image>
    </view> -->
    <!-- banner图 -->
    <view class="banner">
      <uv-swiper :list="list" @change="(e) => (current2 = e.current)" keyName="url" height="400rpx" :autoplay="false"
        indicatorStyle="right: 20px">
        <template v-slot:indicator>
          <view class="indicator-num">
            <text class="indicator-num__text">{{ current2 + 1 }}/{{ list.length }}</text>
          </view>
        </template>
      </uv-swiper>
    </view>
    <!-- 内容 -->
    <view class="content">
      <view class="content-box1">
        <view class="box1-top">
          <view class="btop1-left">
            <text class="big">60红包+￥47.00</text> <text class="line">￥189.00</text>
          </view>
          <view class="btop1-right">
            <image src="../../static/image/分享.png"></image>
            <text>分享</text>
          </view>
        </view>
        <view class="box1-center1"> 送100%红包 </view>
        <view class="box1-center2">
          男运动鞋秋季男鞋青少年正品透气夏网面减震跑步休闲旅游鞋
        </view>
        <view class="box1-bottom">
          <view class="bbottom-left"> 库存：999 </view>
          <view class="bbottom-right"> 销量：2314 </view>
        </view>
      </view>
      <view class="specification">
        <view class="content-box2">
          <view class="box2-left"> 规格<text>请选择规格</text> </view>
          <view class="box2-right">
            <uv-icon name="arrow-right" color="#d7d7d7" size="20"></uv-icon>
          </view>
        </view>
        <view class="ship">
          <view class="box2-left"> 运费<text>包邮(偏远地区不包邮)</text></view>
        </view>
      </view>
      <!-- 汽修厂 -->
      <view class="repair">
        <view class="title">
          <view class="left">
            附近核销门店
          </view>
          <view class="right">
            <text>查看更多</text>
            <uv-icon name="arrow-right" color="#d7d7d7" size="20"></uv-icon>
          </view>
        </view>
        <view class="content" v-for="(item,index) in repair" :key="index">
          <view class="content-loop">
            <view class="left">
              <view class="img">
                <image :src="item.image" mode=""></image>
              </view>
              <view class="text">
                <view>{{item.text1}}</view>
                <view>{{item.text2}}</view>
              </view>
            </view>
            <view class="right">
              {{item.text3}}
            </view>
          </view>
        </view>
      </view>
      <!-- 店铺推荐 -->
      <view class="shop-recommend">
        <view class="title">
          店铺推荐
        </view>
        <view class="recommend-loop">
          <view class="carton-loop" v-for="(item,index) in recommend" :key="index">
            <view class="carton">
              <view class="img">
                <image :src="item.image" mode=""></image>
              </view>
              <view>{{item.text}}</view>
              <view>{{item.price}}</view>
            </view>
          </view>
        </view>
      </view>
      <!-- 商品介绍 -->
      <view class="content-box3">
        <view class="bo3-top"> 商品介绍 </view>
        <view class="box3-content">
          <image src="../../static/image/jieshao1.png"></image>
        </view>
        <view class="box3-content">
          <image src="../../static/image/jieshao2.png"></image>
        </view>
      </view>
    </view>
    <!-- 立即购买按钮 -->
    <view class="btn">
      <view class="img">
        <view>
          <image src="../../static/image/店铺.png"></image>
        </view>
        <text>店铺</text>
      </view>
      <view class="img">
        <view>
          <image src="../../static/image/客服.png"></image>
        </view>
        <text>客服</text>
      </view>
      <view class="img">
        <view>
          <image src="../../static/image/实收藏.png"></image>
        </view>
        <text>收藏</text>
      </view>
      <button class="btn1">立即购买</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        current2: 0,
        count: 5,
        value: 4,
        list: [{
            url: "https://cdn.uviewui.com/uview/resources/video.mp4",
            title: "昨夜星辰昨夜风，画楼西畔桂堂东",
            poster: "/static/jiyou3.jpg",
          },
          {
            url: "/static/jiyou1.jpg",
            title: "身无彩凤双飞翼，心有灵犀一点通",
          },
          {
            url: "/static/jiyou2.jpg",
            title: "谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳",
          },
        ],
        repair: [{
          image: '../../static/image/安踏.png',
          text1: '鑫日汽修厂',
          text2: '山东省临沂市河东区香港路与长安路',
          text3: '1.2km'
        }, {
          image: '../../static/image/小米.png',
          text1: '鑫日汽修厂',
          text2: '山东省临沂市河东区香港路与长安路',
          text3: '1.2km'
        }, {
          image: '../../static/image/华为1.png',
          text1: '鑫日汽修厂',
          text2: '山东省临沂市河东区香港路与长安路',
          text3: '1.2km'
        }, {
          image: '../../static/image/vivo.png',
          text1: '鑫日汽修厂',
          text2: '山东省临沂市河东区香港路与长安路',
          text3: '1.2km'
        }],
        recommend: [{
          image: '../../static/image/商品.png',
          text: '山羊绒针织衫',
          price: '￥99.00'
        }, {
          image: '../../static/image/商品1.png',
          text: '直筒牛仔裤',
          price: '￥299.00'
        }, {
          image: '../../static/image/商品2.png',
          text: '格子衬衫外套',
          price: '￥499.00'
        }, {
          image: '../../static/image/商品3.png',
          text: '山羊绒针织衫',
          price: '￥99.00'
        }, {
          image: '../../static/image/商品4.png',
          text: '直筒牛仔裤',
          price: '￥299.00'
        }, {
          image: '../../static/image/商品5.png',
          text: '格子衬衫外套',
          price: '￥499.00'
        }]
      };
    },
  };
</script>

<style lang="scss">
  page {
    background-color: #f5f5f5;
  }

  image {
    width: 100%;
  }

  .shoplist1 {
    .return {
      image {
        width: 120rpx;
        height: 80rpx;
      }
    }

    .banner {
      position: relative;

      @mixin flex($direction: row) {
        /* #ifndef APP-NVUE */
        display: flex;
        /* #endif */
        flex-direction: $direction;
      }

      .indicator {
        @include flex(row);
        justify-content: center;

        &__dot {
          height: 6px;
          width: 6px;
          border-radius: 100px;
          background-color: rgba(255, 255, 255, 0.35);
          margin: 0 5px;
          transition: background-color 0.3s;

          &--active {
            background-color: #ffffff;
          }
        }
      }

      .indicator-num {
        padding: 2px 0;
        background-color: rgba(0, 0, 0, 0.35);
        border-radius: 100px;
        width: 30px;
        text-align: center;
        padding-left: 8px;
        @include flex;

        &__text {
          color: #ffffff;
          font-size: 12px;
        }
      }
    }

    .content {
      .content-box1 {
        width: 90%;
        margin: auto;
        background-color: #fff;
        border-radius: 20rpx;
        // border: 1px solid red;
        margin-top: 50rpx;
        padding: 20rpx;

        .box1-top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .btop1-left {
            color: #fc4323;

            .big {
              font-size: 45rpx;
            }

            .line {
              color: #8a8a8a;
              text-decoration: line-through;
              margin-left: 10rpx;
            }
          }

          .btop1-right {
            display: flex;
            align-items: center;
            color: #909090;

            image {
              width: 35rpx;
              height: 35rpx;
              margin-right: 10rpx;
            }
          }
        }

        .box1-center1 {
          background-color: #fc4424;
          width: 160rpx;
          text-align: center;
          border-radius: 10rpx;
          font-size: 24rpx;
          height: 40rpx;
          line-height: 40rpx;
          color: #fdcbc1;
          margin-top: 10rpx;
        }

        .box1-center2 {
          color: #323232;
          margin-top: 10rpx;
          letter-spacing: 3rpx;
          font-weight: bold;
        }

        .box1-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 20rpx;
          color: #b3b3b3;
          font-size: 28rpx;
        }
      }

      .content-box2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        margin: auto;
        padding: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;
        // border: 1px solid red;

        margin-top: 30rpx;

        .box2-left {
          font-weight: bold;

          text {
            color: #636363;
            margin-left: 20rpx;
            font-size: 28rpx;
            font-weight: 400;
          }
        }

        .box2-right {
          image {
            width: 40rpx;
            height: 40rpx;
          }
        }
      }

      .ship {
        width: 90%;
        margin: auto;
        padding: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;

        .box2-left {
          font-weight: bold;

          text {
            color: #636363;
            margin-left: 20rpx;
            font-size: 28rpx;
            font-weight: 400;
          }
        }
      }

      // 汽修厂
      .repair {
        width: 90%;
        margin: auto;
        padding: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;
        margin-top: 30rpx;

        .title {
          display: flex;
          justify-content: space-between;

          .left {
            font-weight: bold;
          }

          .right {
            display: flex;

            text {
              font-size: 30rpx;
              margin-right: 10rpx;
            }
          }
        }

        .content {
          margin-top: 20rpx;

          .content-loop {
            display: flex;
            justify-content: space-between;
            padding: 10rpx;
            border-top: 1px solid #f5f5f5;
            padding-top: 30rpx;

            .left {
              display: flex;
              align-items: center;
              width: 80%;

              .img {
                width: 16%;
                padding: 10rpx;

                image {
                  width: 100%;
                  height: 80rpx;
                }
              }

              .text {
                margin-left: 10rpx;

                view:nth-child(1) {
                  font-weight: bold;
                }

                view:nth-child(2) {
                  font-size: 24rpx;
                  color: #cdcdcd;
                }
              }
            }

            .right {
              color: #cdcdcd;
              font-size: 26rpx;
            }
          }
        }
      }

      // 店铺推荐
      .shop-recommend {
        width: 90%;
        margin: auto;
        padding: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;
        margin-top: 30rpx;

        .title {
          font-weight: bold;
          padding: 20rpx 0;
        }

        .recommend-loop {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;

          .carton-loop {
            width: 30%;
            margin: 10rpx 0;

            .carton {
              width: 100%;

              .img {
                width: 100%;

                image {
                  width: 100%;
                  height: 200rpx;
                  border-radius: 20rpx;
                }
              }

              view:nth-child(2) {
                font-size: 30rpx;
                margin: 10rpx 0;
              }

              view:nth-child(3) {
                font-size: 30rpx;
                color: #fc5235;
              }
            }
          }
        }
      }

      .content-box3 {
        width: 90%;
        margin: auto;
        padding: 20rpx;
        // border: 1px solid red;
        background-color: #fff;
        border-radius: 20rpx;
        margin-top: 20rpx;
        margin-bottom: 20rpx;

        .box3-content {
          margin-top: 20rpx;
          border-radius: 20rpx;
          overflow: hidden;

          image {
            height: 700rpx;
            width: 100%;
          }
        }
      }
    }

    .btn {
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 20rpx;
      background-color: #fff;

      .img {
        font-size: 26rpx;
        width: 15%;
        text-align: center;
        color: #5d5d5d;

        image {
          width: 50rpx;
          height: 50rpx;
        }
      }

      .btn1 {
        width: 92%;
        margin: auto;
        background-color: #fc4424;
        border-radius: 50px;
        color: #fff;
        font-size: 30rpx;
      }
    }
  }
</style>