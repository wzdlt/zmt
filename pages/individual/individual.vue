<!-- 个人信息 -->
<template>
  <view class="individual">
    <view class="avatar">
      <view class="left">
        头像
      </view>
      <view class="right">
        <uv-avatar size="50" src="../../static/image/头像.jpg"></uv-avatar>
        <uv-icon name="arrow-right" color="#e1e1e1" size="20"></uv-icon>
      </view>
    </view>
    <view class="name">
      <view class="left">
        昵称
      </view>
      <view class="right">
        <text>自然而然</text>
        <uv-icon name="arrow-right" color="#e1e1e1" size="20"></uv-icon>
      </view>
    </view>
    <view class="phone">
      <view class="left">
        手机号
      </view>
      <view class="right">
        <text>18353787652</text>
        <uv-icon name="arrow-right" color="#e1e1e1" size="20"></uv-icon>
      </view>
    </view>
    <view class="button">
      <uv-button type="primary" text="保存" color="#f7433d"></uv-button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .individual {
    padding: 20rpx 40rpx;

    .avatar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e1e1e1;
      padding-bottom: 30rpx;

      .right {
        display: flex;

        .uv-avatar {
          margin-right: 20rpx;
        }
      }
    }

    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e1e1e1;
      padding: 44rpx 0;

      .right {
        display: flex;

        ::v-deep .uvicon {
          margin-left: 20rpx;
        }
      }
    }

    .phone {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #e1e1e1;
      padding: 44rpx 0;

      .right {
        display: flex;

        ::v-deep .uvicon {
          margin-left: 20rpx;
        }
      }
    }

    .button {
      margin-top: 30rpx;

      ::v-deep .uv-button--square {
        border-radius: 20px;
      }
    }
  }
</style>