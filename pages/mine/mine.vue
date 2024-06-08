<template>
    <view id="app">
      <view class="header">
        <view class="avatar">
          <view class="left">
            <img src="../../static/image/logo.png" alt="" />
          </view>
          <view class="right">
            <view class="p">阳光彩虹小马</view>
            <view class="span">18353987463</view>
          </view>
        </view>
        <view class="h-box">
         <view class="ico-box" v-for="(item, index) in icobox" :key="index" @click="handleItemClick(item)">
        <img :src="item.icon" alt="" />
        <view class="p">{{ item.text }}</view>
      </view>
        </view>
      </view>
      <view class="red-box">
        <view class="red-item" v-for="(item, index) in red" :key="index" @click="click(item)">
          <span :class="['ico', item.iconClass]" v-if="item.showIcon">{{ item.iconText }}</span>
          <view class="p">{{ item.amount }}</view>
        </view>
      </view>
      <view class="orders">
        <view class="o-top">我的订单</view>
        <view class="o-box">
          <view class="box-item" v-for="(item, index) in box" :key="index" @click="navigateToPage(item)">
            <img :src="item.icon" alt="" />
            <view class="p">{{ item.text }}</view>
          </view>
        </view>
      </view>
      <view class="sign">
          <view class="s-top">
            <view class="t-left">签到送红包</view>
            <view class="t-right" @tap="checkIn">立即签到</view>
          </view>
          <view v-if="isCheckInSuccess" class="checkin-success">
            <view class="box">
              <view class="x">
                <button @tap="hideCheckInSuccess">x</button>
              </view>
              <view class="b-img">
                <img src="../../static/image/success.png" alt="" />
              </view>
              <view class="b-text">
                <view class="p">恭喜您签到成功</view>
                <view class="p">获得2红包</view>
              </view>
              <view class="b-button">
                <button class="btn-left">立即使用</button>
               <button class="btn-right" @tap="hideCheckInSuccess">关闭</button>
              </view>
            </view>
          </view>
        <view class="s-center">
          <view class="c-item" v-for="(day, index) in days" :key="index">
            <view class="p">{{ `第${index + 1}天` }}</view>
            <view class="i-box" :class="{ 'bg-color': index === 0 }">
              <img :src="imageSrc" alt="" />
            </view>
          </view>
        </view>
        <view class="s-text" v-for="(task, index) in tasks" :key="index">
          <view class="t-item">
            <view class="i-left">
              <view class="p">{{ task.description }} ({{ index + 1 }}/{{ tasks.length }})</view>
              <span>+{{ task.reward }}红包</span>
            </view>
            <view class="i-right">{{ task.action }}</view>
          </view>
        </view>
      </view>
      <view class="ico-item">
        <view class="i-box">
          <view class="b-item" v-for="(item, index) in items" :key="index">
            <img :src="item.icon" alt="" />
            <view class="p">{{ item.text }}</view>
          </view>
        </view>
      </view>
    </view>
  
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  
  const icobox = ref([
    { icon: '../../static/image/ico-1.png', text: '收藏' },
    { icon: '../../static/image/ico-2.png', text: '关注店铺' },
  ]);
  
  const handleItemClick = (item) => {
    if (item.text === '收藏') {
      uni.navigateTo({
        url: '/pages/collection/index'
      })
    }
  }
  // 定义签到成功提示的显示状态，默认隐藏
  const isCheckInSuccess = ref(false);
  
  // 点击击签到按钮的处理方法
  const checkIn = () => {
    // 这里可以添加签到逻辑，例如API调用
    // 假设签到成功后设置isCheckInSuccess为true
    isCheckInSuccess.value = true;
  };
  
  // 关闭签到成功提示的方法
  const hideCheckInSuccess = () => {
    isCheckInSuccess.value = false;
  };
    
    const click = (item) => {
      if (item.iconText === '余额') {
        uni.navigateTo({
          url: '/pages/balance/index',
        })
      }
    }
    
    const red = ref([{
        iconText: '余额',
        amount: '1358.00',
        iconClass: 'ico',
        showIcon: true
      },
      {
        iconText: '红包',
        amount: '283.00',
        iconClass: 'ico1',
        showIcon: true
      },
      // 可以继续添加更多项目...
    ]);
  
    const box = ref([{
        icon: '../../static/image/ico-5.png',
        text: '商品订单'
      },
      {
        icon: '../../static/image/ico-6.png',
        text: '服务订单'
      },
      {
        icon: '../../static/image/ico-7.png',
        text: '退换/售后'
      },
    ]);
  
    const navigateToPage = (item) => {
    if (item.text === '商品订单') {
      uni.navigateTo({
        url: '/pages/commodityorders/index'
      });
    }
    // 可以根据需要添加其他逻辑处理其他选项的点击
  };
  
    const days = ref(7); // 这里表示有7天
    const imageSrc = ref("../../static/image/ico-8.png"); // 图片路径
  
    const tasks = ref([{
        description: '浏览商品列表15秒',
        reward: 5,
        action: '去浏览'
      },
      {
        description: '充值领取红包',
        reward: 100,
        action: '去充值'
      },
      {
        description: '购物领取红包',
        reward: 15,
        action: '去购买'
      },
    ]);
    // 定义一个数组，包含所有图标和文字的配置信息
    const items = ref([{
        icon: '../../static/image/ico-9.png',
        text: '收货地址'
      },
      {
        icon: '../../static/image/ico-10.png',
        text: '商家入驻'
      },
      {
        icon: '../../static/image/ico-11.png',
        text: '超级会员'
      },
      {
        icon: '../../static/image/ico-12.png',
        text: '二手交易商'
      },
      {
        icon: '../../static/image/ico-13.png',
        text: '官方客服'
      },
      {
        icon: '../../static/image/ico-14.png',
        text: '城市合伙人'
      },
      {
        icon: '../../static/image/ico-15.png',
        text: '成为代理'
      },
      {
        icon: '../../static/image/ico-16.png',
        text: '邀请好友'
      },
      {
        icon: '../../static/image/ico-17.png',
        text: '设置'
      },
      {
        icon: '../../static/image/ico-18.png',
        text: '新手指南'
      },
    ]);
  </script>
  
  <style scoped lang="scss">
    #app {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      background-color: #f5f5f5;
  
      .header {
        width: 100%;
        background-color: #fcefee;
        display: flex;
        flex-wrap: wrap;
  
        .avatar {
          width: 94%;
          height: 60px;
          margin: 40px auto 0;
          display: flex;
  
          .left {
            width: 60px;
            height: 60px;
            margin-right: 20px;
  
            img {
              width: 60px;
              height: 60px;
              border-radius: 999em;
            }
          }
  
          .right {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            width: 90%;
            height: 60px;
  
            .p {
              width: 100%;
              height: 30px;
              font-size: 20px;
            }
  
           .span {
              width: 100%;
              height: 30px;
              font-size: 12px;
              color: #999;
            }
          }
        }
  
        .h-box {
          width: 94%;
          margin: 30px auto;
          display: flex;
  
          .ico-box {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
  
            img {
              margin: 0 auto;
              width: 20px;
              height: 20px;
            }
  
            .p {
              font-size: 14px;
              width: 100%;
              text-align: center;
            }
          }
        }
      }
  
      .red-box {
        width: 94%;
        height: 90px;
        margin: -20px auto 0;
        display: flex;
        background-color: #fff;
        border-radius: 10px;
  
        .red-item {
          margin: 15px 0;
          width: 50%;
          height: 60px;
          border-right: 1px solid #999;
          text-align: center;
  
         .span {
            width: 100%;
            height: 30px;
            font-size: 12px;
            line-height: 30px;
            text-indent: 1em;
          }
  
          .p {
            width: 100%;
            height: 30px;
          }
  
          .ico {
            background-image: url(../../static/image/ico-3.png);
            background-repeat: no-repeat;
            background-position: 40% 50%;
            background-size: 14px;
          }
  
          .ico1 {
            background-image: url(../../static/image/ico-4.png);
            background-repeat: no-repeat;
            background-position: 40% 50%;
            background-size: 14px;
          }
        }
      }
    }
  
    .orders {
      width: 94%;
      margin: 10px auto;
      background-color: #fff;
      border-radius: 10px;
  
      .o-top {
        width: 90%;
        margin: 10px auto;
        font-size: 14px;
        padding-bottom: 10px;
        border-bottom: 1px solid #f5f6f7;
      }
  
      .o-box {
        width: 80%;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
  
        .box-item {
          text-align: center;
          width: 20%;
  
          img {
            width: 30px;
            height: 30px;
          }
  
          .p {
            width: 100%;
            text-align: center;
            font-size: 12px;
          }
        }
      }
    }
  
    .sign {
      padding: 10px 0;
      width: 94%;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      background-color: #fff;
      border-radius: 10px;
  
      .s-top {
        padding: 10px 0;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f6f7;
        font-size: 14px;
        height: 30px;
  
        .t-left {
          width: 25%;
          height: 100%;
        }
  
        .t-right {
          width: 25%;
          height: 100%;
          text-align: center;
          border-radius: 16px;
          line-height: 30px;
          color: #fff;
          font-size: 12px;
          background-color: #fc4424;
        }
      }
      
      .checkin-success{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(225, 225, 225, 0.3);
        .box{
          padding: 10px 0 30px;
          margin: 30vh auto;
          width: 60%;
          height: 40vh;
          background-color: #fff;
          .x{
            margin: 10px 0;
            width: 100%;
            background-color: #fff;
            button{
              margin-left: 190px;
              width: 24px;
              height: 24px;
              background-color: #fff;
              border: none !important;
              text-indent: -4px;
              line-height: 20px;
            }
          }
          .b-img{
            width: 50%;
            height: 112px;
            margin: 0 auto;
            img{
              width: 100%;
              height: 112px;
            }
          }
          .b-text{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            .p{
              margin: 10px 0;
              text-align: center;
              width: 100%;
            }
          }
          .b-button{
            display: flex;
            width: 90%;
            margin: 0 auto;
            button{
              font-size: 12px;
              line-height: 40px;
              width: 46%;
              height: 40px;
              border-radius: 50px;
            }
            .btn-left{
              background-color: #fc4424;
              color: #fff;
            }
            .btn-right{
              border: 1px solid #fc4424;
              color: #fc4424;
              background-color: #fff;
            }
          }
        }
      }
            
      .s-center {
        padding: 10px 0;
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f6f7;
  
        .c-item {
          width: 11.5%;
          font-size: 12px;
          text-align: center;
  
          .i-box {
            border-radius: 10px;
            margin: 10px 0;
            width: 100%;
            height: 34px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f3f3f3;
  
            img {
              width: 100%;
              height: 100%;
            }
          }
  
          .bg-color {
            background-color: #ffdbbb;
          }
        }
      }
  
      .s-text {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
  
        .t-item {
          margin: 6px 0;
          padding: 20px;
          width: 100%;
          background-color: #fafafa;
          border-radius: 10px;
          display: flex;
          justify-content: space-between;
  
          .i-left {
            width: 70%;
            height: 30px;
            display: flex;
            flex-wrap: wrap;
  
            .p {
              width: 100%;
              font-size: 14px;
            }
  
           .span {
              width: 100%;
              color: #fb4f31;
              font-size: 12px;
            }
          }
  
          .i-right {
            width: 24%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: #fb6045;
            border: 2px solid #fb6045;
            border-radius: 50px;
            font-size: 14px;
          }
        }
      }
    }
  
    .ico-item {
      width: 94%;
      margin: 10px auto 20px;
      background-color: #fff;
      border-radius: 10px;
  
      .i-box {
        padding: 20px 10px;
        width: 90%;
        display: flex;
        flex-wrap: wrap;
  
        .b-item {
          margin: 10px 0;
          text-align: center;
          width: 25%;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
  
          img {
            width: 24px;
            height: 24px;
          }
  
          .p {
            margin: 10px 0;
            font-size: 14px;
            width: 100%;
          }
        }
      }
    }
  </style>
