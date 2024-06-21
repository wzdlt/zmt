<template>
  <view id="searchbox">
    <view class="search">
      <view class="search-top">
        <uv-search placeholder="请输入您的搜索的内容" shape="round" :showAction="false"></uv-search>
      </view>
      <view class="search-tabs">
        <!-- 选项卡头部 -->
        <view class="tab-item" :class="{ active: activeTab === 'tab1' }" @click="changeTab('tab1')">
          综合排序
        </view>
        <view class="tab-item" :class="{ active: activeTab === 'tab2' }" @click="changeTab('tab2')">
          销量
        </view>
        <view class="tab-item" :class="{ active: activeTab === 'tab3' }" @click="changeTab('tab3')">
          价格
        </view>
      </view>
    </view>
    <view class="tabs">
      <view class="tab-content">
        <!-- 选项卡内容 -->
        <view v-if="activeTab === 'tab1'">
          <view class="recom-conter">
            <view class="recom-conter1" v-for="(item, index) in recom" :key="index">
              <view class="recom-img">
                <image :src="item.img" alt=""></image>
              </view>
              <view class="recom-content">
                <view class="recom-text"><text>{{ item.name }}</text>{{ item.text }}</view>
                <view class="recom-red">
                  <view class="recom-red1">{{ item.text1 }}</view>
                  <view class="recom-red2">￥{{ item.text2 }}</view>
                </view>
                <view class="recom-price">￥{{ item.pirce }}<text>.00</text></view>
                <view class="recom-price1">
                  <view>￥{{ item.pirce1 }} <text>.00</text></view>
                  <view>月销{{ item.num }}</view>
                </view>
                <view class="recom-bottom">
                  <image :src="item.img1" alt=""></image>
                  <view class="p">{{ item.text3 }}</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view v-if="activeTab === 'tab2'"> 销量内容 </view>
        <view v-if="activeTab === 'tab3'"> 价格内容 </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "tab1", // 当前活动的选项卡
      // 热卖推荐
      recom: [
        {
          img: "/static/商品名称.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
        {
          img: "/static/商品名称2.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
        {
          img: "/static/商品名称.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
        {
          img: "/static/商品名称.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
        {
          img: "/static/商品名称.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
        {
          img: "/static/商品名称1.png",
          name: "自营",
          text: "裤子男士休闲长裤加绒加厚束脚裤潮年.…",
          text1: "送红包",
          text2: 50,
          pirce: 120,
          pirce1: 180,
          num: 180,
          img1: "/static/邀.png",
          text3: "邀请新人参与抢购再优惠15%",
        },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>
<style lang="scss">
#searchbox {
  width: 100%;
  box-sizing: border-box;

  .search {
    width: 90%;
    margin: auto;

    .search-top {
      margin: 20rpx 0px;
    }

    //选项卡
    .tab {
      width: 100%;
    }

    .search-tabs {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
    }

    .tab-item {
      flex: 1;
      text-align: center;
      padding: 10px;
      font-size: 16px;
      color: #717171;
      background-color: #fff;
      cursor: pointer;
    }

    .tab-item.active {
      color: #ff3646;
    }
  }

  .tabs {
    width: 100%;
    background-color: #f1f1f1;

    .tab-content {
      width: 90%;
      margin: auto;
      padding: 20rpx 0px;

      .recom-conter {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .recom-conter1 {
          width: 49%;
          background-color: #fff;
          border-radius: 10px;
          margin: 14rpx 0px;

          .recom-img {
            width: 100%;

            image {
              width: 100%;
              height: 10rem;
            }
          }

          .recom-content {
            width: 95%;
            margin: auto;

            .recom-text {
              font-size: 15px;
              // letter-spacing: 1rpx;

              text {
                background-color: #fc4424;
                padding: 4rpx 8rpx;
                margin-right: 6rpx;
                font-size: 13px;
                color: #fff;
                border-radius: 8rpx;
              }
            }

            .recom-red {
              display: flex;
              font-size: 13px;
              margin: 14rpx 0px;
              text-align: center;
              height: 40rpx;
              line-height: 40rpx;

              .recom-red1 {
                border: 1px solid #fc4424;
                width: 30%;
                color: #fc4424;
                border-radius: 6rpx;
                font-size: 12px;
              }

              .recom-red2 {
                width: 20%;
                color: #fff;
                background-color: #fc4424;
                border-radius: 6rpx;
                margin-left: -4rpx;
              }
            }

            .recom-price {
              font-size: 18px;
              color: #fc4424;
              margin: 10rpx 0px;

              text {
                font-size: 14px;
              }
            }

            .recom-price1 {
              display: flex;
              justify-content: space-between;
              margin: 10rpx 0px;
              color: #9c9c9c;
              font-size: 14px;

              view:nth-child(1) {
                text-decoration: line-through;
              }
            }

            .recom-bottom {
              font-size: 10px;
              margin: 20rpx 0px;
              display: flex;

              image {
                width: 10%;
                height: 1rem;
              }

              .p {
                padding-left: 10rpx;
                color: #fc6348;
              }
            }
          }
        }
      }
    }
  }
}
</style>