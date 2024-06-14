<template>
  <view class="box">
    <view class="box1">
      <uv-sticky bgColor="#fff">
        <uv-tabs :list="list" :scrollable="false" lineColor="#fc4424" :activeStyle="{color:'#fc4424'}"
          :inactiveStyle="{color:'#ccc'}">
        </uv-tabs>
      </uv-sticky>
    </view>

    <view class="box2">
      <view class="box2-1">
        <!-- <view class="box2-1-top">
          <view class="box2-1-top1">订单编号:983719387471</view>
          <view class="box2-1-top2">待核销</view>
        </view> -->
        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-bottom"><text>¥</text>890.00 <text style="color: #ccc;"></text></view>
            <view class="box2-1-center2-center">
              <view style="text-decoration: line-through;">￥180.00</view>
              <view>月销180</view>
            </view>
          </view>
        </view>
        <!-- <view class="box2-1-bottom">
          <view class="box2-1-bottom1">共1件商品</view>
          <view class="box2-1-bottom1">合计</view>
          <view class="box2-1-bottom3">￥890.00</view>
        </view> -->
      </view>
      <view class="box2-1">
        <!-- <view class="box2-1-top">
          <view class="box2-1-top1">订单编号:983719387471</view>
          <view class="box2-1-top2">待核销</view>
        </view> -->
        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-bottom"><text>¥</text>890.00 <text style="color: #ccc;"></text></view>
            <view class="box2-1-center2-center">
              <view style="text-decoration: line-through;">￥180.00</view>
              <view>月销180</view>
            </view>
          </view>
        </view>
        <!-- <view class="box2-1-bottom">
          <view class="box2-1-bottom1">共1件商品</view>
          <view class="box2-1-bottom1">合计</view>
          <view class="box2-1-bottom3">￥890.00</view>
        </view> -->
      </view>
      <view class="box2-1">
        <!-- <view class="box2-1-top">
          <view class="box2-1-top1">订单编号:983719387471</view>
          <view class="box2-1-top2">待核销</view>
        </view> -->
        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-bottom"><text>¥</text>890.00 <text style="color: #ccc;"></text></view>
            <view class="box2-1-center2-center">
              <view style="text-decoration: line-through;">￥180.00</view>
              <view>月销180</view>
            </view>
          </view>
        </view>
        <!-- <view class="box2-1-bottom">
          <view class="box2-1-bottom1">共1件商品</view>
          <view class="box2-1-bottom1">合计</view>
          <view class="box2-1-bottom3">￥890.00</view>
        </view> -->
      </view>
      <view class="box2-1">
        <!-- <view class="box2-1-top">
          <view class="box2-1-top1">订单编号:983719387471</view>
          <view class="box2-1-top2">待核销</view>
        </view> -->
        <view class="box2-1-center">
          <view class="box2-1-center1">
            <image src="../../static/人物.png"></image>
          </view>
          <view class="box2-1-center2">
            <view class="box2-1-center2-top">男运动鞋秋季男鞋青少年正品透明白</view>
            <view class="box2-1-center2-bottom"><text>¥</text>890.00 <text style="color: #ccc;"></text></view>
            <view class="box2-1-center2-center">
              <view style="text-decoration: line-through;">￥180.00</view>
              <view>月销180</view>
            </view>
          </view>
        </view>
        <!-- <view class="box2-1-bottom">
          <view class="box2-1-bottom1">共1件商品</view>
          <view class="box2-1-bottom1">合计</view>
          <view class="box2-1-bottom3">￥890.00</view>
        </view> -->
      </view>
    </view>
    <!-- <view class="box3">
      <view><image src="../../static/image/我的.png"></image></view>
      <view>核销</view>
    </view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          name: '全部',
        }, {
          name: '出售中',
        }, {
          name: '已售完',
        }, {
          name: '仓库中',
        }, {
          name: '已下架',
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

        .box2-1-center {
          display: flex;
          justify-content: space-between;

          .box2-1-center1 {
            width: 32%;
            height: 100px;
            border-radius: 10px;
            overflow: hidden;

            image {
              width: 100%;
              height: 100%;
            }
          }

          .box2-1-center2 {
            width: 64%;

            .box2-1-center2-top {
              overflow: hidden; //超出盒子宽度内容，便溢出隐藏  
              text-overflow: ellipsis; //用...省略号显示
              display: -webkit-box; //将对象作为弹性伸缩盒子模型显示
              -webkit-box-orient: vertical; //从上到下垂直排列子元素
              -webkit-line-clamp: 2;
              margin-bottom: 10px;
            }

            .box2-1-center2-center {
              color: #ccc;
              font-size: 14px;
              margin: 10px 0 0;
              display: flex;
              justify-content: space-between;
            }

            .box2-1-center2-bottom {
              color: #fc4424;

              text {
                font-size: 12px;
              }
            }
          }
        }

        .box2-1-bottom {
          display: flex;
          justify-content: right;
          margin-top: 15px;
          line-height: 25px;

          .box2-1-bottom1 {
            color: #ccc;
            font-size: 14px;
            margin-right: 15px;
          }

          .box2-1-bottom3 {
            color: #fc4424;
            font-size: 18px;
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