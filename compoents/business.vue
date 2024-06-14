<template>
  <view id="business">
    <view class="top">
      <image src="../static/jiyou1.jpg"></image>
    </view>
    <view class="content">
      <view class="content-top">
        美孚（Mobill）金装美孚1号0W-30全合成机...
      </view>
      <view class="content-center1"> 规格：全合成 | 0W-30 | 4L </view>
      <view class="content-center2"> 众多原厂认证 高效节油 强劲动力 </view>
      <view class="content-bottom1">
        ￥120.<text class="fontcolor">00</text>
        <text class="oldprice">￥180.00</text>
      </view>
      <view class="content-bottom2"> 直降￥38.00 </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "business",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#business {
  width: 48%;
  border-radius: 20rpx;
  overflow: hidden;
  background-color: #fff;
  margin-top: 20rpx;

  .top {
    image {
      width: 100%;
      height: 300rpx;
    }
  }

  .content {
    padding: 20rpx;

    .content-top {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .content-center1 {
      font-size: 20rpx;
      color: #9b9b9b;
      margin-top: 10rpx;
    }

    .content-center2 {
      font-size: 20rpx;
      color: #9b9b9b;
      margin-top: 10rpx;

    }

    .content-bottom1 {
      margin-top: 10rpx;
      color: #fc3f1e;

      .fontcolor {
        font-size: 22rpx;
      }

      .oldprice {
        color: #a3a3a3;
        text-decoration: line-through;
        margin-left: 20rpx;
      }
    }

    .content-bottom2 {
      margin-top: 10rpx;
      background-color: #fc4424;
      width: 45%;
      text-align: center;
      font-size: 22rpx;
      color: #fee6e2;
      height: 40rpx;
      line-height: 40rpx;
      border-radius: 5px;
    }
  }
}
</style>