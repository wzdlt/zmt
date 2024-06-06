<template>
  <view class="maintenance">
    <view class="top">
      <p class="left">
        <image src="../../static/image/奥迪.png" mode=""></image> &nbsp; 奥迪A6&nbsp;<uv-icon size="15"
          name="arrow-right"></uv-icon>
      </p>
      <p class="right">当前公里数：32874km</p>
    </view>
    <view class="center">
      <p class="tk">选择主商品</p>
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
          <p class="one">{{item.title1}}</p>
          <p class="two">{{item.title2}}</p>
          <p class="three">{{item.title3}}</p>
          <p class="four">{{item.title4}} <span>送100%红包</span> </p>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';
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

            span {
              padding: 1%;
              margin-left: 2%;
              font-size: 0.7rem;
              text-align: center;
              width: 33%;
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
      }
    }

  }
</style>