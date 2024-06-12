<!-- 二手交易 -->
<template>
  <view class="trade">
    <view class="trade-box">
      <view class="top">
        <view class="search">
          <uv-search shape="round" :showAction="false" bgColor="#fff"></uv-search>
        </view>
        <view class="grid">
          <uv-grid :border="false">
            <uv-grid-item v-for="(item,index) in baseList" :key="index">
              <image :src="item.image" mode=""></image>
              <text class="grid-text">{{item.title}}</text>
            </uv-grid-item>
          </uv-grid>
        </view>
      </view>
      <view class="bottom">
        <view class="tabs">
          <uv-sticky bgColor="#fff">
            <uv-tabs :list="list" :activeStyle="{color: '#303133',fontWeight: 'bold',transform: 'scale(1.05)'}"
              lineColor="#fb4b2b"></uv-tabs>
          </uv-sticky>
        </view>
        <view class="box">
          <view class="shopping">
            <view class="loop" v-for="(item,index) in shopping" :key="index">
              <view class="img">
                <image :src="item.image1" mode=""></image>
              </view>
              <view class="text">
                {{item.text1}}
              </view>
              <view class="block">
                <view>{{item.text2}}</view>
                <view>{{item.text3}}</view>
              </view>
              <view class="num">
                <view class="left">
                  {{item.text4}}
                </view>
                <view class="right">
                  <image :src="item.image2" mode=""></image>
                  {{item.text5}}
                </view>
              </view>
            </view>
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
        baseList: [{
          image: '../../static/image/文档.png',
          title: '发布'
        }, {
          image: '../../static/image/已收藏.png',
          title: '收藏'
        }, {
          image: '../../static/image/记录.png',
          title: '历史记录'
        }],
        list: [{
          name: '猜你喜欢',
        }, {
          name: '新发',
        }, {
          name: '手机'
        }, {
          name: '电动车'
        }, {
          name: '汽车'
        }, {
          name: '电脑'
        }, {
          name: '文化'
        }, {
          name: '财经'
        }, {
          name: '手工'
        }],
        shopping: [{
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }, {
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }, {
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }, {
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }, {
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }, {
          image1: '../../static/image/电脑.png',
          image2: '../../static/image/评论.png',
          text1: '美孚(Mobil)金装美孚1号0W-30 全合成机…',
          text2: '全新',
          text3: '充电器插头',
          text4: '7人想要',
          text5: '12'
        }]
      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .trade {
    margin: 0;
    padding: 0;

    .trade-box {
      .top {
        background: linear-gradient(#fc4424, #fff);
        padding-bottom: 50rpx;

        .search {
          width: 90%;
          margin: auto;
        }

        .grid {
          width: 90%;
          margin: auto;
          background-color: #fff;
          margin-top: 20rpx;
          padding: 20rpx 0 40rpx;
          border-radius: 10px;

          image {
            width: 60rpx;
            height: 60rpx;
          }

          .grid-text {
            font-size: 20rpx;
            color: #909399;
          }
        }
      }

      .bottom {
        background-color: #f5f5f5;

        .box {
          padding: 30rpx;

          .shopping {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .loop {
              width: 49%;
              background-color: #fff;
              margin: 10rpx 0;

              .img {
                width: 100%;

                image {
                  width: 100%;
                  height: 320rpx;
                }
              }

              .text {
                margin: 20rpx 0;
                padding: 0rpx 10rpx;
              }

              .block {
                padding-left: 10rpx;
                margin: 20rpx 0;
                display: flex;

                view:nth-child(1) {
                  border: 1px solid #fc4424;
                  color: #fc4424;
                  padding: 6rpx;
                  font-size: 24rpx;
                  border-radius: 3px;
                }

                view:nth-child(2) {
                  border: 1px solid #fc4424;
                  color: #fc4424;
                  padding: 6rpx;
                  font-size: 24rpx;
                  margin-left: 20rpx;
                  border-radius: 3px;
                }
              }

              .num {
                margin-top: 20rpx;
                padding-left: 10rpx;
                padding-bottom: 30rpx;
                display: flex;
                justify-content: space-between;
                color: #909399;

                .left {
                  width: 100%;
                }

                .right {
                  width: 100%;
                  padding-left: 80rpx;

                  image {
                    width: 30%;
                    height: 38rpx;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>