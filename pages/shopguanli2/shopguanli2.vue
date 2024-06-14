<template>
  <view class="box">
    <view class="box1">
      <uv-sticky bgColor="#fff">
        <uv-tabs :list="list" :scrollable="false" lineColor="#fc4424" :activeStyle="{ color: '#fc4424' }"
          :inactiveStyle="{ color: '#ccc' }">
        </uv-tabs>
      </uv-sticky>
    </view>

    <view class="box2">
      <view class="box2-1">

        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-center">¥120.00</view>
            <view class="box2-1-cent2-box">
              <view class="box2-1-center2-bottom"><text>¥</text><text>180.00</text></view>
              <view class="box2-1-cent2-bottom">月售180</view>
            </view>
          </view>

        </view>
        <!-- 关联 -->
        <view class="right-box">
           取消关联
        </view>
      </view>
      <view class="box2-1">

        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-center">¥120.00</view>
            <view class="box2-1-cent2-box">
              <view class="box2-1-center2-bottom"><text>¥</text><text>180.00</text></view>
              <view class="box2-1-cent2-bottom">月售180</view>
            </view>

          </view>
        </view>
        <!-- 关联 -->
        <view class="right-box">
           取消关联
        </view>
        <!-- 结束 -->
      </view>
    </view>
    <view class="box3">
      <view>
        <image src="../../static/image/我的.png"></image>
      </view>
      <view>核销</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        name: '已关联',
      }, {
        name: '未关联',
      }]
    };
  }
}
</script>

<style lang="scss">
.box {
  background-color: #f5f5f5;
  height: 100vh;

  .box2 {
    .box2-1 {
      background-color: #fff;
      width: 90%;
      margin: 10px auto;
      padding: 10px;
      border-radius: 10px;
      box-sizing: border-box;

      .box2-1-top {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 15px;

        .box2-1-top1 {
          color: #ccc;
          font-size: 14px;
        }

        .box2-1-top2 {
          color: #fc573b;
          font-size: 15px;
        }
      }
      .right-box{
        width: 25%;
        height: 30px;
        line-height: 30px;
        border: 1px solid #A3A3AC;
        color: #A3A3AC;
        text-align: center;
        border-radius: 15px;
        margin-left: 75%;
      }
     

      .box2-1-center {
        display: flex;
        margin-top: 10px;
        justify-content: space-between;

        padding-bottom: 10px;

        .box2-1-center1 {
          width: 28%;
          height: 90px;
          border-radius: 10px;
          overflow: hidden;

          image {
            width: 100%;
            height: 100%;
          }
        }

        .box2-1-center2 {
          width: 68%;

          .box2-1-center2-top {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .box2-1-center2-center {
            color: #FC5437;
            font-size: 16px;
            margin: 10px 0 20px;
          }

          .box2-1-cent2-box {
            display: flex;
            justify-content: space-between;

            .box2-1-center2-bottom {
              text {
                font-size: 12px;
                text-decoration: line-through;
                color: #A3A3A3;
              }
            }

            .box2-1-cent2-bottom {
              font-size: 12px;
              color: #A3A3A3;
            }
          }

        }
      }

    }
  }

  .box3 {
    border: 1px solid #ccc;
    color: #ccc;
    width: 11%;
    position: fixed;
    right: 20px;
    bottom: 80px;
    border-radius: 50%;
    text-align: center;
    padding: 5px;
    background-color: #fff;
    font-size: 12px;

    image {
      width: 20px;
      height: 20px;
    }
  }
}
</style>