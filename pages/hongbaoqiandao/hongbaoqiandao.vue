<template>
  <view id="app">
    <view class="box1">
      <view class="box1-text"><text class="box1-text1">签到</text>送红包</view>
    </view>
    <view class="sign">

      <view v-if="isCheckInSuccess" class="checkin-success">
        <view class="box">
          <view class="x">
            <button @tap="hideCheckInSuccess">x</button>
          </view>
          <view class="b-img">
            <image src="../../static/image/success.png" alt="" ></image>
          </view>
          <view class="b-text">
            <view class="p">恭喜您签到成功</view>
            <view class="p">获得2红包</view>
          </view>
          <view class="b-button">
            <button class="btn-left">立即使用</button>
            <button class="btn-right" @tap="hideCheckInSuccess">关闭</button>
          </view>
        </view>
      </view>

      <view class="s-center">
        <view class="c-item" v-for="(day, index) in days" :key="index">
          <view class="p">{{ `第${index + 1}天` }}</view>
          <view class="i-box" :class="{ 'bg-color': index === 0 }">
            <image :src="imageSrc" alt="" ></image>
          </view>
        </view>
      </view>
      <view class="s-top">

        <view class="t-right" @tap="checkIn">立即签到</view>
      </view>
      <view class="s-text" v-for="(task, index) in tasks" :key="index">
        <view class="t-item">
          <view class="i-left">
            <view class="p">{{ task.description }} ({{ index + 1 }}/{{ tasks.length }})</view>
            <view>+{{ task.reward }}红包</view>
          </view>
          <view class="i-right">{{ task.action }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

// 定义签到成功提示的显示状态，默认隐藏
const isCheckInSuccess = ref(false);

// 点击击签到按钮的处理方法
const checkIn = () => {
  // 这里可以添加签到逻辑，例如API调用
  // 假设签到成功后设置isCheckInSuccess为true
  isCheckInSuccess.value = true;
};

// 关闭签到成功提示的方法
const hideCheckInSuccess = () => {
  isCheckInSuccess.value = false;
};

const days = ref(7); // 这里表示有7天
const imageSrc = ref("../../static/image/ico-8.png"); // 图片路径

const tasks = ref([{
  description: '浏览商品列表15秒',
  reward: 5,
  action: '去浏览'
},
{
  description: '充值领取红包',
  reward: 100,
  action: '去充值'
},
{
  description: '购物领取红包',
  reward: 15,
  action: '去购买'
},
]);
</script>

<style lang="scss">
// .box {


// }
#app {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #f5f5f5;
  width: 100%;
  background-color: #FF7121;
  border-radius: 0px 0px 20% 20%;
  height: 150px;

  .box1 {
    width: 90%;

    .box1-text {
      color: #FAED84;
      font-size: 25px;
      margin-top: 30px;
      padding: 0px 20px;

    }

    .box1-text1 {
      color: #FFFFFF;
      font-size: 25px;
    }
  }

  .sign {

    padding: 10px 0;
    width: 94%;
    margin: auto;
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 10px;

    .s-top {
      padding: 10px 0;
      width: 90%;

      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f6f7;
      font-size: 14px;
      height: 30px;



      .t-right {
        width: 80%;
        margin: auto;
        height: 100%;

        text-align: center;
        border-radius: 16px;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        background-color: #FF871B;
      }
    }

    .checkin-success {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background-color: rgba(225, 225, 225, 0.3);

      .box {
        padding: 10px 0 30px;
        margin: 30vh auto;
        width: 60%;
        height: 40vh;
        background-color: #fff;

        .x {
          margin: 10px 0;
          width: 100%;
          background-color: #fff;

          button {
            margin-left: 190px;
            width: 24px;
            height: 24px;
            background-color: #fff;
            border: none !important;
            text-indent: -4px;
            line-height: 20px;
          }
        }

        .b-img {
          width: 50%;
          height: 12px;
          margin: 0 auto;

          image {
            width: 100%;
            height: 10px;
          }
        }

        .b-text {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .p {
            margin: 10px 0;
            text-align: center;
            width: 100%;
          }
        }

        .b-button {
          display: flex;
          width: 90%;
          margin: 0 auto;

          button {
            font-size: 12px;
            line-height: 40px;
            width: 46%;
            height: 40px;
            border-radius: 50px;
          }

          .btn-left {
            background-color: #fc4424;
            color: #fff;
          }

          .btn-right {
            border: 1px solid #fc4424;
            color: #fc4424;
            background-color: #fff;
          }
        }
      }
    }

    .s-center {
      padding: 10px 0;
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f5f6f7;

      .c-item {
        width: 11.5%;
        font-size: 12px;
        text-align: center;

        .i-box {
          border-radius: 10px;
          margin: 10px 0;
          width: 100%;
          height: 34px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f3f3f3;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .bg-color {
          background-color: #ffdbbb;
        }
      }
    }
  }

  .s-text {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;

    .t-item {
      margin: 6px 0;
      padding: 20px;
      width: 100%;
      background-color: #fafafa;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;

      .i-left {
        width: 70%;
        height: 30px;
        display: flex;
        flex-wrap: wrap;

        .p {
          width: 100%;
          font-size: 14px;
        }

        .span {
          width: 100%;
          color: #fb4f31;
          font-size: 12px;
        }
      }

      .i-right {
        width: 24%;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fb6045;
        border: 2px solid #fb6045;
        border-radius: 50px;
        font-size: 14px;
      }
    }
  }
}
</style>
