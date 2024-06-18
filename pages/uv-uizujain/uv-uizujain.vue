<template>
  <view class="box">
    <uv-popup ref="popup" mode="bottom">
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
          <view style="margin-top: 20px;">颜色</view>

          <view class="content-button1">
            <view class=" content-button">
              <view class="content-2">
                <uv-button type="primary" :plain="true" text="标准白"></uv-button>
                <uv-button type="primary" :plain="true" text="经典黑" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="纯净蓝" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="中国红" class="content"></uv-button>
              </view>
              <view class="content-2">
                <uv-button type="primary" :plain="true" text="象牙白/浮云黑"></uv-button>
                <uv-button type="primary" :plain="true" text="象牙白/复古绿" class="content"></uv-button>
              </view>
            </view>
          </view>
          <!-- 尺码 -->
          <view style="margin-top: 20px;">尺码</view>
          <!-- 尺码结束 -->
          <view class="content-button1">
            <view class=" content-button">
              <view class="content-2">
                <uv-button type="primary" :plain="true" text="36"></uv-button>
                <uv-button type="primary" :plain="true" text="37" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="38" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="39" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="40" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="41" class="content"></uv-button>
              </view>
              <view class="content-2">
                <uv-button type="primary" :plain="true" text="42"></uv-button>
                <uv-button type="primary" :plain="true" text="43" class="content"></uv-button>
                <uv-button type="primary" :plain="true" text="44" class="content"></uv-button>
              </view>
            </view>
          </view>
          <!-- 号码 -->
          <!-- 数量 -->
          <view style="margin-top: 20px;" class="number">
            <view> 数量</view>
            <view class="number1">
              <uv-number-box v-model="value" @change="valChange"></uv-number-box>
            </view>
          </view>
          <!-- 数量结束 -->
        </view>
        <!-- djsid  -->
        <view class="queding">确定</view>
      </view>
    </uv-popup>

    <button @click="open">打开</button>

  </view>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  },
  methods: {
    open() {
      this.$refs.popup.open();
    },
    valChange(e) {
      console.log('当前值为: ' + e.value)
    }
  }
}
</script>
<style lang="scss">
.box {

  width: 100%;

  .queding {
    text-align: center;
    line-height: 40px;
    height: 40px;
    margin-top: 20px;
    border-radius: 500px;
    background-color: #C1A766;
  }

  // 开始、
  .number {
    display: flex;
    justify-content: space-between;

    .number1 {
      width: 30%;
      height: 30px;
      align-items: center;
      display: flex;
    }
  }

  .content-content {
    width: 100%;

    .content-button1 {
      width: 100%;

      .content-2 {
        margin-top: 10px;
        display: flex;

        .content {
          margin-left: 25px;
        }
      }
    }
  }

  // 结束
  .content-top {
    display: flex;
    margin-top: 20px;


    .content-top-image {

      width: 30%;

      image {
        width: 100%;
        height: 100px;
        border-radius: 10px;
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
