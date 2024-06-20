<template>
  <view class="header">
    <view class="left" @click="switchToTab">
      &lt;
    </view>

    <view class="center">退货订单</view>
  </view>

  <view class="body">
    <view class="b-box" v-for="(order, index) in orders" :key="index">
      <view class="b-top">
        <view class="t-left">订单编号:{{ order.id }}</view>
        <view class="t-right" @click="navigateToOrders">退款</view>
      </view>
      <view class="t-center" @click="navigateToReturnPage">
        <view class="c-left">
          <image :src="order.image" alt=""></image>
        </view>
        <view class="c-right">
          <view class="r-top">{{ order.title }}</view>
          <view class="r-center">{{ order.specification }}</view>
          <view class="r-bottom">
            <view class="b-left">￥</view>
            <view class="b-center">{{ order.price }}</view>
            <view class="b-right">×{{ order.quantity }}</view>
          </view>
        </view>
      </view>
      <view class="b-bottom">
        <view class="b-left">商家审核中：</view>
        <view class="b-right">￥{{ order.totalPrice }}</view>
      </view>
    </view>
  </view>
</template>

<script setup>
const switchToTab = () => {
  uni.switchTab({
    url: '/pages/mine/mine', // 请替换为你的tabBar页面的实际路径
  });
};

import { ref } from 'vue';

// 定义订单数据
const orders = ref([
  {
    id: '983719387471',
    image: '../../static/image/shoes.png',
    title: '男运动鞋秋季男鞋青少年正品透气夏网面减震跑步休闲旅游鞋',
    specification: '标准白;42',
    price: '890.00',
    quantity: 1,
    totalPrice: '890.00',
  },
  {
    id: '983719387471',
    image: '../../static/image/shoes.png',
    title: '男运动鞋秋季男鞋青少年正品透气夏网面减震跑步休闲旅游鞋',
    specification: '标准白;42',
    price: '890.00',
    quantity: 1,
    totalPrice: '890.00',
  }
  // 可以继续添加更多的订单对象...
]);

const navigateToReturnPage = () => {
  uni.navigateTo({
    url: '/pages/return/index', // 这里填写你要跳转到的页面路径
  });
};

const navigateToOrders = () => {
  uni.navigateTo({
    url: '/pages/orders/index', // 这里填写你要跳转到的页面路径
  });
};
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  .left {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 50px;
  }
}

.body {
  margin-top: 60px;
  width: 100%;

  .b-box {
    padding: 20px 0;
    width: 90%;
    margin: 20px auto;
    background-color: #fff;
    border-radius: 10px;

    .b-top {
      width: 90%;
      height: 30px;
      line-height: 30px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      color: #a0a0a0;
      font-size: 14px;

      .t-right {
        width: 20%;
        background-repeat: no-repeat;
        background-size: 20px;
        text-align: right;
        background-position: 30% 50%;
        background-image: url(../../static/image/refund.png);
      }
    }

    .t-center {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 20px auto;

      .c-left {
        width: 30%;

        image {
          width: 100px;
          height: 100px;
        }
      }

      .c-right {
        width: 66%;

        .r-top {
          width: 100%;
          font-size: 14px;
        }

        .r-center {
          width: 100%;
          margin: 10px 0;
          color: #9d9d9d;
          font-size: 12px;
        }

        .r-bottom {
          width: 100%;
          height: 30px;
          display: flex;

          .b-left {
            width: 6%;
            height: 30px;
            line-height: 40px;
            font-size: 14px;
          }

          .b-center {
            width: 30%;
            height: 30px;
            line-height: 36px;
            font-size: 20px;
          }

          .b-right {
            width: 10%;
            height: 30px;
            line-height: 40px;
            font-size: 14px;
            color: #9d9d9d;
          }
        }
      }
    }

    .b-bottom {
      margin: 10px auto;
      width: 94%;
      height: 50px;
      line-height: 50px;
      background-color: #f5f5f5;
      display: flex;

      .b-left {
        width: 28%;
        font-weight: 600;
        margin-left: 20px;
      }

      .b-rigth {
        color: #b5b5b5;
      }
    }
  }
}
</style>