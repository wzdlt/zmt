<template>
  <view class="header">
      <view 
      class="left"
      @click="syy">
          &lt;
      </view>
  
      <view class="center">提现</view>
  </view>
  
  <view class="body">
    <view class="withdrawal">
      <view class="w-input">
        <input class="uni-input" type="number" placeholder="请输入提现金额" />
      </view>
      <view class="w-text">提现手续费10%</view>
    </view>
    
    <view class="withdrawal-box">
      <view class="w-top">提现至</view>
      <view class="w-item">
        <view class="wechat" ref="wechat" @tap="toggleWechat">微信钱包</view>
        <view class="alipay" ref="alipay" @tap="toggleAlipay">支付宝</view>
      </view>
    </view>
    
    <view class="wechat-box" v-if="showWechatBox">
      <view class="wechat-top">填写微信账号</view>
      <view class="wechat-input">
        <input class="uni-text" type="text" placeholder="请输入姓名" />
        <input class="uni-input" type="number" placeholder="请输入微信账号" />
      </view>
    </view>
    
    <view class="alipay-box"  v-if="showAlipayBox">
      <view class="alipay-top">填写支付宝账号</view>
      <view class="alipay-input">
        <input class="uni-text" type="text" placeholder="请输入姓名" />
        <input class="uni-input" type="number" placeholder="请输入支付宝账号" />
      </view>
    </view>
    
    <view class="button">
      <button>申请提现</button>
    </view>
  </view>
</template>

<script setup>
  const syy = () => {
    uni.navigateTo({
      url: '/pages/balance/index'
    });
  };
  
  import { ref, onUpdated, nextTick } from 'vue';
  
  // 定义状态变量
  const showWechatBox = ref(false);
  const showAlipayBox = ref(false);
  
  // 定义方法
  const toggleWechat = () => {
    showWechatBox.value = !showWechatBox.value;
    showAlipayBox.value = false;
    updateActiveClass();
  };
  
  const toggleAlipay = () => {
    showAlipayBox.value = !showAlipayBox.value;
    showWechatBox.value = false;
    updateActiveClass();
  };
  
  // 更新激活状态的类名
const updateActiveClass = async () => {
  await nextTick();
  const wechatRef = document.querySelector('.wechat');
  const alipayRef = document.querySelector('.alipay');

  if (wechatRef && alipayRef) {
    wechatRef.classList.toggle('active', showWechatBox.value);
    alipayRef.classList.toggle('active', showAlipayBox.value);

    // 动态修改背景色和边框色
    [wechatRef, alipayRef].forEach((element) => {
      element.style.backgroundColor = element.classList.contains('active') ? '#fff4f2' : ''; // 背景颜色
      element.style.borderColor = element.classList.contains('active') ? '#da5147' : '';       // 边框颜色
    });
  }
};
  // 初始化时或依赖更新后执行，确保ref被正确初始化后再操作DOM
  onUpdated(updateActiveClass);
</script>

<style lang="scss">
  page{
    background-color: #f5f5f5;
  }
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
      background-color: #fff;
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
  
  .body{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .withdrawal{
      width: 90%;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 6px;
      .w-input{
        width: 90%;
        height: 50px;
        margin: 10px auto;
        border-bottom: 1px solid #ccc;
        .uni-input{
          width: 100%;
          height: 100%;
          line-height: 50px;
          text-indent: 3em;
        }
      }
      .w-text{
        width: 90%;
        margin: 10px auto;
        font-size: 12px;
        color: #808080;
      }
    }
    
    .withdrawal-box{
      width: 90%;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 6px;
      .w-top{
        width: 90%;
        margin: 20px auto;
      }
      .w-item{
        width: 90%;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        .wechat{
          width: 48%;
          height: 40px;
          line-height: 40px;
          border: 1px solid #efefef;
          border-radius: 6px;
          text-indent: 1em;
          text-align: center;
          background-image: url(../../static/image/wechat.png);
          background-size: 20px;
          background-position: 26% 50%;
          background-repeat: no-repeat;
        }
        .alipay{
          width: 48%;
          height: 40px;
          line-height: 40px;
          border: 1px solid #efefef;
          border-radius: 6px;
          text-indent: 1em;
          text-align: center;
          background-image: url(../../static/image/alipay.png);
          background-size: 20px;
          background-position: 26% 50%;
          background-repeat: no-repeat;
        }
      }
    }
    
    .wechat-box,.alipay-box{
      width: 90%;
      margin: 20px auto;
      background-color: #fff;
      border-radius: 6px;
      .wechat-top,.alipay-top{
        width: 90%;
        margin: 20px auto;
      }
      .wechat-input,.alipay-input{
        width: 90%;
        margin: 20px auto;
        input{
          width: 96%;
          height: 50px;
          margin: 20px auto;
          border-radius: 6px;
          border: 1px solid #efefef;
          text-indent: 1em;
        }
      }
    }
    
    .button{
      width: 90%;
      margin: 20px auto;
      button{
        width: 100%;
        background-color: #fd4425;
        border-radius: 50em;
        color:#fff;
      }
    }
  }
</style>