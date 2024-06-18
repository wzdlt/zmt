<template>
    <view class="header">
        <view 
        class="left"
        @click="switchToTab">
            &lt;
        </view>

        <view class="center">商家详情</view>
    </view>
    
    <view class="banner">
      <img src="../../static/image/banner.png" alt="" />
    </view>
    
    <view class="text-box">
      <view class="b-top">
        <view class="t-left">青柠养车（香港街店）</view>
        <view class="t-right">1.2km</view>
      </view>
      <view class="b-stary">
        <uv-rate :count="5" allow-half v-model="selectedValue" active-color="#FFB800"></uv-rate>
        <view class="num">{{ selectedValue }}</view>
      </view>
      <view class="b-text">
        <view class="t-item">洗车</view>
        <view class="t-item">美容</view>
        <view class="t-item">维修</view>
        <view class="t-item">轮胎</view>
        <view class="t-item">保修</view>
        <view class="t-item">改装</view>
      </view>
      <view class="b-title">
        山东省临沂市河东区芝麻墩街道香港路与长安路交汇触路北50米青柠养车
      </view>
      <view class="phone">
        18305398753
      </view>
    </view>
    
<!--    <view class="body">
      <view class="ul">
        <view class="li">推荐</view>
        <view class="li">小保养</view>
        <view class="li"></view>
        <view class="li"></view>
        <view class="li"></view>
      </view>
    </view> -->
    
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
                <view class="r-box" v-for="(product, index) in products" :key="index"  @tap="navigateToProductDetail(product)">
                  <view class="img-box">
                    <img :src="product.imageUrl" alt="" />
                  </view>
                  <view class="title text-ellipsis-2">{{ product.title }}</view>
                  <view class="text">
                    <view class="txt">{{ product.specs }}</view>
                    <view class="txt">{{ product.description }}</view>
                  </view>
                  <view class="num">
                    <view class="n-top">
                      <view class="t-left">￥{{ product.price.toFixed(2) }}</view>
                      <view class="t-right">￥{{ product.originalPrice.toFixed(2) }}</view>
                    </view>
                    <view class="n-bottom">直降￥{{ product.discount.toFixed(2) }}</view>
                  </view>
                </view>
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
      products: [
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              {
                imageUrl: '../../static/image/commodity.png',
                title: '美孚(Mobil)金装美孚1号0W-30 全合成机美孚(Mobil)金装美孚1号0W-30 全合成机',
                specs: '规格:全合成|0W-30|4L',
                description: '众多原厂认证 高效节油 强劲动力',
                price: 120.00,
                originalPrice: 180.00,
                discount: 38.00,
              },
              // 第二个商品信息，结构同上，根据需要可增加更多
            ],
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
    switchToTab() {
          uni.switchTab({
            url: '/pages/entity/entity',
          });
        },
        navigateToProductDetail(product) {
          uni.navigateTo({
            url: `/pages/mobil/index?id=${product.id}`,
          });
        },
  }
}
</script>

<style lang="scss">
  .text-ellipsis-2 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      word-break: break-all;
  }
  page{
    background-color: #f5f5f5;
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
          width: 36%;
          text-align: right;
          color: #fc4424;
          background-image: url(../../static/image/ico-25.png);
          background-repeat: no-repeat;
          background-size: 12px;
          background-position: 50%;
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
        background-image: url(../../static/image/ico-24.png);
        background-repeat: no-repeat;
        background-size: 12px;
        background-position: 4% 50%;
      }
    }
    
    #offline {
      margin-top: 200px;
      width: 100%;
      box-sizing: border-box;
      height: 600rpx;
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
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .r-box{
              margin: 6px 0;
              border-radius: 6px;
              width: 49%;
              background-color: #fff;
              .img-box{
                width: 100%;
                img{
                  width: 100%;
                  border-radius: 6px 6px 0 0;
                }
              }
              .title{
                width: 90%;
                margin: 10px  auto;
                font-size: 14px;
              }
              .text{
                width: 90%;
                margin: 10px auto;
                color: #9a9a9a;
                font-size: 10px;
              }
              .num{
                width: 90%;
                margin: 10px auto;
                .n-top{
                  width: 100%;
                  display: flex;
                  .t-left{
                    color: #fc4627;
                    font-size: 14px;
                  }
                  .t-right{
                    color: #a6a6a6;
                    font-size: 12px;
                  }
                }
                .n-bottom{
                  margin: 10px 0;
                  width: 50%;
                  height: 20px;
                  background-color: #fc4627;
                  color: #fff;
                  font-size: 12px;
                  line-height: 20px;
                  text-align: center;
                  border-radius: 6px;
                }
              }
            }
          }
        }
      }
    }    
</style>