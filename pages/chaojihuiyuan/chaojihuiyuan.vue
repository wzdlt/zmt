<template>
  <view class="box">
    <view class="box1">
      <image src="../../static/image/chaojihuiyuan.png" mode=""></image>
    </view>
    <button @click="kai()" @tap="shenqing()">立即申请</button>

    <view class="box2" v-show="isshow">
      <view class="box2-list">
        <view class="box2-list1">
          可参与的抢购
          <image @click="guan()" src="../../static/image/delete.png" mode=""></image>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
        <view class="box2-list2">
          <view class="box2-list2-1">
            <image src="../../static/image/头像.jpg" mode=""></image>
          </view>
          <view class="box2-list2-2">橘子果酱</view>
          <view class="box2-list2-3">
            <text>去抢购</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        isshow: false
      };
    },
    methods: {
      shenqing() {
        uni.showToast({
          title: '申请跳转',
          icon: 'none'
        });
      },
      kai() {
        this.isshow = true
      },
      guan() {
        this.isshow = false
      }
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

    .box2 {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);

      .box2-list {
        width: 80%;
        margin: 150px auto;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;

        .box2-list1 {
          text-align: center;
          font-weight: bold;
          border-bottom: 1px solid #e6e6e6;
          padding-bottom: 15px;
          position: relative;
          image{
            width: 25px;
            height: 25px;
            position: absolute;
            right: 10px;
            top: 0;
          }
        }

        .box2-list2 {
          border-bottom: 1px solid #e6e6e6;
          padding: 10px 0;
          display: flex;

          .box2-list2-1 {
            margin-right: 10px;

            image {
              width: 30px;
              height: 30px;
            }
          }

          .box2-list2-2 {
            line-height: 30px;
            width: 68%;
          }

          .box2-list2-3 {
            line-height: 30px;

            text {
              background-color: #fc4424;
              color: #fff;
              font-size: 12px;
              padding: 2px 5px;
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
</style>