<template>
  <view class="box">
    <view class="box1">
      <view class="box1-1" @click="goregirect()">
        <view class="box1-1-top">
          <view class="box1-1-top-left">
            <uv-avatar shape="circle" icon="twitte" size="35" fontSize="20" randomBgColor></uv-avatar>
          </view>
          <view class="box1-1-top-center">
            <view class="box1-1-top-center1">奥迪A6 2020款 豪华动感型</view>
            <view class="box1-1-top-center2">车架号:234345362436</view>
          </view>
          <view class="box1-1-top-right">
            <uv-icon name="arrow-right" color="#ccc" size="18"></uv-icon>
          </view>
        </view>
        <view class="box1-1-bottom">
          <view class="box1-1-bottom1">
            <uv-radio-group v-model="radiovalue">
              <uv-radio :customStyle="{margin: '8px'}" v-for="(item, index) in radiolist" :key="index"
                :label="item.name" :name="item.name">
              </uv-radio>
            </uv-radio-group>
          </view>
          <view class="box1-1-bottom2">
            <view>
              <image src="../../static/image/编辑.png" mode=""></image>
            </view>
            <view>编辑</view>
            <view style="margin-left: 20px;">
              <image src="../../static/image/删除.png" mode=""></image>
            </view>
            <view>删除</view>
          </view>
          <view class="box1-1-bottom3"></view>
        </view>
      </view>
      <view class="box1-1" @click="goregirect()">
        <view class="box1-1-top">
          <view class="box1-1-top-left">
            <uv-avatar shape="circle" icon="twitte" size="35" fontSize="20" randomBgColor></uv-avatar>
          </view>
          <view class="box1-1-top-center">
            <view class="box1-1-top-center1">奥迪A6 2020款 豪华动感型</view>
            <view class="box1-1-top-center2">车架号:234345362436</view>
          </view>
          <view class="box1-1-top-right">
            <uv-icon name="arrow-right" color="#ccc" size="18"></uv-icon>
          </view>
        </view>
        <view class="box1-1-bottom">
          <view class="box1-1-bottom1">
            <uv-radio-group v-model="radiovalue">
              <uv-radio :customStyle="{margin: '8px'}" v-for="(item, index) in radiolist" :key="index"
                :label="item.name" :name="item.name">
              </uv-radio>
            </uv-radio-group>
          </view>
          <view class="box1-1-bottom2">
            <view>
              <image src="../../static/image/编辑.png" mode=""></image>
            </view>
            <view>编辑</view>
            <view style="margin-left: 20px;">
              <image src="../../static/image/删除.png" mode=""></image>
            </view>
            <view>删除</view>
          </view>
          <view class="box1-1-bottom3"></view>
        </view>
      </view>
    </view>
    <view class="box2"><button>+ 添加新车辆</button></view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        radiolist: [{
          name: '默认',
          disabled: false
        }],
        radiovalue: '默认'
      }
    },
    methods: {
      goregirect() {
        uni.redirectTo({
          //关闭当前页面，跳转到应用内的某个页面。
          url: '/pages/cardetails/cardetails'
        });
      }

    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    height: 100vh;

    .box1 {
      padding-top: 10px;

      .box1-1 {
        width: 90%;
        margin: 0 auto 10px;
        border-radius: 10px;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;

        .box1-1-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e3e3e3;
          padding-bottom: 15px;

          .box1-1-top-center {
            .box1-1-top-center2 {
              font-size: 16px;
              color: #ccc;
            }
          }
        }

        .box1-1-bottom {
          display: flex;
          justify-content: space-between;
          padding-top: 10px;

          .box1-1-bottom2 {
            margin-top: 7px;
            display: flex;
            justify-content: right;
            width: 80%;

            image {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }

    .box2 {
      position: fixed;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      padding: 10px 0 20px;

      button {
        color: #fff;
        background-color: #fc4424;
        border-radius: 25px;
        width: 90%;
        margin: auto;
        font-size: 14px;
      }
    }
  }
</style>