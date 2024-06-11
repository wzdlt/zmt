<template>
  <view class="invite">
    <!-- 头 -->
    <uv-tabs :list="list" lineColor="#fc4424" :scrollable="false" activeStyle="color:#fc4424"
      inactiveStyle="color:#a8a8a8"></uv-tabs>
    <!--  <view class="top" ref="a1">
      <view class="one" @click="getColor()">直推</view>
      <view class="one" @click="getColor()">间推</view>
    </view> -->
    <!-- 主题 -->
    <view class="body">
      <view class="all" v-for="item in userName" :key="item">
        <view class="body-left">
          <uv-image shape="circle" :src="item.img" width="40px" height="40px"></uv-image>
          <view class="user">{{item.name}}</view>
        </view>
        <view class="body-right">{{item.data}}</view>
      </view>
    </view>
  </view>
</template>
<script setup>
  import {
    ref
  } from 'vue';
  // const a1 = ref(null)
  const list = ref([{
    name: '直推'
  }, {
    name: '间推'
  }])
  const userName = ref([{
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '王天琦',
      data: '2022-03-31'
    },
    {
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '郑新',
      data: '2022-03-31'
    },
    {
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '周校长',
      data: '2022-03-31'
    },
    {
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '李坊',
      data: '2022-03-31'
    },
    {
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '李嘉诚',
      data: '2022-03-31'
    },
    {
      img: "https://cdn.uviewui.com/uview/album/1.jpg",
      name: '李林颖',
      data: '2022-03-31'
    }
  ])
  // function getColor() {
  //   console.log(a1.value);
  //   // document.getElementsByClassName("one").style.color='#fc4424'
  // }
</script>
<style lang="less" scoped>
  page {
    background-color: #f5f5f5;
  }

  .invite {
    width: 100%;

    // 头
    .uv-tabs {
      background-color: #ffffff;
    }

    // 主题
    .body {
      width: 100%;

      .all {
        padding: 5%;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f8f8f8;
        justify-content: space-between;

        .body-left {
          width: 30%;
          display: flex;
          align-items: center;
          .user {
            margin-left: 3%;
          }
        }

        .body-right {
          color: #808080;
        }
      }

    }
  }
</style>