<template>
  <view class="maintenance">
    <view class="center">
      <view class="tk">其他搭配商品<text>(车主可根据自身情况选择)</text></view>
      <view class="body" v-for='item in commodity' :key="item.id">
        <view class="body-left">
          <uv-checkbox-group shape="circle" activeColor="#f7433d">
            <uv-checkbox name="123"></uv-checkbox>
          </uv-checkbox-group>
        </view>
        <view class="body-center">
          <image :src="item.img" mode=""></image>
        </view>
        <view class="body-right">
          <view class="one">{{item.title1}}</view>
          <view v-if="item.title.length > 0" class="all">
            <view class="two" v-for="(titleItem,i) in item.title" :key="i.id">{{titleItem.title2}}</view>
            <view class="three" v-for="(titleItem,i) in item.title" :key="i.id">{{titleItem.title3}}</view>
          </view>
          <view class="four">{{item.title4}} <text class="span2" v-for="(priceItem,i) in item.price"
              :key="i">{{priceItem}}</text> <text v-for="(envelopeItem,a) in item.envelope" :key="a"
              class="span1">{{envelopeItem}}</text> </view>
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
  // 第一列表循环
  const commodity = ref([{
      id: 1,
      img: "../../static/image/全车检测.png",
      title1: "全车检测",
      title: [],
      title4: "￥0",
      price: ['￥34'],
      envelope: []
    },
    {
      id: 2,
      img: "../../static/image/工时费.png",
      title1: "工时费",
      title: [],
      title4: "￥20",
      price: ['￥34'],
      envelope: []
    },
    {
      id: 3,
      img: "../../static/image/润滑油1.png",
      title1: "驾驰/THINKAUTO 放油螺栓 发动机油底壳放油螺丝含密封圈",
      price: ['￥34'],
      title: [{
        id: 1,
        title2: "规格:全合成|0W-30|4L",
        title3: "众多原厂认证 高效节油 强劲动力",
      }],
      title4: "￥11.5",
      envelope: ['送100%红包']
    },
    {
      id: 4,
      img: "../../static/image/润滑油2.png",
      title1: "嘉实多(Castrol)极护 钛流体全合成机油润滑油 5W-30 FE SN级 4L",
      title: [{
        id: 2,
        title2: "规格:全合成|0W-30|4L",
        title3: "众多原厂认证 高效节油 强劲动力",
      }],
      title4: "￥82",
      envelope: ['送100%红包']
    },
    {
      id: 5,
      img: "../../static/image/润滑油3.png",
      title1: "马勒PM2.5活性炭空调滤LAK709",
      title: [{
        id: 3,
        title2: "规格:全合成|0W-30|4L",
        title3: "众多原厂认证 高效节油 强劲动力",
      }],
      title4: "￥61",
      envelope: ['送100%红包']
    },
  ])
</script>

<style lang="scss" scoped>
  page {
    background-color: #f6f6f6;
  }


  .maintenance {
    width: 100%;
    padding-top: 2%;


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
        padding-bottom: 4%;
        border-bottom: 1px solid #f8f8f8;
        height: 110px;

        .body-left {
          width: 6%;
          margin-top: 13%;
          height: 100%;
        }

        .body-center {
          width: 25%;

          image {
            margin-top: 10%;
            width: 100%;
            height: 90%;
          }
        }

        .body-right {
          width: 68%;
          position: relative;

          .one {
            font-size: 0.8rem;
            padding-top: 2%;
          }

          .all {
            height: 40%;

            .two {
              font-size: 0.7rem;
              color: #cdcdcd;
            }

            .three {
              font-size: 0.7rem;
              color: #cdcdcd;
            }
          }

          .four {
            font-size: 1rem;
            color: #fc6146;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: 0;
            width: 100%;

            .span2 {
              margin-left: 2%;
              font-size: 0.8rem;
              color: #c5c5c5;
              text-decoration: line-through;
            }

            .span1 {

              margin-left: 2%;
              font-size: 0.7rem;
              text-align: center;
              height: 100%;
              width: 40%;
              border-radius: 3px;
              color: #ffffff;
              background-color: #fc4424;
              border: 1px solid red;
            }
          }
        }
      }

      .tk {
        font-size: 0.8rem;
        margin-bottom: 5%;
        padding-bottom: 2%;
        border-bottom: 1px solid #f5f5f5;

        text {
          margin-left: 2%;
          color: #9a9a9a;
          font-size: 0.8rem;
        }
      }
    }

    // 底部
    .foot {
      width: 100%;
      background-color: #ffffff;
      margin-top: 3%;
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