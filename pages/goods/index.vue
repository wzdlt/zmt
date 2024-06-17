<template>
  <view class="header">
    <view class="left" @click="syy">
      &lt;
    </view>
    
            <view class="center">确认订单</view>
  </view>
  
  <view class="body-box">
    <view class="b-top">
      <view class="t-center">
        <view class="c-left">
          <img src="../../static/image/commodity.png" alt="" />
        </view>
        <view class="c-right">
          <view class="r-top text-ellipsis-1 ">美孚(hab0)金装美孚1号FSOW-30 全合成机油润滑油 SL级 4L 汽车保养</view>
          <view class="r-center">全合成;4L</view>
          <view class="r-bottom">
            <view class="b-left">￥</view>
            <view class="b-center">439.00</view>
            <view class="b-right">×1</view>
          </view>
        </view>
      </view>
      <view class="t-center">
        <view class="c-left">
          <img src="../../static/image/thinkauto.jpg" alt="" />
        </view>
        <view class="c-right">
          <view class="r-top text-ellipsis-1 ">驾驰/THINKAUTO 放油螺栓驾驰/THINKAUTO 放油螺栓驾驰/THINKAUTO 放油螺栓</view>
          <view class="r-center">全合成;4L</view>
          <view class="r-bottom">
            <view class="b-left">￥</view>
            <view class="b-center">11.50</view>
            <view class="b-right">×1</view>
          </view>
        </view>
      </view>
      <view class="t-bottom">
        <view class="b-top">
          <view class="item">
            <view class="i-left">优惠金额</view>
            <view class="i-right">￥890.00</view>
          </view>
          <view class="item">
            <view class="i-left">备注</view>
            <view class="i-right">
              <input type="text" placeholder="请填写备注" />
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
  
  <view class="pay-box">
    <view
      class="pay"
      :class="payClassNameMap[item.name]"
      v-for="(item, index) in payMethods"
      :key="index"
      @click="() => togglePayMethod(index)"
    >
      <view class="p-left">{{ item.name }}</view>
      <view class="p-right">
        <img :src="item.icon" alt="" :class="{ active: item.isSelected }" />
      </view>
    </view>
  </view>
      
  <view class="footer">
    <view class="f-left">
      <view class="text">合计：</view>
      <view class="small">￥</view>
      <view class="big">890</view>
      <view class="small">.00</view>
    </view>
    <view class="f-right">
      <button>立即支付</button>
    </view>
  </view>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  
  const syy = () => {
    uni.navigateTo({
       url: '/pages/mobil/index', 
     });
  };
// 初始化支付方式数组，假设微信支付默认选中
const payMethods = reactive([
  { name: '微信支付', icon: '../../static/image/ico-23.png', isSelected: true },
  { name: '支付宝', icon: '../../static/image/ico-22.png', isSelected: false },
  { name: '余额', icon: '../../static/image/ico-22.png', isSelected: false },
]);
const payClassNameMap = {
  '微信支付': 'wechat',
  '支付宝': 'alipay',
  '余额': 'balance',
};
// 定义方法来切换支付方式的选中状态
const togglePayMethod = (index) => {
  payMethods.forEach((item, i) => {
    if (i === index) {
      item.isSelected = true;
    } else {
      item.isSelected = false;
    }
  });
};
</script>

<style lang="scss">
  page{
    background-color: #f5f5f5;
  }
  .text-ellipsis-1 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      word-break: break-all;
  }
  
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
      z-index: 10;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      .left{
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
      }
      .center{
          flex: 1;
          text-align: center;
          line-height: 40px;
      }
  }
  
  .body-box{
    margin: 40px 0 10px;
    padding: 10px 0;
    width: 100%;
    background-color: #f5f5f5;
    .b-top{
      padding: 6px 0;
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 10px;

      .t-center{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 20px auto;
        .c-left{
          width: 30%;
          img{
            width: 100px;
            height: 100px;
          }
        }
        .c-right{
          width: 66%;
          .r-top{
            width: 100%;
            font-size: 14px;
          }
          .r-center{
            width: 100%;
            margin: 10px 0;
            color: #9d9d9d;
            font-size: 12px;
          }
          .r-bottom{
            width: 100%;
            height: 30px;
            display: flex;
            
            .b-left{
              width: 6%;
              height: 30px;
              line-height: 40px;
              font-size: 14px;
              color: #fc4424;
            }
            .b-center{
              width: 30%;
              height: 30px;
              line-height: 36px;
              font-size: 20px;
              color: #fc4424;
            }
            .b-right{
              width: 10%;
              height: 30px;
              line-height: 40px;
              font-size: 14px;
              color: #9d9d9d;
            }
          }
        }
      }
      .t-bottom{
        width: 90%;
        margin: 0 auto;
        .b-top{
          width: 100%;
          margin: 0 auto;
          .item{
            display: flex;
            justify-content: space-between;
            margin: 10px 0;
            width: 100%;
            .i-left{
              width: 70%;
              color: #6a6a6a;
            }
            .i-right{
              text-align: right;
              width: 30%;
              color: #3e3e3e;
            }
          }
        }
        .b-center{
          width: 100%;
          display: flex;
          justify-content: right;
          .ctr-left{
            font-weight: 600;
          }
          .ctr-right{
            margin-left: 10px;
            color: #fc4424;
            font-weight: 600;
          }
        }
        .b-bottom{
          margin: 30px 0;
          padding: 16px 10px;
          width: 94%;
          background-color: #f5f5f5;
          display: flex;
          .b-left{
            width: 16%;
            color: #7a7a7a;
          }
        }
      }
    }
    
  }
  
  .pay-box{
    width: 90%;
    margin: 10px auto;
    border-radius: 10px;
    background-color: #fff;
    .wechat{
      background-image: url(../../static/image/wechat.png);
    }
    .alipay{
      background-image: url(../../static/image/alipay.png);
    }
    .balance{
      background-image: url(../../static/image/ico-21.png);
    }
    .pay{
      width: 100%;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #d5d5d5;
      background-repeat: no-repeat;
      background-size: 16px;
      background-position: 2.6% 50%;
      .p-left{
        width: 90%;
        height: 50px;
        line-height: 50px;
        text-indent: 2em;
      }

      .p-right{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50px;
        height: 50px;
        img{
          width: 30%;
          height: 30%;
        }
      }
    }
  }

  .footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    .f-left{
      width: 60%;
      height: 60px;
      line-height: 60px;
      display: flex;
      .small,.big{
        color: #fc4424;
      }
      .big{
        font-size: 20px;
        line-height: 56px;
      }
    }
    .f-right{
      width: 30%;
      height: 60px;
      button{
        margin: 10px 0;
        height: 40px;
        line-height: 40px;
        border-radius: 50em;
        color: #fff;
        background-color: #fc4424;
        font-size: 12px;
      }
    }
  }
</style>