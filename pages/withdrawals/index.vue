<template>
  <view class="header">
      <view 
      class="left"
      @click="syy">
          &lt;
      </view>
  
      <view class="center">提现记录</view>
  </view>
<view class="body">
    <view class="item" v-for="(item, index) in formattedItems" :key="index">
      <view class="left">
        <view class="l-top">{{ item.title }}</view>
        <view class="l-bottom">{{ item.date }}</view>
      </view>
      <view class="right">
        {{ item.amount }}
      </view>
    </view>
  </view>
</template>

<script setup>
  import { ref, computed } from 'vue';
  const syy = () => {
    uni.navigateTo({
      url: '/pages/balance/index'
    });
  };
  
  // 循环数据
  const items = ref([
    { type: '微信', date: '2021/09/01 15:11:34', amount: 100 },
    { type: '支付宝', date: '2021/09/01 15:11:34', amount: 100 },
    { type: '微信', date: '2021/09/01 15:11:34', amount: 100 },
    { type: '支付宝', date: '2021/09/01 15:11:34', amount: 100 },
  ]);
  
  // 使用计算属性来格式化数据，使其更易于在模板中使用
  const formattedItems = computed(() => {
    return items.value.map((item, index) => {
      let title;
      if (item.type === '微信') title = '提现到微信';
      else if (item.type === '支付宝') title = '提现到支付宝';
  
      return {
        title,
        date: item.date,
        amount: item.amount,
      };
    });
  });
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
  
  .body{
    margin-top: 40px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    background-color: #f6f6f6;
    .item{
      width: 100%;
      height: 100px;
      display: flex;
      background-color: #fff;
      justify-content: space-between;
      .left{
        margin-left: 10px;
        width: 90%;
        height: 100%;
        .l-top{
          margin: 30px 0 4px;
          width: 100%;
        }
        .l-bottom{
          width: 100%;
          color: #ccc;
          font-size: 14px;
        }
      }
      .right{
        margin-right: 10px;
        width: 10%;
        height: 100%;
        line-height: 100px;
        color: #e54842;
        font-weight: 600;
      }
    }
  }
</style>