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
            ￥<view class="big">439.00</view>
            <view class="line">￥189.00</view>
          </view>
          <view class="btop1-right">
            <image src="/static/分享.png"></image>
            <text>分享</text>
          </view>
        </view>
        <view class="box1-center1"> 送100%红包 </view>
        <view class="box1-center2">
          美孚（Mobil0）金装美孚1号 FS 0W-30 全合成机油润滑油 SL级 4L 汽车保养
        </view>
        <view class="box1-bottom">
          <view class="bbottom-left"> 库存：999 </view>
          <view class="bbottom-right"> 销量：2314 </view>
        </view>
      </view>
      <view class="content-box2">
        <view class="box2-left">
          规格<view class="span1">请选择规格</view>
        </view>
        <view class="box2-right"><uv-icon size="15" name="arrow-right"></uv-icon></view>
      </view>
      <!-- 评价 -->
      <view class="appraise">
        <view class="appraise-top">
          <text>评价</text>
          <view class="gengduo">查看更多<uv-icon color="#fc6147" size="15" name="arrow-right"></uv-icon></view>
        </view>
        <view class="appraise-body" v-for="item in reviews" :key="item.id">
          <view class="appraise-body-top">
            <view class="appraise-body-top-left">
              <view class="left1">
                <uv-image width="40px" height="40px" :src="item.avatar" shape="circle"></uv-image>
              </view>
              <view class="left2">
                <text>{{ item.username }}</text>
                <uv-rate size="14px" activeColor='#ffb800' :count="count" v-model="value"></uv-rate>
              </view>
            </view>
            <view class="appraise-body-top-right">
              <text>2021.12.17</text>
            </view>
          </view>
          <view class="appraise-body-center">
            <text>{{ item.content }}</text>
            <view class="photo" v-if="item.img.length > 0">
              <image v-for="(imgItem, i) in item.img" :src="imgItem" :key="i" mode=""></image>
            </view>
          </view>
        </view>
      </view>
      <view class="content-box3">
        <view class="bo3-top">
          商品介绍
        </view>
        <view class="box3-content">
          <image src="https://pic.nximg.cn/file/20230909/29496126_154651198104_2.jpg"></image>
        </view>
        <view class="box4-content">
          <image src="../../static/image/操作步骤.png" mode=""></image>
        </view>

      </view>
    </view>
    <!-- 立即购买按钮 -->
    <view class="btn">
      <view class="btn2">
        <image src="../../static/image/客服.png" mode=""></image>
        <view class="kefu">客服</view>
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
      // 评分
      count: 5,
      value: 4,
      // 评价
      reviews: [{
        id: 1,
        avatar: 'https://cdn.uviewui.com/uview/album/1.jpg',
        username: '雪山飞狐',
        content: '整个人生就是思想与劳动，劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫',
        img: ['../../static/image/润滑油1.png', '../../static/image/润滑油1.png', '../../static/image/润滑油1.png']
      }, {
        id: 2,
        avatar: 'https://cdn.uviewui.com/uview/album/1.jpg',
        username: '梦之曦',
        content: '在进餐、睡眠和运动等时间里能宽心无虑，满怀高兴，这是长寿的妙理之一。--培根',
        img: []
      }],
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
    };
  },
};
</script>

<style lang="scss">
image {
  width: 100%;
}

.shoplist1 {
  height: 90vh;

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
    border: 1px solid #f5f5f5;
    background-color: #f5f5f5;

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
      background-color: #fff;
      width: 90%;
      margin: auto;
      padding: 20rpx;
      // border: 1px solid red;
      border-radius: 20rpx;
      margin-top: 40rpx;

      .box2-left {
        font-weight: bold;

        .span1 {
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

    // 评价
    .appraise {
      width: 90%;
      margin: auto;
      margin-top: 2%;
      margin-bottom: 3%;
      padding: 3%;
      background-color: #ffffff;

      .appraise-top {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        padding-bottom: 3%;
        border-bottom: 1px solid #f8f8f8;

        .gengduo {
          color: #fc6147;
          display: flex;
          align-items: center;
          font-size: 1rem;
        }
      }

      .appraise-body {
        padding-top: 2%;
        border-bottom: 1px solid #fafafa;
        padding-bottom: 3%;

        .appraise-body-top {
          width: 100%;
          display: flex;
          padding-bottom: 3%;
          justify-content: space-between;

          .appraise-body-top-left {
            width: 40%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left1 {
              // border: 1px solid orange;
            }

            .left2 {
              text {
                margin-left: 3%;
              }

              font-size: 0.8rem;

            }
          }

          .appraise-body-top-right {
            text {
              margin-top: 15%;
              font-size: 0.8rem;
              color: #b2b2b2;
            }
          }
        }

        .appraise-body-center {
          p {
            font-size: 0.8rem;
          }

          .photo {
            height: 100px;
            display: flex;
            justify-content: space-between;
            margin-top: 2%;

            image {
              width: 33%;
              height: 100%;
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
        height: 800rpx;
        margin-top: 20rpx;
        border-radius: 20rpx;
        overflow: hidden;

        image {
          height: 800rpx;
        }
      }

      .box4-content {
        height: 200rpx;
        margin-top: 20rpx;
        border-radius: 20rpx;
        overflow: hidden;

        image {
          height: 100%;
        }
      }
    }
  }

  .btn {
    // position: sticky;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn1 {
      width: 80%;
      margin: auto;
      background-color: #fc4424;
      border-radius: 50px;
      color: #fff;
      font-size: 30rpx;
    }

    .btn2 {
      padding-top: 1%;
      margin-left: 5%;

      .kefu {
        width: 100%;
        font-size: 0.8rem;
      }

      image {
        width: 100%;
        height: 50rpx;
      }
    }
  }
}
</style>