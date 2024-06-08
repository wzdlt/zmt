<template>
    <view class="header">
        <view 
        class="left"
        @click="switchToTab">
            &lt;
        </view>

        <view class="center">商品订单</view>
    </view>

    <view class="content">
        <view class="item">
          <view class="text color">
            全部
          </view>
          <view class="border"></view>
        </view>
        <view class="item">待付款</view>
        <view class="item">待发货</view>
        <view class="item">待收货</view>
        <view class="item">待评论</view>
    </view>

    <view class="body">
      <img src="../../static/image/success.png" alt="" />
    </view>
</template>

<script setup>
const switchToTab = () => {
    uni.switchTab({
        url: '/pages/mine/mine', // 请替换为你的tabBar页面的实际路径
    });
};
</script>

<style lang="scss">
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        display: flex;
        border-bottom: 1px solid #ccc;
        .left{
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
        .center{
            flex: 1;
            text-align: center;
            line-height: 40px;
        }
    }
    
    .content{
      display: flex;
      width: 100%;
      height: 40px;
      margin-top: 40px;
      line-height: 40px;
      .item{
        width: 20%;
        text-align: center;
        position: relative;
        .text{
          width: 100%;
        }
        .border{
          display: block;
          position: absolute;
          bottom: 0;
          width: 30%;
          left: 36%;
          background-color: #fe4425;
          height: 3px;
        }
        .color{
          color: #fe4425;
        }
      }
    }
    
    .body{
      width: 100%;
      height: 100vh;
      background-color: #f6f6f6;
      img{
        width: 100%;
      }
    }
</style>