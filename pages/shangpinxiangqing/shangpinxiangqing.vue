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
            ￥<span class="big">439.00</span> <span class="line">￥189.00</span>
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
        <view class="content-box2-1">
          <view class="box2-left"> 规格<text>已选：标准白、41</text> </view>
          <view class="box2-right">
            <image src="../../static/image/向右箭头.png" mode=""></image>
          </view>
        </view>
        <view class="content-box2-2">
          <view class="box2-left"> 运费<text>包邮（偏远地区不包邮）</text> </view>
          <view class="box2-right">
            <image src="../../static/image/向右箭头.png" mode=""></image>
          </view>
        </view>

      </view>

      <view class="content1-box3">
        <view class="content-box2-1">
          <view class="box2-left">这些人正在抢购，可直接参与抢购 </view>
          <view class="box2-right">
            <image @click="kai()" src="../../static/image/向右箭头.png" mode=""></image>
          </view>
        </view>
        <view style="font-size: 13px;color: #ccc;">24小时内未成团，自动取消抢购团队，付款原路退回</view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
      </view>
      <!-- 评价 -->
      <view class="appraise">
        <view class="appraise-top">
          <text>评价</text>
          <view class="gengduo">查看更多<uv-icon color=" #fc6147" size="15" name="arrow-right"></uv-icon></view>
        </view>
        <view class="appraise-body" v-for="item in list1" :key="item.id">
          <view class="appraise-body-top">
            <view class="appraise-body-top-left">
              <view class="left1">
                <uv-image width="40px" height="40px" :src="item.avatar" shape="circle"></uv-image>
              </view>
              <view class="left2">
                <text>{{ item.username }}</text>
                <uv-rate size="14px" activeColor="#ffb800" :count="count" v-model="value"></uv-rate>
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
      <view class="content-box4">
        <view class="box2">
          <view class="box2-1">
            <image src="../../static/养车.png" mode=""></image>
          </view>
          <view class="box2-2">
            <view class="box2-21">
              正茂通商户
              <text
                style="background-color: #fc4424;padding: 2px 5px;color: #fff;font-size: 14px;border-radius: 5px;">官方自营</text>
            </view>
            <view class="box2-22">34人关注</view>
          </view>
          <view class="box2-3">
            <text class="box2-31">进店逛逛</text>
          </view>
        </view>
      </view>
      <view class="content-box5">
        <view class="content-box5-1">店铺推荐</view>
        <view class="content-box5-2">
          <view class="content-box5-2-1" v-for="(item,index) in list2" :key="item.id">
            <view class="content-box5-2-2">
              <image :src="item.url" mode=""></image>
            </view>
            <view class="content-box5-2-3">{{ item.name }}</view>
            <view class="content-box5-2-4">
              <text style="color: #fc4424;font-size: 12px;">￥</text>{{ item.price }}
            </view>
          </view>
        </view>
      </view>
      <view class="content-box3">
        <view class="bo3-top"> 商品介绍 </view>
        <view class="box3-content">
          <image src="../../static/电脑.png" mode=""></image>
          <image src="../../static/电脑.png" mode=""></image>
        </view>
      </view>
    </view>
    <!-- 立即购买按钮 -->
    <view class="btn">
      <view class="img">
        <view>
          <image src="../../static/车票.png" mode=""></image>
        </view>
        <text>店铺</text>
      </view>
      <view class="img">
        <view>
          <image src="../../static/车票.png" mode=""></image>
        </view>
        <text>客服</text>
      </view>
      <view class="img">
        <view>
          <image src="../../static/车票.png" mode=""></image>
        </view>
        <text>收藏</text>
      </view>
      <button class="btn2">单独购买</button>
      <button class="btn1">我要抢购</button>
    </view>

    <view class="box4" v-show="isshow">
      <view class="box4-list">
        <view class="box4-list1">
          可参与的抢购
          <image @click="guan()" src="../../static/image/delete.png" mode=""></image>
        </view>
        <view class="box4-list2">
          <view class="box4-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box4-list2-2">橘子果酱</view>
          <view class="box4-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box4-list2">
          <view class="box4-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box4-list2-2">橘子果酱</view>
          <view class="box4-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box4-list2">
          <view class="box4-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box4-list2-2">橘子果酱</view>
          <view class="box4-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box4-list2">
          <view class="box4-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box4-list2-2">橘子果酱</view>
          <view class="box4-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box4-list2">
          <view class="box4-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box4-list2-2">橘子果酱</view>
          <view class="box4-list2-3">
            <text>去抢购</text>
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
        isshow: false,
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
        list1: [{
            id: 1,
            avatar: "../../static/image/头像.jpg",
            username: "雪山飞狐",
            content: "整个人生就是思想与劳动，劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫",
            img: ["../../static/人物.png", "../../static/人物.png", "../../static/人物.png"],
          },
          {
            id: 2,
            avatar: "../../static/image/头像.jpg",
            username: "梦之曦",
            content: "在进餐、睡眠和运动等时间里能宽心无虑，满怀高兴，这是长寿的妙理之一。--培根",
            img: ["../../static/人物.png", "../../static/人物.png", "../../static/人物.png"],
          },
        ],
        list2: [{
            id: 1,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          },
          {
            id: 2,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          },
          {
            id: 3,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          },
          {
            id: 4,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          },
          {
            id: 5,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          },
          {
            id: 6,
            url: '../../static/人物.png',
            name: '直筒牛仔裤',
            price: '299.00'
          }
        ]
      };
    },
    methods: {
      kai() {
        this.isshow = true
        console.log(this.isshow)
      },
      guan() {
        this.isshow = false
      }
    }
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
        box-sizing: border-box;
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

      .content1-box3 {
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        background-color: #fff;
        width: 90%;
        margin: auto;
        box-sizing: border-box;
        padding: 20rpx;
        // border: 1px solid red;
        border-radius: 20rpx;
        margin-top: 30rpx;

        .box2-list2 {
          border-bottom: 1px solid #e6e6e6;
          padding: 10px 0;
          display: flex;

          .box2-list2-1 {
            margin-right: 10px;

            image {
              width: 30px;
              height: 30px;
            }
          }

          .box2-list2-2 {
            line-height: 30px;
            width: 68%;
          }

          .box2-list2-3 {
            line-height: 30px;

            text {
              background-color: #fc4424;
              color: #fff;
              font-size: 12px;
              padding: 2px 5px;
              border-radius: 10px;
            }
          }
        }

        .content-box2-1 {
          display: flex;
          justify-content: space-between;

          .box2-left {

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

        .content-box2-2 {
          display: flex;
          justify-content: space-between;

          .box2-left {


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
      }

      .content-box2 {
        // display: flex;
        // align-items: center;
        // justify-content: space-between;
        background-color: #fff;
        width: 90%;
        margin: auto;
        box-sizing: border-box;
        padding: 20rpx;
        // border: 1px solid red;
        border-radius: 20rpx;
        margin-top: 30rpx;

        .content-box2-1 {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;

          .box2-left {

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

        .content-box2-2 {
          display: flex;
          justify-content: space-between;

          .box2-left {


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
      }

      .appraise {
        width: 90%;
        margin: auto;
        margin-top: 30rpx;
        padding: 20rpx;
        background-color: #fff;
        border-radius: 20rpx;
        box-sizing: border-box;

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

      .content-box4 {
        .box2 {
          width: 90%;
          background-color: #fff;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
          margin: 20px auto 20px;
          display: flex;

          .box2-1 {
            margin-right: 10px;

            image {
              width: 45px;
              height: 45px;
            }
          }

          .box2-2 {
            width: 55%;

            .box2-22 {
              color: #ccc;
              margin-top: 5px;
              font-size: 15px;
            }
          }

          .box2-3 {
            line-height: 47px;
            text-align: center;

            .box2-31 {
              color: #fc4424;
              border: 1px solid #fc4424;
              padding: 5px 10px;
              border-radius: 20px;
            }
          }
        }
      }

      .content-box5 {
        width: 90%;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        margin: 20px auto 20px;

        .content-box5-1 {
          margin-bottom: 20px;
        }

        .content-box5-2 {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;

          .content-box5-2-1 {
            width: 30%;
            margin-bottom: 10px;
            border-radius: 10px;

            .content-box5-2-2 {
              image {
                width: 100%;
                height: 100px;
                border-radius: 10px;
              }
            }

            .content-box5-2-3 {
              font-size: 14px;
              margin-bottom: 5px;
            }

            .content-box5-2-4 {
              color: #fc4424;
              ;
            }
          }
        }
      }

      .content-box3 {
        width: 90%;
        box-sizing: border-box;
        margin: auto;
        padding: 20rpx;
        // border: 1px solid red;
        background-color: #fff;
        border-radius: 20rpx;
        margin-top: 20rpx;
        margin-bottom: 20rpx;

        .box3-content {
          // height: 1000rpx;
          margin-top: 20rpx;
          border-radius: 20rpx;
          overflow: hidden;

          image {
            border-radius: 20rpx;
            height: 500rpx;
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
      position: fixed;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;

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
        width: 50%;
        margin: auto;
        background-color: #fc4424;
        border-radius: 50px;
        color: #fff;
        font-size: 30rpx;
      }

      .btn2 {
        width: 50%;
        margin: auto;
        background-color: #fda100;
        border-radius: 50px;
        color: #fff;
        font-size: 30rpx;
        margin-right: 10px;
      }
    }

    .box4 {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);

      .box4-list {
        width: 80%;
        margin: 150px auto;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;

        .box4-list1 {
          text-align: center;
          font-weight: bold;
          border-bottom: 1px solid #e6e6e6;
          padding-bottom: 15px;
          position: relative;

          image {
            width: 25px;
            height: 25px;
            position: absolute;
            right: 10px;
            top: 0;
          }
        }

        .box4-list2 {
          border-bottom: 1px solid #e6e6e6;
          padding: 10px 0;
          display: flex;

          .box4-list2-1 {
            margin-right: 10px;

            image {
              width: 30px;
              height: 30px;
            }
          }

          .box4-list2-2 {
            line-height: 30px;
            width: 68%;
          }

          .box4-list2-3 {
            line-height: 30px;

            text {
              background-color: #fc4424;
              color: #fff;
              font-size: 12px;
              padding: 2px 5px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>