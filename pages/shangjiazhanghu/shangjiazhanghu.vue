<template>
  <view class="box">
    <!-- 收款红包金额 -->
    <view class="box1">
      <view class="box1-text">
        <view class="box1-text1">总金额</view>
        <view class="box1-text2">1890.00</view>
      </view>
      <view class="box1-text3">提现</view>
    </view>

    <!-- 收款红包金额结束 -->
    <!-- 收款红包详细 -->
    <view class="box2" v-for="(item, index) in list" :key="index">
      <view class="box2-text">
        <view class="box2-right-top">
          {{ item.text }}
        </view>
        <view class="box2-right-bottom">
          {{ item.time }}
        </view>
      </view>
      <view class="box2-left">{{ item.price }}</view>
    </view>
    <!-- 收款红包结束 -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        text: "提现至微信",
        time: "2021/09/01 15:11:34",
        price: -100
      }, {
        text: "提现至支付宝",
        time: "2021/09/01 15:11:34",
        price: +100
      }, {
        text: "提现至微信",
        time: "2021/09/01 15:11:34",
        price: +100
      }, {
        text: "提现至支付宝",
        time: "2021/09/01 15:11:34",
        price: +100
      }
      ],
    }
  }
}
</script>
<style lang="scss">
.box {
  width: 100%;


  .box1 {
    height: 160px;
    background-color: #FC4424;

    .box1-text3 {
      color: #FBEEBF;
      background-color: #F4CE48;
      width: 30%;
      height: 40px;
      line-height: 40px;
      margin: auto;
      margin-top: 20px;
      border-radius: 30px;
      text-align: center;
    }

    .box1-text {
      width: 100%;

      .box1-text1 {
        color: #FEDDD7;
        text-align: center;
      }

      .box1-text2 {
        color: #FFFFFF;
        margin-top: 20px;
        font-size: 25px;
        text-align: center;
      }
    }
  }

  /* 收款详细金额  */
  .box2 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #c7c5c5;

    .box2-text {
      width: 80%;
      margin-top: 20px;

      .box2-right-top {
        margin-bottom: 10px;
        color: #4C4C4C;

      }

      .box2-right-bottom {
        color: #A4A4A4;
      }
    }

    .box2-left {
      font-weight: bold;
      margin-top: 40px;
      color: green;

      .box2-left :nth-child(1) {
        color: red;
      }

    }
  }








}
</style>