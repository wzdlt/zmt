<template>
  <view class="box">
    <view class="box1">
      <image src="../../static/image/chaojihuiyuan.png" mode=""></image>
    </view>
    <button @tap="shenqing()">立即申请</button>

    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      shenqing() {
        uni.showToast({
          title: '申请跳转',
          icon: 'none'
        });
      },
      
    },
  }
</script>

<style lang="scss">
  .box {
    .box1 {
      width: 100%;
      margin: auto;
      height: 200px;
      border-radius: 10px;
      overflow: hidden;
      margin-bottom: 40px;

      image {
        width: 100%;
        height: 200px;
      }
    }

    button {
      width: 80%;
      color: #fff;
      background-color: #fc4424;
      border-radius: 25px;
    }

    
  }
</style>