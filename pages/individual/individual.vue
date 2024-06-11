<!-- 个人信息 -->
<template>
  <view class="individual">
    <view class="individual-box">
      <view class="top">
        <view class="avatar">
          <view class="text">头像</view>
          <view class="img">
            <uv-avatar src="../../static/image/头像.jpg"></uv-avatar>
            <uv-icon name="arrow-right" color="#dbdbdb" size="20"></uv-icon>
          </view>
        </view>
        <view class="name">
          <view class="text">昵称</view>
          <view class="right">
            <view>自然而然</view>
            <uv-icon name="arrow-right" color="#dbdbdb" size="20"></uv-icon>
          </view>
        </view>
        <view class="phone">
          <view class="text">手机号</view>
          <view class="right">
            <view>18353787652</view>
            <uv-icon name="arrow-right" color="#dbdbdb" size="20"></uv-icon>
          </view>
        </view>
      </view>
      <view class="button">
        <uv-button type="primary" text="保存" color="#f7433d"></uv-button>
      </view>
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
    margin: 0;
    padding: 0;

    .individual-box {
      .top {
        padding: 30rpx;

        .avatar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 30rpx;
          border-bottom: 1px solid #d7d7d7;

          .img {
            display: flex;

            ::v-deep .uv-icon__icon {
              margin-left: 30rpx;
            }
          }
        }

        .name {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40rpx;
          border-bottom: 1px solid #d7d7d7;
          margin-top: 40rpx;

          .right {
            display: flex;

            ::v-deep .uv-icon__icon {
              margin-left: 30rpx;
            }
          }
        }

        .phone {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 40rpx;
          border-bottom: 1px solid #d7d7d7;
          margin-top: 40rpx;

          .right {
            display: flex;

            ::v-deep .uv-icon__icon {
              margin-left: 30rpx;
            }
          }
        }
      }

      .button {
        padding: 30rpx;

        ::v-deep .uv-button--square {
          border-radius: 20px;
        }
      }
    }
  }
</style>