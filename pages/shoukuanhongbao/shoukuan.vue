<template>
  <view class="box">
    <!-- 收款红包金额 -->
    <view class="box1">
      <view class="box1-text">
        <view class="box1-text1">红包总额</view>
        <view class="box1-text2">1890.00</view>
      </view>
    </view>
    <!-- 收款红包金额结束 -->
    <!-- 收款红包详细 -->
    <view class="box2" v-for="(item, index) in list" :key="index">
      <view class="box2-text">
        <view class="box2-right-top">
          {{ item.text }}
        </view>
        <view class="box2-right-bottom">
          {{ item.time }}
        </view>
      </view>
        <view class="box2-left" >{{ item.price }}</view>
    </view>
    <!-- 收款红包结束 -->
  </view>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        text: "消费",
        time: "2021/09/01 15:11:34",
        price: -100
      }, {
        text: "签到奖励",
        time: "2021/09/01 15:11:34",
        price: +100
      }, {
        text: "浏览商品赠送",
        time: "2021/09/01 15:11:34",
        price: +100
      }, {
        text: "充值余额赠送",
        time: "2021/09/01 15:11:34",
        price: +100
      }
      ],
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
}

.box1 {
  height: 160px;
  border: 1px solid red;
  background-color: #FC4424;

}

.box1-text {
  margin-top: 50px;
}

.box1-text1 {
  color: #FEDDD7;
  text-align: center;
}

.box1-text2 {
  color: #FFFFFF;
  margin-top: 20px;
  font-size: 25px;
  text-align: center;
}
/* 收款详细金额  */
.box2{
  width: 100%;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #c7c5c5;
}
.box2-text{
  width: 80%;
  margin-top: 20px;
}
.box2-left{
font-weight: bold;
  margin-top: 40px;
  color: green;
}
.box2-left :nth-child(1){
  color: red;
}
.box2-right-top{
  margin-bottom: 10px;
  color: #4C4C4C;
  font-weight: bold;
}
.box2-right-bottom{
  color: #A4A4A4;
}
</style>