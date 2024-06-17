<template>
  <view class="box">
    <view class="box1">
      <image src="../../static/image/人民币.png" mode=""></image>
      <input type="number" placeholder="请输入充值金额">
    </view>
    <view class="box2">
      <view class="box2-1">支付方式</view>
      <view class="box2-2">
        <view class="box2-2-left">
          <view class="box2-2-left1">
            <image src="../../static/image/wechat.png" mode=""></image>
          </view>
          <view class="box2-2-left2">微信钱包</view>
        </view>
        <view class="box2-2-left">
          <view class="box2-2-left1">
            <image src="../../static/image/alipay.png" mode=""></image>
          </view>
          <view class="box2-2-left2">支付宝</view>
        </view>
      </view>
    </view>
    <view class="box3">
      <button>充 值</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    height: 100vh;
    padding-top: 10px;
    .box1{
      width: 90%;
      margin: 0 auto 10px;
      border-radius: 10px;
      background-color: #fff;
      position: relative;
      image{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 10px;
        left: 10px;
      }
      input{
        height: 50px;
        padding-left: 40px;
      }
    }
    .box2{
      width: 90%;
      margin: auto;
      border-radius: 10px;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
      .box2-1{
        margin-bottom: 15px;
      }
      .box2-2{
        display: flex;
        justify-content: space-between;
        .box2-2-left{
          width: 48%;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          &:hover{
           background-color: #fff4f2;
           border: 1px solid #fc7760;
          }
          .box2-2-left1{
            margin-right: 10px;
            image{
              width: 20px;
              height: 20px;
            }
          }
          .box2-2-left2{
            
          }
        }
      }
    }
    .box3 {
      width: 90%;
      margin: auto;
      button {
        color: #fff;
        background-color: #fc4424;
        border-radius: 25px;
      }
    }
  }
</style>