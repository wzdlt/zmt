<template>
  <view class="box">
    <!-- 头部 -->
    <view class="top-top">
      <view class="top1">
        <uv-picker ref="picker" :columns="columns" @confirm="confirm"></uv-picker>
        <view class="top3"><button @click="openPicker"> <text><img src="../../static/添加.png" alt=""></text>
            <text>添加地址</text></button></view>
      </view>
    </view>

    <view class="top">
      <!-- 第一部分开始 -->
      <!-- 第一部分结束 -->
      <view class="center">
        <view class="center-left">
          <image src="../../static/image/青少年男鞋.png" mode=""></image>
        </view>
        <!-- 第二部分 -->
        <view class="center-right">
          <view class="p1">男运动鞋秋季男鞋青少年正品透...</view>
          <view class="p2">标准白、42</view>
          <view class="p3"><span class="span1"><!--￥--></span>890.00 <span class="span2">×1</span> </view>
        </view>
      </view>
      <!-- djiai  -->
      <view class="foot">

        <view class="two" v-for="item in list" :key="item.id">
          <view class="three">
            <span class="span23">{{ item.text1 }}</span>
            <span class="span3">{{ item.price }}</span>
          </view>
        </view>
        <view class="four">
          <view class="span5">备注</view>
          <view class="span4"><input type="text" placeholder="请输入备注" style="text-align: right;"></view>
        </view>
      </view>
      <!-- djsij  -->
    </view>
    <view class="pay">
      <view class="pay1">
        <view class="pay1-left">
          <image src="../../static/image/wechat.png" alt=""></image>
          <view class="pay1-left-rihgt">微信支付</view>
        </view>
        <view class="pay1-right">
          <uv-radio-group>
            <uv-radio></uv-radio>
          </uv-radio-group>
        </view>
      </view>
      <!-- 支付宝 -->
      <view class="pay1">
        <view class="pay1-left">
          <image src="../../static/image/支付宝.png" alt=""></image>
          <view class="pay1-left-rihgt">支付宝</view>
        </view>
        <view class="pay1-right">
          <uv-radio-group>
            <uv-radio></uv-radio>
          </uv-radio-group>
        </view>
      </view>
      <!-- 余额 -->
      <view class="pay1">
        <view class="pay1-left">
          <image src="../../static/image/ico-12.png" alt=""></image>
          <view class="pay1-left-rihgt">余额</view>
        </view>
        <view class="pay1-right">
          <uv-radio-group>
            <uv-radio></uv-radio>
          </uv-radio-group>
        </view>
      </view>
      <!-- 结束 -->
    </view>
    <!-- 底部导航 -->
    <view class="bottom">
      <view class="bottom-bottom">
        <view class="p3"><text style="color: black;">合计：</text> <span class="span1"><!--￥--></span>￥890.00
        </view>
        <view class="jiesuan"><button>立即支付</button> </view>
      </view>
    </view>

  </view>
</template>

<script setup>
import { ref } from 'vue';
const list = ref([
  { id: 1, text1: "优惠金额", price: "￥25" },
  { id: 2, text1: "运费", price: "免运费" },
  { id: 3, text1: "实付金额", price: "￥865" },
])

</script>

<style lang="scss">
.box {
  width: 100%;
  background-color: #F5F5F5;

  .top-top {
    width: 100%;

    .top3 {

      width: 100%;
      border: 1px solid red;
    }

    img {
      width: 10%;
      height: 20%;

    }
  }



  .bottom {
    width: 100%;
    display: flex;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 70px;

    .bottom-bottom {
      width: 100%;
      display: flex;
      margin-top: 15px;

      .p3 {
        width: 70%;
        margin-top: 10px;
        color: red;
        height: 20px;
      }

      button {
        background-color: #FC4424;
        color: white;
        border-radius: 100px;
        height: 40px;
      }
    }
  }


  .top-bottom {
    margin-top: 10px;
  }

  .pay {
    width: 95%;
    margin: auto;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;

    .pay1 {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #F5F5F5;

      .pay1-right {
        margin-top: 10px;
      }

      .pay1-left {
        width: 70%;
        height: 40px;

        display: flex;
      }

      .pay1-left-rihgt {
        width: 80%;
        margin-left: 15px;

      }

      .pay1-left image {
        width: 10%;
        height: 27px;
        margin-left: 15px;
      }
    }
  }


  .top {

    width: 90%;
    margin: auto;
    padding: 2%;
    margin-top: 10px;
    background-color: #FFFFFF;
    border-radius: 10rpx;

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
          color: red;

          .span1 {
            font-size: 15px;
            color: red;
            font-weight: bold;
          }

          .span2 {
            font-size: 0.6rem;

            color: #c2c2c2;
          }
        }
      }
    }
  }

  .four {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-left: 1.4%;

  }

  .foot {
    width: 90%;
    margin: auto;
    margin-top: 3%;
    background-color: #ffffff;
    border-radius: 10rpx;
    padding: 2%;
    padding-bottom: 4%;



    .two {
      padding: 2%;
      display: flex;
      justify-content: space-between;

      .three {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .span23 {

          color: #676767;
        }

        .span3 {
          margin-left: 3%;
          color: #383838;
        }
      }


    }
  }
}
</style>
