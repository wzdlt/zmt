<template>
  <view class="header">
      <view 
      class="left"
      @click="switchToTab">
          &lt;
      </view>
  
      <view class="center">我的余额</view>
  </view>
  
  <view class="body">
    <view class="b-top">
      <view class="text">总余额(元)</view>
      <view class="num">1890.00</view>
    </view>
    <view class="b-bottom">
      <view class="item">
        <view class="text">可提现余额(元)℗</view>
        <view class="num">980.50</view>
      </view>
      <view class="item">
        <view class="text">充值余额(元)℗</view>
        <view class="num">100.00</view>
      </view>
      <view class="item">
        <view class="text">待入账余额(元)℗</view>
        <view class="num">680.50</view>
      </view>
    </view>
  </view>
  
  <view class="footer">
  <view class="container">
    <view class="item" v-for="(item, index) in items" :key="index" @click="navigateToPage(item)">
      <view class="left" :class="item.iconClass">{{ item.text }}</view>
      <view class="right">&gt;</view>
    </view>
  </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
  
const switchToTab = () => {
    uni.switchTab({
        url: '/pages/mine/mine', // 请替换为你的tabBar页面的实际路径
    });
};

// footer 循环数据
const items = ref([
  { text: '充值', iconClass: 'ico1' },
  { text: '提现', iconClass: 'ico2' },
  { text: '余额明细', iconClass: 'ico3' },
  { text: '提现记录', iconClass: 'ico4' },
]);

const navigateToPage = (item) => {
  if (item.text === '充值') {
    uni.navigateTo({
      url: '/pages/chongzhi/chongzhi'
    });
  }
  else if (item.text === '提现') {
    uni.navigateTo({
      url: '/pages/withdrawal/index'
    });
  } else if (item.text === '余额明细') { // 添加对“提现记录”的处理
    uni.navigateTo({
      url: '/pages/details/details'
    });
  } else if (item.text === '提现记录') { // 添加对“提现记录”的处理
    uni.navigateTo({
      url: '/pages/withdrawals/index'
    });
  }
}
</script>

<style lang="scss">
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
      background-color: #fd4425;
      color: #fff;
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
  
  .body{
    width: 100%;
    margin-top: 40px;
    color: #fff;
    background-color: #fd4425;
    .b-top{
      padding: 20px 0;
      width: 90%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      .text{
        margin: 10px 0;
        width: 100%;
        font-size: 14px;
      }
      .num{
        width: 100%;
        font-size: 20px;
      }
    }
    .b-bottom{
      padding: 20px 0;
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 10px auto;
      .text{
        width: 100%;
        font-size: 12px;
      }
    }
  }
  
  .footer{
    margin-top: -10px;
    padding: 30px 0;
    width: 100%;
    height: 100vh;
    background-color: #f6f6f6;
    .container{
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 5px;
      .item{
        display: flex;
        width: 100%;
        height: 60px;
        .left{
         width: 90%;
         height: 100%;
         line-height: 60px;
         text-indent: 3em;
        }
        .right{
          width: 10%;
          height: 100%;
          line-height: 60px;
        }
          
        .ico1{
          background-image: url(../../static/image/钱包.png);
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 10% 50%;
        }
        .ico2{
          background-image: url(../../static/image/实体1.png);
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 10% 50%;
        }
        .ico3{
          background-image: url(../../static/image/ico-12.png);
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 10% 50%;
        }
        .ico4{
          background-image: url(../../static/image/钱袋.png);
          background-repeat: no-repeat;
          background-size: 16px;
          background-position: 10% 50%;
        }
      }
    }
  }
</style>