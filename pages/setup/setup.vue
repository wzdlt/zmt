<!-- 设置 -->
<template>
  <view class="set">
    <view class="set-loop" v-for="(item,index) in list" :key="index">
      <view class="set-box">
        <view class="left">
          {{item.text1}}
        </view>
        <view class="right">
          <text v-if="item.text2=item.text2">{{item.text2}}</text>
          <uv-icon name="arrow-right" color="#d7d7d7" size="20"></uv-icon>
        </view>
      </view>
    </view>
    <view class="bottom">
      <view class="btn">
        <image src="../../static/image/关机.png" mode=""></image>
        <view>退出登录</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          text1: '关于我们'
        }, {
          text1: '用户协议'
        }, {
          text1: '隐私政策'
        }, {
          text1: '版本',
          text2: '1.0.1'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .set {
    background-color: #f5f5f5;

    .set-loop {
      background-color: #fff;

      .set-box {
        padding: 30rpx;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid #f5f5f5;

        .right {
          display: flex;

          text {
            margin-right: 10rpx;
          }
        }
      }
    }

    .bottom {
      margin-top: 20rpx;
      background-color: #fff;

      .btn {
        padding: 30rpx;
        display: flex;
        align-items: center;
        justify-content:center;

        image {
          width: 40rpx;
          height: 40rpx;
        }
      }
    }
  }
</style>