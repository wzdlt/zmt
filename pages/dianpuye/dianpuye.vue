<template>
  <view class="box">
    <view class="box1">
      <image src="../../static/电脑.png" mode=""></image>
      <view class="box2">
        <view class="box2-1">
          <image src="../../static/养车.png" mode=""></image>
        </view>
        <view class="box2-2">
          <view class="box2-21">
            正茂通商户
            <text
              style="background-color: #fc4424;padding: 2px 5px;color: #fff;font-size: 14px;border-radius: 5px;">官方自营</text>
          </view>
          <view class="box2-22">34人关注</view>
        </view>
        <view class="box2-3">
          <text class="box2-31">+关注</text>
        </view>
      </view>
    </view>

    <view class="box4">
      <view class="box4-text" v-for="(item, index) in list1" :key="index">
        <image :src="item.imgage" mode=""></image>
        <view class="box4-text-bottom">
          <view class="box4-title">
            <text class="box4-text1">{{ item.text1 }}</text> {{ item.text }}
          </view>
          <view class="box4-content">
            <view class="box4-content1">送红包</view>
            <view class="box4-content2">{{ item.price2 }}</view>
          </view>
          <view class="box4-price"> {{ item.price }}</view>
          <view class="box4-text2">
            <view class="box4-text2-left">128.00</view>
            <view class="box4-text2-right">月售180</view>
          </view>
          <view class="box4-text3">
            <view class="box4-text3-left">
              <image src="../../static/image/邀请.png" mode=""></image>
            </view>
            <view class="box4-text3-right">邀请新人参与抢购再优惠15%</view>
          </view>
        </view>
      </view>
    </view>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        list1: [{
          id: 1,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }, {
          id: 2,
          imgage: "../../static/image/商品1.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }, {
          id: 3,
          imgage: "../../static/image/商品2.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }, {
          id: 4,
          imgage: "../../static/image/商品3.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }, {
          id: 5,
          imgage: "../../static/image/商品4.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }, {
          id: 6,
          imgage: "../../static/image/商品1.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "￥120.00",
          text1: "自营",
          price2: "￥50"
        }],
      };
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    // height: 100vh;

    .box1 {
      position: relative;

      image {
        width: 100%;
        height: 150px;
      }

      .box2 {
        width: 90%;
        background-color: #fff;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
        position: absolute;
        left: 0;
        top: 110px;
        right: 0;
        margin: auto;
        display: flex;

        .box2-1 {
          margin-right: 10px;

          image {
            width: 45px;
            height: 45px;
          }
        }

        .box2-2 {
          width: 60%;

          .box2-22 {
            color: #ccc;
            margin-top: 5px;
            font-size: 15px;
          }
        }

        .box2-3 {
          line-height: 47px;
          text-align: center;

          .box2-31 {
            color: #fc4424;
            border: 1px solid #fc4424;
            padding: 5px 10px;
            border-radius: 20px;
          }
        }
      }
    }

    .box4 {
      width: 90%;
      margin: 30px auto 0;
      flex-wrap: wrap;
      display: flex;
      justify-content: space-around;

      .box4-text {
        width: 48%;
        margin-top: 10px;
        box-shadow: 0px 0px 1px rgb(171, 165, 165);
        border-radius: 10px;
        overflow: hidden;

        image {
          width: 100%;
          height: 150px;
        }

        .box4-text-bottom {
          padding: 10px;
          box-sizing: border-box;
          background-color: #fff;

          .box4-title {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; //行数
            -webkit-box-orient: vertical;

            .box4-text1 {
              background-color: red;
              border-radius: 4px;
              color: #fff;
              padding: 2px 5px;
              font-size: 12px;
            }
          }

          .box4-content {
            display: flex;
            justify-content: space-between;
            margin-top: 15px;
            border: 1px solid #FC4E30;
            border-radius: 5px;
            width: 64%;

            .box4-content1 {
              color: red;
              font-size: 14px;
              padding: 0 5px;
            }

            .box4-content2 {
              background-color: #FC4E30;
              border-radius: 4px;
              color: white;
              padding: 0 5px;
            }
          }

          .box4-price {
            font-weight: bold;
            color: #FC4E30;
            font-size: 20px;
            margin-top: 10px;
          }

          .box4-text2 {
            display: flex;
            justify-content: space-between;
            margin: 10px 0 10px;

            .box4-text2-left {
              text-decoration-line: line-through;
              color: #ccc;
              font-size: 14px;
            }

            .box4-text2-right {
              color: #ccc;
              font-size: 14px;
            }
          }

          .box4-text3 {
            width: 100%;
            display: flex;
            background-color: #FFF8F6;
            border-bottom-right-radius: 10px;

            border-bottom-left-radius: 10px;

            .box4-text3-left {
              image {
                width: 20px;
                height: 20px;
              }
            }

            .box4-text3-right {
              width: 80%;
              font-size: 11px;
              color: #FD7158;
            }
          }
        }
      }
    }

    .box3 {}
  }
</style>