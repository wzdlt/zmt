<template>
  <view class="receiving">
    <!-- 头部 -->
    <view class="top" v-for="item in 2" :key="item">
      <view class="one">王小米 15566998898</view>
      <view class="two">山东省临沂市河东区芝麻墩街道沂河路与海关路交汇德桂园5号楼1单元603</view>
      <view class="three">
        <view class="left">
          <uv-checkbox-group v-model="checkboxValue">
            <uv-checkbox shape="circle" activeColor="red" name="apple" label="默认地址"></uv-checkbox>
          </uv-checkbox-group>
        </view>
        <view class="right">
          <view>
            <image src="../../static/image/编辑.png" mode=""></image><text>编辑</text>
          </view>
          <view>
            <image src="../../static/image/删除.png" mode=""></image><text>删除</text>
          </view>
        </view>
      </view>

    </view>
    <!-- 底部 -->
    <view class="btn">
      <button>+ 添加收货地址</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        checkboxValue: ['apple']
      }
    }
  }
</script>

<style lang="scss" scoped>
  page {
    background-color: #f5f5f5;
  }

  .receiving {
    width: 100%;

    .top {
      width: 90%;
      margin: auto;
      margin-top: 5%;
      background-color: #ffffff;
      padding: 3%;
      border-radius: 10px;

      .one {
        font-size: 1rem;
      }

      .two {
        margin-top: 2%;
        font-size: 0.8rem;
        color: #cdcdcd;
        padding-bottom: 5%;
        border-bottom: 1px solid #f5f5f5;
      }

      .three {
        margin-top: 3%;
        display: flex;
        justify-content: space-between;

        .right {
          display: flex;
          align-items: center;
          width: 35%;
          justify-content: space-between;
          border: 1px solid red;

          view:nth-child(1) {
            width: 50%;
            border: 1px solid red;
            display: flex;
            align-items: center;
            font-size: 0.8rem;

            image {
              width: 30rpx;
              height: 30rpx;
            }

            text {
              margin-left: 5%;
            }
          }

          view:nth-child(2) {
            display: flex;
            align-items: center;
            font-size: 0.8rem;

            image {
              margin-right: 5%;
              width: 30rpx;
              height: 30rpx;
            }
          }
        }
      }
    }

    .btn {
      width: 100%;
      background-color: #ffffff;
      position: absolute;
      bottom: 0;
      height: 30px;
      padding-top: 3%;
      padding-bottom: 3%;

      button {
        border-radius: 30px;
        color: #ffffff;
        width: 90%;
        margin: auto;
        height: 30px;
        line-height: 30px;
        font-size: 0.8rem;
        background-color: #fc4424;
      }
    }
  }
</style>