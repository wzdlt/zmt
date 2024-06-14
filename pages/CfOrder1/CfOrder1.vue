<template>
  <view class="cforder">
    <view class="order-box">
      <view class="order">
        <view class="order-left">
          <image src="../../static/image/美孚.png"></image>
        </view>
        <view class="order-right">
          <view class="right-top">
            美孚(Mobil)金装美孚1号全合...
          </view>
          <view class="right-center">
            全合成：4L
          </view>
          <view class="right-bottom">
            <text class="price">￥439.00</text>
            <text class="num">x1</text>
          </view>
        </view>
      </view>
    </view>
    <view class="cforder-top">
      <view class="work">
        <view class="work-left">工时费</view>
        <view class="work-right">
          ￥{{ list.price }}
          <text>选择抵扣券</text>
          <uv-icon color="#c8c8c8" size="14" name="arrow-right"></uv-icon>
        </view>
      </view>
      <view class="payprice">
        <view class="payprice-left"> 实付金额 </view>
        <view class="payprice-right">
          ￥{{
            list1.price * list1.num +
            list.price -
            list.dikou
          }}
        </view>
      </view>
      <view class="notes">
        <view class="notes-left"> 备注 </view>
        <view class="notes-right">
          <uv-input placeholder="请填写备注" border="none" customStyle="width:200rpx;"></uv-input>
        </view>
      </view>
    </view>
    <view class="cforder-center">
      <uv-radio-group v-model="radiovalue" placement="column" iconPlacement="right" iconColor="#fff"
        activeColor="#fc4626">
        <view class="flex">
          <image src="/static/微信.png"></image><uv-radio name="微信支付" label="微信支付"></uv-radio>
        </view>
        <view class="flex">
          <image src="/static/支付宝.png"></image><uv-radio name="支付宝" label="支付宝"></uv-radio>
        </view>
        <view class="flex">
          <image src="/static/余额.png"></image>
          <uv-radio name="余额" label="余额"></uv-radio>
        </view>
      </uv-radio-group>
    </view>
    <view class="cforder-bottom">
      <view class="bottom-left">
        <text class="fontcolor">合计：</text>￥<text class="price">530</text>.00
      </view>
      <view class="bottom-right">
        <button class="btn">立即支付</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      radiovalue: "微信支付",
      list: {
        price: 100,
        dikou: 0
      },
      list1: {
        img: "../static/image/润滑油1.jpg",
        title: "美孚（Mobil）金装美孚1号 全合成机油",
        title1: "全合成; 4L",
        price: 439.0,
        num: 1,
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}

.cforder {
  background-color: #f5f5f5;
  margin-top: 20rpx;
  border: 1px solid #f5f5f5;

  // border: 1px solid red;
  // 头部
  .order-box {

    // border: 1px solid red;
    // 头部
    .order {
      width: 92%;
      margin: auto;
      padding-top: 2%;
      display: flex;
      justify-content: space-between;
      margin-top: 20rpx;
      background-color: #ffffff;
      border-bottom: 1px solid #fafafa;

      .order-left {
        width: 30%;

        image {
          width: 100%;
          height: 200rpx;
        }
      }

      .order-right {
        width: 68%;
        position: relative;
        padding: 10rpx;

        .right-top {
          font-size: 0.9rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .right-center {
          margin-top: 20rpx;
          color: #b6b6b6;
          font-size: 26rpx;
        }

        .right-bottom {
          position: absolute;
          bottom: 5rpx;
          color: #fc492a;

          .price {
            font-size: 1rem;
          }

          .num {

            margin-left: 2%;
            color: #b6b6b6;
            font-size: 26rpx;
          }
        }
      }
    }
  }

  .cforder-top {
    width: 92%;
    margin: auto;
    border-bottom-left-radius: 20rpx;
    border-bottom-right-radius: 20rpx;
    overflow: hidden;
    background-color: #fff;

    .work {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20rpx;
      color: #666666;
      margin-top: 20rpx;

      .work-right {
        display: flex;
        align-items: center;

        text {
          padding-left: 20rpx;
          padding-right: 20rpx;
          color: #fc5e43;
        }
      }

      image {
        height: 40rpx;
        width: 40rpx;
      }
    }

    .payprice {
      display: flex;
      justify-content: space-between;
      padding: 20rpx;
      color: #666666;

      .payprice-right {
        color: #333333;
      }
    }

    .notes {
      display: flex;
      justify-content: space-between;
      padding: 20rpx;
      color: #666666;
    }
  }

  .cforder-center {
    // display: flex;
    width: 92%;
    margin: auto;
    margin-top: 20rpx;
    // margin-bottom: 200rpx;
    border-radius: 20rpx;
    overflow: hidden;

    .flex {
      display: flex;
      // justify-content: space-between;
      background-color: #fff;
      padding: 20rpx;

      // border: 1px solid red;
      .uv-radio {
        width: 90%;
        margin: auto;
      }
    }

    image {
      width: 60rpx;
      height: 60rpx;
    }
  }

  .cforder-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    // padding: 10rpx;
    background-color: #fff;
    // margin-top: 140rpx;
    // height: 100rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .bottom-left {
      color: #fc3d1b;

      .fontcolor {
        color: #3a3a3a;
      }

      .price {
        font-size: 40rpx;
      }
    }

    .bottom-right {
      .btn {
        background-color: #fc4424;
        color: #fff;
        width: 250rpx;
        margin-right: 40rpx;
        border-radius: 50px;
      }
    }
  }
}
</style>
