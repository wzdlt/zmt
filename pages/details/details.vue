<template>
  <view class="details">
    <view class="top" v-for="item, in list" :key="item">
      <view class="top-left">
        <view class="one">{{item.name}}</view>
        <view class="two">{{item.data}}</view>
      </view>
      <view class="top-right">{{item.price}}</view>
    </view>
  </view>
</template>

<script setup>
  import { ref } from 'vue';
  const list = ref([
    {name:'消费', data:'2021/09/01 15:11:34',price:"-100"},
    {name:'充值', data:'2021/09/01 15:11:34',price:"+100"},
    {name:'会员分佣', data:'2021/09/01 15:11:34',price:"+100"},
    {name:'代理商分佣', data:'2021/09/01 15:11:34',price:"+100"}
  ])
  // function getColor(index) {
  //     if (index === 0) {
  //       return 'red';
  //     } else if (index === 1) {
  //       return 'blue';
  //     } else {
  //       return 'black';
  //     }
  //   }
  console.log(list.value.price);
</script>

<style lang="less" scoped>
page{
  background-color: #f5f5f5;
}
.details{
  width: 100%;
  
  .top{
    padding: 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-bottom: 1px solid #f8f8f8;
    .top-left{
      width: 50%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .one{
        width: 100%;
      }
      .two{
        font-size: 0.8rem;
        width: 100%;
        color: #a5a5a5;
      }
    }
    .top-right{
      color: #30bf31;
    }
  }
}
</style>
