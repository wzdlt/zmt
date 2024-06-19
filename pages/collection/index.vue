<template>
  <view class="header">
    <view class="left" @click="switchToTab">
      &lt;
    </view>

    <view class="center">收藏</view>
  </view>
  <view class="container">
    <view class="box" v-for="(product, index) in products" :key="index">
      <view class="b-left">
        <image :src="product.imageUrl" alt=""></image>
      </view>
      <view class="b-right">
        <view class="r-top">
          <view class="p text-ellipsis-2">
            <view v-if="product.isSelfOperated" class="span">自营</view>
            {{ product.name }}
          </view>
        </view>
        <view class="r-center">
          <view class="c-top">
            <view class="big">￥{{ product.price }}</view>
            <view class="small">.00</view>
          </view>
          <view class="c-bottom">
            <view class="btm-left">￥{{ product.originalPrice }}</view>
            <view class="btm-right">{{ product.salesVolume }}</view>
          </view>
        </view>
        <view class="r-bottom">
          <view class="text-box">
            <view class="t-left">送红包</view>
            <view class="t-right">￥{{ product.redPacket }}</view>
          </view>
          <view class="text">{{ product.promotionMessage }}</view>
        </view>
      </view>
    </view>
  </view>

</template>

<script setup>
import {
  ref
} from 'vue';

const switchToTab = () => {
  uni.switchTab({
    url: '/pages/mine/mine', // 请替换为你的tabBar页面的实际路径
  });
};


const products = ref([{
  imageUrl: '../../static/image/青少年男鞋.png',
  isSelfOperated: true,
  name: '小米手环6 全面彩屏 30种运动模式24h心率检测智能运动手表',
  price: 120,
  originalPrice: 180,
  salesVolume: '月销180',
  redPacket: 50,
  promotionMessage: '邀请新人抢购在优惠5%'
}, {
  imageUrl: '../../static/image/商品4.png',
  isSelfOperated: true,
  name: '小米手环6 全面彩屏 30种运动模式24h心率检测智能运动手表',
  price: 120,
  originalPrice: 180,
  salesVolume: '月销180',
  redPacket: 50,
  promotionMessage: '邀请新人抢购在优惠5%'
},
{
  imageUrl: '../../static/image/青少年男鞋.png',
  isSelfOperated: true,
  name: '小米手环6 全面彩屏 30种运动模式24h心率检测智能运动手表',
  price: 120,
  originalPrice: 180,
  salesVolume: '月销180',
  redPacket: 50,
  promotionMessage: '邀请新人抢购在优惠5%'
}, {
  imageUrl: '../../static/image/商品4.png',
  isSelfOperated: true,
  name: '小米手环6 全面彩屏 30种运动模式24h心率检测智能运动手表',
  price: 120,
  originalPrice: 180,
  salesVolume: '月销180',
  redPacket: 50,
  promotionMessage: '邀请新人抢购在优惠5%'
},
  // 重复定义或使用...更多产品对象来达到循环4次的目的
]);
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.text-ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  display: flex;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  .left {
    width: 40px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 40px;
  }
}

.container {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  background-color: #f6f6f6;

  .box {
    border-radius: 10px;
    padding: 10px;
    width: 90%;
    margin: 6px auto;
    background-color: #fff;
    display: flex;
    justify-content: space-around;

    .b-left {
      width: 34%;

      image {
        width: 100%;
      }
    }

    .b-right {
      width: 60%;
      display: flex;
      flex-wrap: wrap;

      .r-top {
        width: 100%;

        .p {
          width: 100%;
          font-size: 14px;

          .span {
            display: inline-block;
            margin-right: 5px;
            width: 20%;
            line-height: 20px;
            text-align: center;
            font-size: 12px;
            border-radius: 4px;
            background-color: #f9451e;
            color: #fff;
          }
        }
      }

      .r-center {
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .c-top {
          width: 100%;
          display: flex;
          color: #f9451e;

          .big {
            width: 22%;
            height: 20px;
          }

          .small {
            width: 30%;
            font-size: 12px;
            height: 20px;
            line-height: 24px;
          }
        }

        .c-bottom {
          width: 100%;
          display: flex;
          color: #949494;
          height: 30px;
          justify-content: space-between;

          .btm-left {
            width: 30%;
            height: 100%;
            font-size: 12px;
            line-height: 24px;
          }

          .btm-right {
            width: 40%;
            height: 100%;
            font-size: 14px;
            text-align: center;
          }
        }
      }

      .r-bottom {
        display: flex;
        width: 100%;

        .text-box {
          width: 36%;
          font-size: 12px;
          display: flex;
          border-radius: 4px;
          text-align: center;
          border: 1px solid #f9451e;

          .t-left {
            width: 60%;
            color: #f9451e;
            line-height: 20px;
          }

          .t-right {
            width: 40%;
            background-color: #f9451e;
            color: #fff;
            font-size: 10px;
            line-height: 20px;
          }
        }

        .text {
          width: 56%;
          font-size: 10px;
          border: 1px solid #f9451e;
          text-align: center;
          line-height: 20px;
          color: #f9451e;
          border-radius: 4px;
        }
      }
    }
  }
}
</style>