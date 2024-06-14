<template>
  <view id="offline" class="navbar">
    <view class="active">
      线下实体
    </view>
    <view class="offline">
      <!-- 搜索 -->
      <view class="select">
        <select v-model="selected">
          <option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            {{ item.label }}
          </option>
        </select>
        <uv-search placeholder="请输入您的搜索的内容" shape="round" :showAction="false"></uv-search>
      </view>
      <!-- 轮播图 -->
      <view class="swiper">
        <uv-swiper :list="swiper" indicator indicatorMode="line" circular></uv-swiper>
      </view>

    </view>
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
            <view class="recommend-con" v-for="(item, index) in list" :key="index" @click="navigateToDetail(item)">
              <view class="recom-img">
                <img :src="item.img" alt="">
              </view>
              <view class="recom-right">
                <view class="recom-title">
                  <view style="font-weight: 600; color: #000;">{{ item.text1 }}</view>
                  <view style="font-size: 13px; color: #676767;">{{ item.num }}km</view>
                </view>
                <uv-rate :count="count" v-model="value" active-color="#FFB800"></uv-rate>
                <p style="font-size: 12px; color: #6E6E6E; padding: 10rpx 0px;">{{ item.text2 }}</p>
                <view class="recom-bottom">
                  <view>{{ item.text3 }}</view>
                  <view>{{ item.text4 }}</view>
                  <view>{{ item.text5 }}</view>
                  <view>{{ item.text6 }}</view>
                </view>
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
      // 评分
      count: 5,
      value: 4,
      // 推荐
      list: [
        {
          img: '../../static/image/vivo.png',
          text1: '安踏(吾悦广场点)',
          num: '1.2',
          text2: '山东省临沂市河东区东兴路与李公街...',
          text3: '男装',
          text4: '女装',
          text5: '鞋',
          text6: '儿童服饰'
        },
        {
         img: '../../static/image/vivo.png',
          text1: '小米(吾悦广场点)',
          num: '1.2',
          text2: '山东省临沂市河东区东兴路与李公街...',
          text3: '男装',
          text4: '女装',
          text5: '鞋',
          text6: '儿童服饰'
        },
        {
         img: '../../static/image/vivo.png',
          text1: '华为(吾悦广场点)',
          num: '1.2',
          text2: '山东省临沂市河东区东兴路与李公街...',
          text3: '男装',
          text4: '女装',
          text5: '鞋',
          text6: '儿童服饰'
        },
        {
         img: '../../static/image/vivo.png',
          text1: 'vivo(吾悦广场点)',
          num: '1.2',
          text2: '山东省临沂市河东区东兴路与李公街...',
          text3: '男装',
          text4: '女装',
          text5: '鞋',
          text6: '儿童服饰'
        },
        {
          img: '../../static/image/vivo.png',
          text1: 'oppo(吾悦广场点)',
          num: '1.2',
          text2: '山东省临沂市河东区东兴路与李公街...',
          text3: '男装',
          text4: '女装',
          text5: '鞋',
          text6: '儿童服饰'
        }
      ],
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
  .navbar{
    padding-top: 40px;
    width: 100%;
    height: 200px;
    background-image: linear-gradient(to top , #f7c8c0, #fc4424);
    text-align: center;
    color: #fff;
    font-size: 20px;
  }
     #offline {
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
