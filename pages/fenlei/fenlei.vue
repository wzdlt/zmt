<!-- 分类 -->
<template>
  <view class="fenlei">
    <view class="ch">
      <view class="menu">
        <view class="me">
          <view class="textt" v-for="(item,index) in list" :key="index" @click="dian(index)">
            {{item.textt}}
          </view>
        </view>
        <view class="me-right">
          <swiper vertical="true" disable-touch="true" :current="curret" class="swiper">
            <swiper-item>
              <view class="title">
                休闲零食
              </view>
              <view class="leisure">
                <view class="leisure-box" v-for="(item,index) in leisure" :key="index">
                  <view class="leisure-loop">
                    <image :src="item.image" mode=""></image>
                    <view>{{item.text}}</view>
                  </view>
                </view>
              </view>
              <view class="title">
                饮料
              </view>
              <view class="drink">
                <view class="drink-box" v-for="(item,index) in drink" :key="index">
                  <view class="drink-loop">
                    <image :src="item.image" mode=""></image>
                    <view>{{item.text}}</view>
                  </view>
                </view>
              </view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: #fff;height: 100%;">食品饮酒</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">个护清洁</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">美妆护肤</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">母婴童装</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">家居厨具</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">数码家电</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">服饰配饰</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">箱包鞋帽</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">汽车用品</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">图书文娱</view>
            </swiper-item>
            <swiper-item>
              <view class="swiper-item" style="background-color: salmon;height: 100%;">玩具乐器</view>
            </swiper-item>
          </swiper>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        list: [{
          textt: '推荐分类'
        }, {
          textt: '食品酒饮'
        }, {
          textt: '个护清洁'
        }, {
          textt: '美妆护肤'
        }, {
          textt: '母婴童装'
        }, {
          textt: '家居厨具'
        }, {
          textt: '数码家电'
        }, {
          textt: '服饰配饰'
        }, {
          textt: '箱包鞋帽'
        }, {
          textt: '汽车用品'
        }, {
          textt: '图书文娱'
        }, {
          textt: '玩具乐器'
        }],
        curret: '',
        leisure: [{
          image: '../../static/image/食品.png',
          text: '零食大礼包'
        }, {
          image: '../../static/image/食品.png',
          text: '休闲零食'
        }, {
          image: '../../static/image/食品.png',
          text: '膨化食品'
        }, {
          image: '../../static/image/食品.png',
          text: '坚果炒货'
        }, {
          image: '../../static/image/食品.png',
          text: '肉干/熟食'
        }, {
          image: '../../static/image/食品.png',
          text: '蜜饯果干'
        }, {
          image: '../../static/image/食品.png',
          text: '巧克力'
        }, {
          image: '../../static/image/食品.png',
          text: '饼干蛋糕'
        }],
        drink: [{
          image: '../../static/image/饮料.png',
          text: '碳酸饮料'
        }, {
          image: '../../static/image/饮料.png',
          text: '蛋白质饮料'
        }, {
          image: '../../static/image/饮料.png',
          text: '功能饮料'
        }, {
          image: '../../static/image/饮料.png',
          text: '果味饮料'
        }, {
          image: '../../static/image/饮料.png',
          text: '茶饮料'
        }, {
          image: '../../static/image/饮料.png',
          text: '即饮咖啡'
        }]
      }
    },
    methods: {
      dian(index) {
        this.curret = index
        console.log(index);
      }

    }
  }
</script>

<style lang="scss" scoped>
  .fenlei {
    padding: 0;
    margin: 0;
    border-radius: 20px;
    padding-top: 40rpx;

    .ch {
      height: 100vh;

      .menu {
        display: flex;
        width: 100%;
        height: 100%;

        .me {
          width: 25%;

          .textt {
            height: 80rpx;
            background-color: #f5f6f7;
            padding: 30rpx 0 0 30rpx;
          }

          .textt:hover {
            font-weight: bold;
            color: #fc7861;
            border-left: 3px solid #fc7861;
          }
        }

        .me-right {
          width: 75%;
          height: 100%;
          margin-left: 20rpx;

          .swiper {
            height: 100%;

            .title {
              font-weight: bold;
              padding-bottom: 30rpx;
              padding-top: 30rpx;
            }

            .leisure {
              display: flex;
              flex-wrap: wrap;

              .leisure-box {
                width: 32%;
                margin-left: 6rpx;
                text-align: center;

                .leisure-loop {
                  image {
                    height: 100rpx;
                    width: 80%;
                  }
                }
              }
            }

            .drink {
              display: flex;
              flex-wrap: wrap;

              .drink-box {
                width: 32%;
                margin-left: 6rpx;
                text-align: center;

                .drink-loop {
                  image {
                    height: 120rpx;
                    width: 80%;
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