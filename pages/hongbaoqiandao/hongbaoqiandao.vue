<template>
  <view class="box">
    <view class="box1">
      <view class="box1-text"><text class="box1-text1">签到</text>送红包</view>
    </view>
    <view class="box2">
      
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {

    };
  }
}
</script>

<style lang="scss">
.box {
  width: 100%;
  background-color: #FF7121;
  border-radius: 0px 0px 40% 40%;
  height: 150px;

  .box1 {
    width: 90%;

    .box1-text {
      color: #FAED84;
      font-size: 25px;

      border: 1px solid red;
    }

    .box1-text1 {
      color: #FFFFFF;
      font-size: 25px;
    }
  }
}
</style>
