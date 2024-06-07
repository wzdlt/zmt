<template>
  <!-- 客户订单 -->
  <view class="fuwu-box">
    <view class="fuwu-title">
      <uv-tabs :list="list" @click="click" lineColor="#eb5a50" lineWidth="30" :scrollable="false" :activeStyle="{
          color: '#eb5a50',
          fontWeight: 'bold',
          transform: 'scale(1.05)',
        }"></uv-tabs>
    </view>
    <!-- 服务订单全部开始 -->
    <view class="fuwu-cent">
      <!-- 订单列表开始 -->
      <view class="fw-list" v-for="(item,index) in fuwu" :key="index">
        <view class="fw-l">
          <view class="fw-ti">
            <view class="ft-dd">订单编号:{{ item.bian }}</view>
            <view class="ft-df">{{ item.tex }}</view>
          </view>
          <view class="fw-cen">
            <view class="fc-img">
              <image :src="item.img" mode="scaleToFill" />
            </view>
            <view class="fc-jg">
              <view>{{ item.title }}</view>
              <view>￥{{ item.price }}</view>
            </view>
          </view>
          <view class="fw-but">
            <uv-button v-if="item.text1 = item.text1" type="primary" :plain="true" :hairline="true" :text="item.text1"
              size="large" shape="circle" color="#fc5336"></uv-button>
          </view>
        </view>
      </view>
      <!-- 订单列表结束 -->
    </view>
    <!-- 服务订单全部结束 -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        disabled: true,
        curret: "",
        fuwu: [{
            id: 1,
            bian: '341245232455',
            tex: "待付款",
            img: "../../static/image/汽车保养.png",
            title: "汽车保养",
            price: "890.00"
          },
          {
            id: 1,
            bian: '341245232455',
            tex: "待使用",
            img: "../../static/image/轮胎.png",
            title: "轮胎服务",
            price: "890.00",
            text1: '核销'
          },
          {
            id: 1,
            bian: '341245232455',
            tex: "待评价",
            img: "../../static/image/汽车保养.png",
            title: "汽车保养",
            price: "890.00"
          }
        ],
        list: [{
            name: "全部",
          },
          {
            name: "待付款",
          },
          {
            name: "待使用",
          },
          {
            name: "待评价",
          },
          {
            name: "已完成",
          },
        ],
      };
    },
    methods: {
      click(item) {
        console.log("item", item);
      },
    },
  };
</script>

<style scoped lang="scss">
  .fuwu-box {
    width: 100%;

    .fuwu-title {
      border-top: 1rpx solid silver;
    }

    .fuwu-cent {
      width: 100%;
      padding-top: 40rpx;
      background-color: rgba(192, 192, 192, 0.2);

      .fw-list {
        width: 90%;
        margin: auto;
        background-color: white;
        border-radius: 10rpx;
        margin-bottom: 20rpx;

        .fw-l {
          width: 100%;

          .fw-ti {
            width: 95%;
            margin: auto;
            padding-top: 20rpx;
            display: flex;
            justify-content: space-between;

            .ft-dd {
              width: 65%;
              color: silver;
            }

            .ft-df {
              width: 25%;
              text-align: right;
              color: red;
            }
          }

          .fw-cen {
            width: 95%;
            margin: auto;
            margin-top: 60rpx;
            display: flex;
            justify-content: space-between;

            .fc-img {
              width: 30%;
              height: 200rpx;

              image {
                width: 100%;
                height: 100%;
              }
            }

            .fc-jg {
              width: 65%;

              view:nth-child(2) {
                color: red;
                margin-top: 50rpx;
              }
            }
          }

          .fw-but {
            width: 95%;
            margin: auto;
            margin-top: 30rpx;
            padding-bottom: 20rpx;
            display: flex;
            justify-content: right;

            .uv-button-wrapper {
              width: 30%;
              height: 70rpx;
              padding-left: 10rpx
            }

            // view{
            //   width: 70%;
            // }
          }
        }
      }
    }
  }
</style>