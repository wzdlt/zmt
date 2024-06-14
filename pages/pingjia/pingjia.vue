<template>
  <!-- 服务评价 -->
  <view class="fj-box">
    <view class="fj-cen">
      <view class="fc-top">
        <view>商品评价</view>
        <view><uv-rate :count="count" v-model="value" size="30" activeColor="#ffb800"></uv-rate></view>
      </view>
      <view class="fc-cen">
        <view class="fc-text"><uv-textarea v-model="text" placeholder="请输入评价内容" border="none"></uv-textarea></view>
        <view><uv-upload :fileList="fileList" name="3" multiple :maxCount="10" :previewFullImage="true"></uv-upload>
        </view>
      </view>
    </view>
    <!-- <view class="fc-bot">
      <view>服务商评价</view>
      <view><uv-rate :count="count" v-model="value" size="30" activeColor="#ffb800"></uv-rate></view>
    </view> -->
    <view class="fc-but">
      <uv-button type="primary" size="small" text="提交" shape="circle" color="#f7433d"></uv-button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        count: 5,
        value: 2,
        text: "",
        fileList: [{
          url: "https://cdn.uviewui.com/uview/swiper/1.jpg",
        }, ],
      };
    },
    methods: {},
  };
</script>

<style scoped lang="scss">
  .fj-box {
    width: 100%;
    padding-top: 30rpx;
    height: 100vh;
    background-color: rgba(192, 192, 192, 0.4);

    .fj-cen {
      width: 90%;
      margin: auto;
      background-color: white;
      border-radius: 10rpx;

      .fc-top {
        view:nth-child(1) {
          width: 100%;
          text-align: center;
          margin-top: 20rpx;
          padding-top: 20rpx;
        }

        view:nth-child(2) {
          width: 50%;
          margin: auto;
        }
      }

      .fc-cen {
        width: 95%;
        margin: auto;
        margin-top: 40rpx;

        // background-color: rgba(192, 192, 192,0.4);
        .fc-text {
          color: #b0b0b0;
          background-color: #f5f6f7;
        }
      }
    }

    .fc-bot {
      width: 95%;
      margin: auto;
      border-radius: 10rpx;
      margin-top: 35rpx;
      background-color: white;

      view:nth-child(1) {
        width: 100%;
        text-align: center;
        margin-top: 20rpx;
      }

      view:nth-child(2) {
        width: 50%;
        margin: auto;
      }
    }

    .fc-but {
      width: 95%;
      margin: auto;
      margin-top: 70rpx;
    }
  }
</style>