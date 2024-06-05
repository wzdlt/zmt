<template>
  <view class="new">
    <!-- 新手指南 -->
      <view class="top1" @click="goto()">
      
      <p >退款什么时候到账</p> <p>></p>
      </view>
      <view class="top" v-for="item in list" :key="item.id">
        <p>{{item.title1}}</p> <p>{{item.title2}}</p>
      </view>
  </view>
</template>

<script setup>
  import { ref } from 'vue';
  const list = ref([
    {id:1,title1:"退换货运费谁承担",title2:'>'},
    {id:2,title1:"如何查看我的付款记录",title2:'>'},
    {id:3,title1:"下单后如何支付",title2:'>'},
    {id:4,title1:"养车服务如何核销订单",title2:'>'},
    ]
  )
  // 页面跳转
  function goto(){
    uni.navigateTo({
    	url: '../greenhorn1/greenhorn1'
    });
  } 
  
</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
.new{
  width: 100%;
  .top1{
    padding: 5%;
    border-top: 1rpx solid #fbfbfb;
    display: flex;
    justify-content: space-between;
  }
  .top{
    padding: 5%;
    border-top: 1rpx solid #fbfbfb;
    display: flex;
    justify-content: space-between;
  }
}
</style>
