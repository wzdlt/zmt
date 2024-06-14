<template>
  <view class="surpervip1">
    <view class="top">
      <view>
        <img src="../../static/个人11.png" />
      </view>
      <view>钱清养车服务门店</view>
      
    </view>
    <view class="content">
      <view class="content1">
        <img src="../../static/个人10.png">余额
        <view>1358.00</view>
      </view>
      <view class="content2"></view>
      <view class="content3">
        <img src="../../static/个人9.png">待入账
        <view>283.00</view>
      </view>
    </view>
    <view class="bottom">
      <view class="bottom1">我的订单</view>
      <view class="bottom2">
        <view class="bottom21">
          <img src="../../static/个人8.png"></img>
          <view>会员商城</view>
        </view>
        <view class="bottom22">
          <img src="../../static/个人7.png">
          <view>客户订单</view>
        </view>
        <view class="bottom22">
          <img src="../../static/个人6.png">
          <view>售后服务</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
.surpervip1 {
  background-color: #F5F5F5;
  height:93vh;
  .top {
    padding: 0 15px 0 15px;
    background-color: #faebec;
    display: flex;
    height: 135px;
    view:nth-child(1) {
      margin-top: 25px;
      img {
        background-color: #fff;
        border-radius: 50%;
        padding: 8px;
        width: 40px;
      }
    }
    view:nth-child(2) {
      line-height: 110px;
      font-size: 18px;
      font-weight: bold;
      margin-left: 15px;
    }
  }
  .content {
    margin-top:-30px;
    margin-bottom:15px;
    padding:15px 0 15px 0;
    display: flex;
    justify-content: space-between;
    width:90%;
    background-color: #fff;
    margin-left:18px;
    border-radius:10px;
    img{
      width:20px;
    }
    .content1 view,.content3 view{
        font-weight: bold;
        margin-top:6px;
        font-size: 16px;
      }
    .content1,.content3{
      width:45%;
      text-align: center;
      font-size: 14px;
    }
    .content2{
      border:1px solid #F5F5F5;
    }
  }
  .bottom{
    border-radius: 10px;
    width:90%;
    margin:auto;
    background-color: #fff;
    padding:10px 0 10px 0;
    .bottom1{
      font-weight: bold;
      border-bottom:1px solid #F5F5F5;
      padding:10px;
    }
    .bottom2{
      margin-top:10px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      .bottom21 img,.bottom22 img{
        width:30px;
      }
      .bottom21 view,.bottom22 view{
        font-size: 14px;
      }
    }
  }
}
</style>
