<template>
  <view class="box">
    <view class="box1-img">
      <img src="../../static/image/话费.png" alt="">
    </view>
    <!-- 话费图片 -->
    <!-- 输入手机号 -->
    <view class="box2">
      <uv-input placeholder="请输入手机号" style="color: white;" v-model="value" @change="change"></uv-input>
    </view>
    <view class="box3">
      <view class="box3-content" v-for="(item, index) in list" :key="index">
        <view class="box3-content-top">{{ item.text1 }}</view>
        <view class="box3-content-bottom">{{ item.text2 }}</view>
      </view>
    </view>

  </view>

</template>
<script>
export default {
  data() {
    return {
      list: [{
        text1: '30元',
        text2: "送30元红包"
      }, {
        text1: '50元',
        text2: "送50元红包"
      }, {
        text1: '50元',
        text2: "送50元红包"
      }, {
        text1: '100元',
        text2: "送100元红包"
      }]
    }
  }
}
</script>
<style scoped>
/* 话费充值截图 */
.box {
  width: 100%;
  height: 625px;
  background-color: #F5F5F5;
}

.box1-img {
  width: 95%;
  margin: auto;
}

.box1-img img {
  width: 100%;
  border-radius: 10px;
}

/* input 输入电话号码框 */
.box2 {
  width: 95%;
  margin: auto;
  margin-top: 15px;
  background-color: #FFFFFF;
}

/* 充值余额 */
.box3 {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}

.box3-content {
  width: 45%;
  margin: auto;
  margin-top: 20px;
  background-color: #FFFFFF;  
  text-align: center;
  border-radius: 5px;
  height: 60px;

}
.box3-content-top{
  margin-top: 10px;
}
.box3-content-bottom{
  color: red;
  font-size: 10px;
  
}
</style>