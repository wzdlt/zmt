<template>
  <view class="pay">
    <view class="img">
      <image src="/static/image/支付成功.png" mode=""></image>
    </view>
    <view class="success">恭喜，支付成功</view>
    <view class="btn">
      <button>查看订单</button>
      <button>返回首页</button>
    </view>
  </view>
</template>

<script>

</script>

<style lang="scss" scoped>
  .pay {
    margin: auto;
    width: 90%;

    .img {
      margin-top: 5%;
      width: 80%;
      height: 250px;
      margin: auto;

      image {
        width: 100%;
      }
    }

    .success {
      color: #828282;
      margin-top: 5%;
      text-align: center;
      font-size: 1.2rem;
    }

    // 按钮
    .btn {
      margin-top: 10%;
      display: flex;
      justify-content: space-between;

      button:nth-child(1) {
        border: 1px solid #f5f5f5;
        border-radius: 10px;
        width: 45%;
        background-color: #ffffff;
      }

      button:nth-child(2) {
        border: 1px solid #f5f5f5;
        border-radius: 10px;
        background-color: #ececec;
        width: 45%;
      }
    }
  }
</style>