<template>

  <view class="box">
    <view class="box1">
      <view class="box1-left">
        <uv-input placeholder="请输入你想要的内容" style="color: white;" shape="circle" v-model="value"
          @change="change"></uv-input>
      </view>
      <view class="box1-right">
        <img class="image1" src="../../static/image/签到.png" alt="">

      </view>

    </view>
    <!-- 轮播图 -->
    <view class="box2">
      <uv-swiper :list="list"  indicator indicatorMode="line" circular></uv-swiper>
    </view>
    <!-- 轮播图结束 -->
    <!-- 点击查看 -->
    <view class="box3">
      <img class="box3-img" src="../../static/image/查看.png" alt="">
    </view>
    <!-- 点击查看结束 -->

  </view>


</template>

<script>

export default {
  data() {
    return {
      value: '',
      list: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ]
    }
  },
  methods: {
    change(e) {
      console.log('change', e);
    }
  }
}



</script>

<style>
.box {
  width: 100%;

}

.box1 {
  width: 90%;
  margin: auto;
  justify-content: space-between;
  display: flex;

}

.box1-left {
  width: 85%;

}

.box1-right {
  width: 10%;
  height: 20px;
}

.box1-right .image1 {
  height: 37px;
  width: 100%;
}

/* 轮播图 */
.box2 {
  width: 90%;
  margin: auto;
}
/* 轮播图结束 */
/* 点击查看 */
.box3{
  width: 90%;
  margin-top: 10px;
  margin: auto;
  
}
.box3 .box3-img{
  width: 100%;
  height: 40px;
}
/* 点击查看结束 */
</style>
