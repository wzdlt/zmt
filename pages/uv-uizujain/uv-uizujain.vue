<template>
  <view class="box">
    <uv-popup ref="popup" mode="bottom" >
      <view class="content">
        <!-- 头部 -->
        <view class="content-top">
          <view class="content-top-image">
            <image src="../../static/鞋子.png"></image>
          </view>
          <view class="content-top-text">
            <view class="content-top-text1">
              ￥280
            </view>
            <view class="content-top-text2">
              已选：标准白、41
            </view>
          </view>
        </view>
        <!-- 头部结束 -->
        <view class="content-content">
          <view>颜色</view>
          <view>颜色</view>
          <view>颜色</view>
          <view>颜色</view>
          <view>颜色</view>
          <view class="content-button1">
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="标准白"></uv-button>
            </view>
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="经典黑"></uv-button>
            </view>
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="纯净蓝"></uv-button>
            </view>
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="中国红"></uv-button>
            </view>
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="象牙白/浮云黑"></uv-button>
            </view>
            <view class=" content-button">
              <uv-button type="primary" :plain="true" text="象牙白/复古绿"></uv-button>
            </view>
          </view>
        </view>
      </view>
    </uv-popup>

    <button @click="open">打开</button>

  </view>
</template>
<script>
export default {
  methods: {
    open() {
      this.$refs.popup.open();
    }
  }
}
</script>
<style lang="scss">
.box {

  width: 100%;

  // 开始


  // 结束
  .content-top {
    display: flex;
    margin-top: 20px;
    border: 1px solid red;

    .content-top-image {
      border: 1px solid navy;
      width: 30%;

      image {
        width: 100%;
        height: 100px;
      }
    }

    .content-top-text {
      width: 65%;
      margin: 10px;

      .content-top-text1 {
        margin-top: 10px;
        color: #FC4424;
        font-weight: bold;
      }

      .content-top-text2 {
        color: #CBCBCB;
        margin-top: 10px;
        font-size: 12px;
      }
    }
  }



}
</style>