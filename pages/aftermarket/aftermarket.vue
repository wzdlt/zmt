<template>
  <view class="box">
    <view class="top">
      <view class="tk">退款商品</view>
      <view class="center">
        <view class="center-left">
          <image src="../../static/image/青少年男鞋.png" mode=""></image>
        </view>
        <view class="center-right">
          <view class="p1">男运动鞋秋季男鞋青少年正品透...</view>
          <view class="p2">标准白、42</view>
          <view class="p3"><text class="span1">￥</text>890.00 <text class="span2">×1</text> </view>
        </view>
      </view>
    </view>
    <view class="foot">
      <view class="one">选择服务类型
        <view class="two" v-for="item in list" :key="item.id">
          <view class="three">
            <image class="image1" :src="item.img" mode=""></image>
            <text class="span3">{{ item.title }}</text>
          </view>
          <text class="arrowhead">></text>
        </view>
      </view>
    </view>
		</view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
  { id: 1, img: "/static/image/申请退款.png", title: "申请退款" },
  { id: 2, img: "/static/image/申请退货.png", title: "申请退货" }
])

</script>

<style lang="scss">
.box {
  width: 100%;
  height: 1300rpx;
  background-color: #f5f5f5;

  .top {
    width: 90%;
    margin: auto;
    padding: 2%;
    padding-bottom: 4%;
    background-color: #ffffff;
    border-radius: 10rpx;

    .tk {
      margin-bottom: 5%;
      padding-bottom: 2%;
      border-bottom: 1px solid #f5f5f5;
    }

    .center {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .center-left {
        width: 28%;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .center-right {
        width: 70%;

        .p1 {

          font-size: 0.9rem;
        }

        .p2 {
          margin-top: 3%;
          font-size: 0.7rem;
          color: #c2c2c2;
        }

        .p3 {
          margin-top: 5%;
          font-size: 0.9rem;

          .span1 {
            font-size: 0.6rem;
          }

          .span2 {
            font-size: 0.6rem;

            color: #c2c2c2;
          }
        }
      }
    }
  }

  .foot {
    width: 90%;
    margin: auto;
    margin-top: 3%;
    background-color: #ffffff;
    border-radius: 10rpx;
    padding: 2%;
    padding-bottom: 4%;

    .one {
      margin-bottom: 5%;
      padding-bottom: 2%;
      border-bottom: 1px solid #f5f5f5;
    }

    .two {
      padding: 2%;
      display: flex;
      justify-content: space-between;

      .three {
        width: 70%;
        display: flex;
        align-items: center;

        .image1 {
          width: 20px;
          height: 20px;
        }

        .span3 {
          margin-left: 2%;
        }
      }

      .arrowhead {
        font-size: 1.1rem;
        color: #cccccc;
      }
    }
  }
}
</style>
