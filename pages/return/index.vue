<template>
  <view class="header">
    <view class="left" @click="switchToTab">
      <!-- &lt; -->
    </view>

    <view class="center">退货详情</view>
  </view>

  <view class="body">
    <view class="b-top">退回商品</view>
    <view class="b-center">
      <view class="item">
        <view class="i-ico">
          <image src="../../static/image/icon-19.png" alt=""></image>
        </view>
        <view class="i-text">提交申请</view>
      </view>
      <view class="item">
        <view class="i-ico">
          <image src="../../static/image/icon-19.png" alt=""></image>
        </view>
        <view class="i-text">商家审核</view>
      </view>
      <view class="item">
        <view class="i-ico">
          <image src="../../static/image/icon-19.png" alt=""></image>
        </view>
        <view class="i-text">退回商品</view>
      </view>
      <view class="item">
        <view class="i-ico">
          <image src="../../static/image/icon-20.png" alt=""></image>
        </view>
        <view class="i-text">退款完成</view>
      </view>
      <hr class="one" />
      <hr class="two" />
    </view>
  </view>

  <view class="body-box">
    <view class="b-top">
      <view class="t-top">正茂通商户</view>
      <view class="t-center">
        <view class="c-left">
          <image src="../../static/image/shoes.png" alt=""></image>
        </view>
        <view class="c-right">
          <view class="r-top">男运动鞋秋季男鞋青少年正品透气夏网面减震跑步休闲旅游鞋</view>
          <view class="r-center">标准白;42</view>
          <view class="r-bottom">
            <view class="b-left">￥</view>
            <view class="b-center">890.00</view>
            <view class="b-right">×1</view>
          </view>
        </view>
      </view>
      <view class="t-bottom">
        <view class="b-top">
          <view class="item">
            <view class="i-left">优惠金额</view>
            <view class="i-right">￥890.00</view>
          </view>
          <view class="item">
            <view class="i-left">运费</view>
            <view class="i-right">￥0.00</view>
          </view>
        </view>
        <view class="b-center">
          <view class="ctr-left">实付</view>
          <view class="ctr-right">￥890.00</view>
        </view>
        <view class="b-bottom">
          <view class="b-left">备注：</view>
          <view class="b-rigth">请尽快发货，发顺丰</view>
        </view>
      </view>
    </view>

    <view class="b-center-foot">
      <view class="c-top">订单信息</view>
      <view class="c-text">
        <view class="item">
          <view class="i-left">订单编号</view>
          <view class="i-right">2021987616631</view>
        </view>
        <view class="item">
          <view class="i-left">下单时间</view>
          <view class="i-right">2021-11-12 15:58:32</view>
        </view>
        <view class="item">
          <view class="i-left">支付方式</view>
          <view class="i-right">微信支付</view>
        </view>
      </view>
    </view>
  </view>

  <view class="button">
    <button @click="toggleAbsoluteVisibility">填写物流编号</button>
  </view>

  <view class="absolute" v-if="isAbsoluteVisible">
    <view class="text">
      <view class="a-top">
        <view class="t-left">填写物流单号</view>
        <view class="t-right" @click="toggleAbsoluteVisibility">×</view>
      </view>
      <view class="a-center">
        <input class="uni-input" type="number" placeholder="请输入物流单号" />
      </view>
      <view class="a-bottom">
        <button @click="toggleAbsoluteVisibility">确定</button>
      </view>
    </view>
  </view>
</template>

<script setup>
const switchToTab = () => {
  uni.navigateBack({
    url: '/pages/refunf/index', // 请替换为你的tabBar页面的实际路径
  });
};

import { ref } from 'vue';

// 定义一个布尔型的响应式变量来控制元素的显示状态
const isAbsoluteVisible = ref(false);

// 点击击按钮时切换显示状态的方法
const toggleAbsoluteVisibility = () => {
  isAbsoluteVisible.value = !isAbsoluteVisible.value;
};
</script>


<style lang="scss">
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  .left {
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }

  .center {
    flex: 1;
    text-align: center;
    line-height: 50px;
  }
}

