<template>
  <view class="bs-details">
    <!-- banner图开始 -->
    <image src="../../static/青柠养车.png" mode="aspectFill"></image>
    <!-- banner图结束 -->
    <!-- 卡片开始 -->
    <view class="card-box">
      <view class="card">
        <view class="card-top">
          <view class="card-top-left">青柠养车（香港路店）</view>
          <view class="card-top-right">
            <uv-icon name="map" color="#fc4424" size="20"></uv-icon>
            <text>1.2km</text>
          </view>
        </view>
        <view class="card-xing">
          <uv-rate
            :count="count"
            v-model="value"
            active-color="#ffb800"
          ></uv-rate>
          <text>5.0</text>
        </view>
        <view class="card-neirong">
          <view
            v-for="(item, index) in cardList"
            :key="index"
            class="neirong-content"
          >
            {{ item.title }}
          </view>
        </view>
        <view class="dizhi">
          山东省临沂市河东区芝麻墩街道香港路与长安路交汇处路北50米青柠养车
        </view>
        <view class="phone">
          <uv-icon name="phone-fill" color="#fc4424" size="20"></uv-icon>
          <text>18253965759</text>
        </view>
      </view>
      <!-- <view class="card-height"></view> -->
      <!-- 卡片结束 -->
      <!-- 内容开始 -->
      <view class="content">
        <view class="content-top">
          <uv-tabs :list="contentList" @click="click"></uv-tabs>
        </view>
        <view class="content-neirong">
          <business></business>
          <business></business>
          <business></business>
          <business></business>
          <business></business>
          <business></business>
        </view>
      </view>
      <!-- 内容结束 -->
    </view>
  </view>
</template>

<script>
import business from "../../compoents/business";
export default {
  components: {
    business,
  },
  data() {
    return {
      // 评分
      count: 5,
      value: 5,
      // 卡片内容循环
      cardList: [
        {
          id: 1,
          title: "洗车",
        },
        {
          id: 2,
          title: "美容",
        },
        {
          id: 3,
          title: "维修",
        },
        {
          id: 4,
          title: "轮胎",
        },
        {
          id: 5,
          title: "保养",
        },
        {
          id: 6,
          title: "改装",
        },
      ],
      contentList: [
        {
          name: "推荐",
        },
        {
          name: "小保养",
        },
        {
          name: "保养搭配推荐",
        },
        {
          name: "制动系统",
        },
        {
          name: "冷却系统",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
page {
  background-color: #f5f5f5;
}

image {
  width: 100%;
}

.bs-details {
  .card-box {
    width: 94%;
    margin: auto;
    .card {
      position: relative;
      background-color: #fff;
      top: -20rpx;
      border-radius: 20rpx;
      padding: 20rpx;

      .card-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .card-top-left {
          font-weight: bold;
        }

        .card-top-right {
          display: flex;
          color: #fc4221;
        }
      }

      .card-xing {
        display: flex;
        color: #ffb800;
        margin-top: 20rpx;
      }

      .card-neirong {
        display: flex;
        margin-top: 20rpx;

        .neirong-content {
          color: #fc755d;
          background-color: #ffece9;
          // border: 1px solid red;
          border-radius: 4px;
          margin-right: 10rpx;
          width: 80rpx;
          height: 40rpx;
          line-height: 40rpx;
          text-align: center;
          font-size: 25rpx;
        }
      }

      .dizhi {
        // border: 1px solid red;
        margin-top: 20rpx;
        color: #858585;
      }

      .phone {
        display: flex;
        align-items: center;
        color: #fc4424;
        margin-top: 20rpx;
      }
    }
  }
  // 卡片结束
  // 内容开始
  .content {
    .content-neirong{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  // 内容结束
}
</style>