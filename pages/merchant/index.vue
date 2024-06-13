<template>
    <view class="header">
        <view 
        class="left"
        @click="switchToTab">
            &lt;
        </view>

        <view class="center">商家详情</view>
    </view>
    
    <div class="banner">
      <img src="../../static/image/banner.png" alt="" />
    </div>
    
    <div class="text-box">
      <div class="b-top">
        <div class="t-left">青柠养车（香港街店）</div>
        <div class="t-right">1.2km</div>
      </div>
      <div class="b-stary">
        <uv-rate :count="5" allow-half v-model="selectedValue" active-color="#FFB800"></uv-rate>
        <div class="num">{{ selectedValue }}</div>
      </div>
      <div class="b-text">
        <div class="t-item">洗车</div>
        <div class="t-item">美容</div>
        <div class="t-item">维修</div>
        <div class="t-item">轮胎</div>
        <div class="t-item">保修</div>
        <div class="t-item">改装</div>
      </div>
      <div class="b-title">
        山东省临沂市河东区芝麻墩街道香港路与长安路交汇触路北50米青柠养车
      </div>
      <div class="phone">
        18305398753
      </div>
    </div>
    
<!--    <div class="body">
      <div class="ul">
        <div class="li">推荐</div>
        <div class="li">小保养</div>
        <div class="li"></div>
        <div class="li"></div>
        <div class="li"></div>
      </div>
    </div> -->
    
    <view id="offline">
      <view id="offline-content">
        <view class="offline-content">
          <view class="offline-tab">
            <!-- 选项卡 -->
            <view class="tab-item" :class="{ active: activeTab === 'tab1' }" @click="changeTab('tab1')">
              推荐
              <view class="border"></view>
            </view>
            <view class="tab-item" :class="{ active: activeTab === 'tab2' }" @click="changeTab('tab2')">
              小保养
              <view class="border"></view>
            </view>
            <view class="tab-item" :class="{ active: activeTab === 'tab3' }" @click="changeTab('tab3')">
              空调养护
              <view class="border"></view>
            </view>
            <view class="tab-item" :class="{ active: activeTab === 'tab4' }" @click="changeTab('tab4')">
              制动系统
              <view class="border"></view>
            </view>
            <view class="tab-item" :class="{ active: activeTab === 'tab5' }" @click="changeTab('tab5')">
              冷却系统
              <view class="border"></view>
            </view>
          </view>
          <!-- 推荐 -->
          <view v-if="activeTab === 'tab1'">
            <view class="recommend">
                111
            </view>
          </view>
          <view v-if="activeTab === 'tab2'">小保养</view>
          <view v-if="activeTab === 'tab3'">空调养护</view>
          <view v-if="activeTab === 'tab4'">制动系统</view>
          <view v-if="activeTab === 'tab5'">冷却系统</view>
        </view>
      </view>
    
    </view>
</template>


<script>
export default {

  data() {
    return {
      // 地址
      options: [{
        value: '选项一',
        label: '临沂',
      },
      {
        value: '选项二',
        label: '泰安'
      },
      {
        value: '选项三',
        label: '济南'
      }
      ],
      selected: '',
      // 轮播图
      swiper: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ],
      // 选项卡
      tabs: [{
        name: '推荐'
      }, {
        name: '小保养',
      }, {
        name: '空调养护'
      }, {
        name: '制动系统'
      }, {
        name: '冷却系统'
      }],
      // 评分
      count: 5,
      value: 4,
      // 推荐
      activeTab: 'tab1', // 当前活动的选项卡
    }
  },

  methods: {
    openPicker() {
      this.$refs.picker.open();
    },
    confirm(e) {
      console.log('confirm', e);
    },
    changeTab(tab) {
      this.activeTab = tab;
    },
    navigateToDetail(item) {
      uni.navigateTo({
        url:'/pages/merchant/index'
      })
    }
  }
}
</script>

<style lang="scss">
  page{
    background-color: #f5f5f5;
  }
    .header {
        position: fixed;
        top: 0;
        width: 100%;
        height: 40px;
        display: flex;
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
    
    .banner{
      margin-top: 40px;
      width: 100%;
      img{
        width: 100%;
      }
    }
    
    .text-box{
      padding: 20px 0;
      position: absolute;
      top: 160px;
      left: 5%;
      width: 90%;
      background-color: #fff;
      border-radius: 16px;
      .b-top{
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
        .t-left{
          width: 50%;
          font-weight: 600;
        }
        .t-right{
          color: #fc4424;
        }
      }
      .b-stary{
        display: flex;
        width: 90%;
        margin: 20px auto;
        .num{
          width: 20%;
        }
      }
      .b-text{
        width: 90%;
        margin: 0 auto;
        display: flex;
        .t-item{
          margin-right: 10px;
          width: 12%;
          height: 20px;
          text-align: center;
          line-height: 20px;
          border-radius: 6px;
          background-color: #ffece9;
          color: #fc4424;
          font-size: 12px;
        }
      }
      .b-title{
        width: 90%;
        margin: 10px auto;
        color: #b7b7b7;
      }
      .phone{
        width: 90%;
        margin: 10px auto;
        color: #fc4424;
        text-indent: 2em;
      }
    }
    
    #offline {
      margin-top: 200px;
      width: 100%;
      box-sizing: border-box;
      height: 600rpx;
      background: linear-gradient(#FC4424, #F99482, #F5E7E5);
    
      .offline {
        width: 90%;
        margin: auto;
    
        /*搜索*/
        .select {
          display: flex;
          width: 100%;
          background-color: #F5F5F5;
          border-radius: 30rpx;
    
          select {
            border: none;
            border-radius: 30rpx;
            background-color: #F5F5F5;
            padding-left: 20rpx;
    
          }
    
          select:focus-visible {
            outline: none;
          }
        }
    
        // 轮播
        .swiper {
          width: 100%;
          margin-top: 30rpx;
        }
      }
    
      #offline-content {
        width: 100%;
        background-color: #F5F5F5;
    
        .offline-content {
          width: 90%;
          margin: auto;
    
          // 选项卡
          .offline-tab {
            display: flex;
            width: 100%;
            padding-top: 20rpx;
            overflow-x: auto;
            display: -webkit-box;
            -webkit-overflow-scrolling: touch;
    
          }
    
          .tab-item {
            text-align: center;
            padding: 10px;
            font-size: 16px;
            color: #717171;
            .border{
              display: none;
              margin: auto;
              width: 50%;
              height: 8rpx;
              border-radius: 2px;
              background-color: #FC4424;
            }
          }
    
          .tab-item.active {
            color: #1F1F1F;
            font-size: 18px;
            font-weight: bold;
            .border{
              display: block;
            }
          }
    
          // 推荐
          .recommend {
            padding: 30rpx 0px;
            width: 100%;
    
            .recommend-con {
              background-color: #fff;
              margin: 20rpx 0px;
              padding: 20rpx 0px;
              border-radius: 10px;
              display: flex;
              justify-content: space-between;
    
              .recom-img {
                width: 30%;
    
                img {
                  width: 100%;
                  height: 6.2rem;
                }
              }
    
              .recom-right {
                width: 65%;
                margin: auto;
    
                .recom-title {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20rpx;
                }
              }
    
              .recom-bottom {
                display: flex;
    
                view {
                  margin-right: 14rpx;
                  text-align: center;
                  font-size: 13px;
                  color: #6E6E6E;
                  background-color: #FFECE9;
                  padding: 4rpx;
                  color: #FD5A3E;
                }
              }
            }
          }
        }
      }
    }    
</style>