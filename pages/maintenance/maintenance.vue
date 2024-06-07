<template>
  <view class="maintenance">
    <view class="top">
      <view class="left">
        <image src="../../static/image/奥迪.png" mode=""></image> 奥迪A6 <uv-icon size="15" name="arrow-right"></uv-icon>
      </view>
      <text class="right">当前公里数：32874km</text>
    </view>
    <view class="center">
      <text class="tk">选择主商品</text>
      <view class="body" v-for='item in commodity' :key="item.id">
        <view class="body-left">
          <uv-checkbox-group shape="circle" activeColor="#f7433d">
            <uv-checkbox></uv-checkbox>

          </uv-checkbox-group>
        </view>
        <view class="body-center">
          <image :src="item.img" mode=""></image>
        </view>
        <view class="body-right">
          <text class="one">{{item.title1}}</text><br />
          <text class="two">{{item.title2}}</text><br />
          <text class="three">{{item.title3}}</text><br />
          <text class="four">{{item.title4}} <text class="span1">送100%红包</text> </text>
        </view>
      </view>
    </view>
    <!-- 评价 -->
    <view class="appraise">
      <view class="appraise-top">
        <text>评价</text>
        <view class="gengduo">查看更多<uv-icon color=" #fc6147" size="15" name="arrow-right"></uv-icon></view>
      </view>
      <view class="appraise-body" v-for="item in reviews" :key="item.id">
        <view class="appraise-body-top">
          <view class="appraise-body-top-left">
            <view class="left1">
              <uv-image width="40px" height="40px" :src="item.avatar" shape="circle"></uv-image>
            </view>
            <view class="left2">
              <text>{{item.username}}</text>
              <uv-rate size="14px" activeColor='#ffb800' :count="count" v-model="value"></uv-rate>
            </view>
          </view>
          <view class="appraise-body-top-right">
            <text>2021.12.17</text>
          </view>
        </view>
        <view class="appraise-body-center">
          <text>{{item.content}}</text>
          <view class="photo" v-if="item.img.length > 0">
            <image v-for="(imgItem,i) in item.img" :src="imgItem" :key="i" mode=""></image>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部 -->
    <view class="foot">
      <view class="foot-left">
        <view>合计：<text>￥890.00</text></view>
        <view>(含工时费:￥100)</view>
      </view>
      <button>确定</button>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  // 评分
  const count = ref(5)
  const value = ref(4)
  // 第一列表循环
  const commodity = ref([{
      id: 1,
      img: "../../static/image/润滑油1.png",
      title1: "美孚(Mobil) 金装美孚1号0W-30全合成机油润滑油",
      title2: "规格:全合成|0W-30|4L",
      title3: "众多原厂认证 高效节油 强劲动力",
      title4: "￥439",
    },
    {
      id: 2,
      img: "../../static/image/润滑油2.png",
      title1: "嘉实多(Castrol) 极护 钛流体全合成机油润滑油 5W-30 FE SN级 4L",
      title2: "规格:全合成|0W-30|4L",
      title3: "众多原厂认证 高效节油 强劲动力",
      title4: "￥299",
    },
    {
      id: 3,
      img: "../../static/image/润滑油3.png",
      title1: "壳牌超凡喜力全合成机油 都市光影版灰壳 5W-30 APISP级 4L",
      title2: "规格:全合成|0W-30|4L",
      title3: "众多原厂认证 高效节油 强劲动力",
      title4: "￥258",
    }
  ])
  // 用户评论

  const reviews = ref([{
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
  }])
  console.log(reviews.value[0].id);
</script>

<style lang="scss" scoped>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .maintenance {
    width: 100%;
    background-color: #f6f6f6;

    .top {
      width: 100%;
      background-color: #ffffff;
      display: flex;
      justify-content: space-between;
      padding: 3%;

      .left {
        width: 40%;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        font-size: 1rem;

        image {
          width: 20px;
          height: 20px;
        }
      }

      .right {
        width: 40%;
        font-size: 0.8rem;
      }
    }

    .center {
      width: 90%;
      margin: auto;
      margin-top: 3%;
      padding: 2%;
      padding-bottom: 4%;
      background-color: #ffffff;
      border-radius: 10rpx;

      .body {
        margin-top: 3%;
        margin-bottom: 5%;
        display: flex;
        justify-content: space-between;
        padding-bottom: 2%;
        border-bottom: 1px solid #f8f8f8;

        .body-left {
          width: 6%;
          margin-top: 13%;
          height: 100%;
        }

        .body-center {
          width: 25%;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .body-right {

          width: 68%;

          .one {
            font-size: 0.9rem;
            padding-bottom: 2%;
          }

          .two {
            font-size: 0.7rem;
            color: #cdcdcd;
          }

          .three {
            font-size: 0.7rem;
            color: #cdcdcd;
          }

          .four {
            font-size: 1rem;
            color: #fc6146;
            padding-top: 2%;
            padding-bottom: 2%;
            display: flex;
            align-items: center;

            .span1 {
              font-size: 0.7rem;
              text-align: center;
              width: 50%;
              border-radius: 3px;
              color: #ffffff;
              background-color: #fc4424;
              border: 1px solid red;
            }
          }
        }
      }

      .tk {
        margin-bottom: 5%;
        padding-bottom: 2%;
        border-bottom: 1px solid #f5f5f5;
        font-size: 0.9rem;
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

    // 底部
    .foot {
      width: 100%;
      background-color: #ffffff;
      padding-left: 5%;
      padding-right: 5%;
      padding-top: 3%;
      padding-bottom: 3%;
      display: flex;
      justify-content: space-between;

      .foot-left {
        width: 40%;

        view:nth-child(1) {
          font-size: 0.8rem;

          text {
            color: #fc4424;
          }
        }

        view:nth-child(2) {
          color: #999999;
          font-size: 0.7rem;
        }
      }

      button {
        font-family: 0.8rem;
        width: 35%;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        color: #f6f6f6;
        background-color: #fc4424;
      }
    }
  }
</style>