.body {
  margin-top: 40px;
  width: 100%;
  height: 160px;
  color: #fff;
  background-color: #fc4424;

  .b-top {
    width: 90%;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
  }

  .b-center {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    position: relative;

    .one {
      width: 52%;
      position: absolute;
      top: 26px;
      left: 10%;
      background-color: #fff;
    }

    .two {
      width: 24%;
      position: absolute;
      top: 26px;
      left: 64%;
      background-color: #fff;
    }

    .item {
      width: 20%;

      .i-ico {
        margin: 16px auto;
        width: 10px;
        height: 10px;

        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

.body-box {
  padding: 20px 0;
  width: 100%;
  background-color: #f5f5f5;

  .b-top {
    padding: 6px 0;
    width: 90%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 16px;

    .t-top {
      width: 90%;
      height: 40px;
      line-height: 40px;
      border: 1px solid #fbfbfc;
      margin: 0 auto;
    }

    .t-center {
      display: flex;
      justify-content: space-between;
      width: 90%;
      margin: 20px auto;

      .c-left {
        width: 30%;

        image {
          width: 100px;
          height: 100px;
        }
      }

      .c-right {
        width: 66%;

        .r-top {
          width: 100%;
          font-size: 14px;
        }

        .r-center {
          width: 100%;
          margin: 10px 0;
          color: #9d9d9d;
          font-size: 12px;
        }

        .r-bottom {
          width: 100%;
          height: 30px;
          display: flex;

          .b-left {
            width: 6%;
            height: 30px;
            line-height: 40px;
            font-size: 14px;
          }

          .b-center {
            width: 30%;
            height: 30px;
            line-height: 36px;
            font-size: 20px;
          }

          .b-right {
            width: 10%;
            height: 30px;
            line-height: 40px;
            font-size: 14px;
            color: #9d9d9d;
          }
        }
      }
    }

    .t-bottom {
      width: 90%;
      margin: 0 auto;

      .b-top {
        width: 100%;
        margin: 0 auto;

        .item {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;
          width: 100%;

          .i-left {
            width: 70%;
            color: #6a6a6a;
          }

          .i-right {
            text-align: right;
            width: 30%;
            color: #3e3e3e;
          }
        }
      }

      .b-center {
        width: 100%;
        display: flex;
        justify-content: right;

        .ctr-left {
          font-weight: 600;
        }

        .ctr-right {
          margin-left: 10px;
          color: #fc4424;
          font-weight: 600;
        }
      }

      .b-bottom {
        margin: 30px 0;
        padding: 16px 10px;
        width: 94%;
        background-color: #f5f5f5;
        display: flex;

        .b-left {
          width: 16%;
          color: #7a7a7a;
        }
      }
    }
  }

  .b-center-foot {
    padding: 10px 0;
    width: 90%;
    margin: 20px auto;
    border-radius: 10px;
    background-color: #fff;

    .c-top {
      width: 90%;
      height: 50px;
      line-height: 50px;
      margin: 0 auto;
      font-weight: 600;
    }

    .c-text {
      width: 90%;
      margin: 0 auto;

      .item {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 20px auto;

        .i-left {
          color: #666666;
        }

        .i-right {
          color: #333333;
        }
      }
    }
  }
}

.button {
  padding: 30px 0;
  width: 90%;
  margin: 0 auto;

  button {
    width: 30%;
    font-size: 12px;
    background-color: #fc4424;
    border-radius: 50em;
    color: #fff;
    margin-left: 70%;
  }
}

.absolute {
  position: absolute;
  top: 10px;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);

  .text {
    padding-bottom: 10px;
    width: 70%;
    background-color: #fff;
    margin: 30vh auto;

    .a-top {
      width: 100%;
      height: 60px;
      display: flex;

      .t-left {
        width: 90%;
        height: 60px;
        line-height: 60px;
        font-weight: 600;
        text-align: center;
      }

      .t-right {
        width: 10%;
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        color: #c4c4c4;
      }
    }

    .a-center {
      width: 90%;
      height: 40px;
      margin: 30px auto;
      border: 1px solid #e5e5e5;
      border-radius: 50em;
      text-align: center;

      .uni-input {
        width: 100%;
        height: 100%;
        line-height: 40px;
      }
    }

    .a-bottom {
      width: 90%;
      margin: 30px auto;

      button {
        background-color: #f7433d;
        color: #fff;
        border-radius: 50em;
      }
    }
  }
}
</style>