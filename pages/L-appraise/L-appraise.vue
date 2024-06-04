<!-- 评价 -->
<template>
  <view class="appraise">
    <view class="appraise-box">
      <view class="top">
        <view class="word">商品评价</view>
        
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    methods: {
      change(e) {
        console.log('change', e);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .appraise {
    background-color: #f5f6f7;

    .appraise-box {
      width: 90%;
      margin: 0 auto;

      .top {
        background-color: #fff;
      }
    }
  }
</style>