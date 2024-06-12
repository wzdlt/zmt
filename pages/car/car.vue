<template>
  <view class="car">
    <view class="top">
      <view class="top-all">
        <uv-icon name="arrow-left" color="#ffffff" size="20"></uv-icon>
        <view>正茂通养车</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {}
    },
    onLoad() {},
    methods: {}
  }
</script>
<style lang="less" scoped>
  .car {
    width: 100%;
    .top {
      padding-top: 44px;
      width: 100%;
      height: 300px;
      background: linear-gradient(#fc4424, #f6e5e2);
      .all{
        border: 1px solid black;
      }
    }
  }
</style>