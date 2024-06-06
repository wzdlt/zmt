<template>
  <view class="box">
    <!-- 搜索内容 -->
    <view class="inpu">
      <uv-input placeholder="请输入您要搜索的内容" prefixIcon="search" prefixIconStyle="font-size: 22px;color: #909399"
        shape="circle" @click="search()"></uv-input>
    </view>
    <!-- 轮播图 -->
    <view class="swiper">
      <uv-swiper :list="list"></uv-swiper>
    </view>
    <!-- 十宫格 -->
    <view>
      <uv-grid :col="5">
        <uv-grid-item v-for="(item,index) in baseList" :key="index">
          <uv-icon :customStyle="{paddingTop:20+'rpx'}" :name="item.name" :size="50"></uv-icon>
          <text class="grid-text">{{item.title}}</text>
        </uv-grid-item>
      </uv-grid>
    </view>
    <!-- 官方活动 -->
    <view class="gonggao">
      <view class="gong-left">
        官方公告
      </view>
      <view class="gong-center">
        左左街声明，快来发布买家秀活动
      </view>
      <view class="gong-right">
        >
      </view>
    </view>
    <!-- 抢购区 -->
    <view class="rob">
      <view class="rob-left">
        <view class="role-all">
          <span>抢购区</span>
          <view class="rob-size">
            抢单更优惠
          </view>
          <view class="rob-go">GO ></view>
        </view>
      </view>
      <view class="rob-right">
        <view class="role-all">
          <span>红包区</span>
          <view class="rob-size">
            更多商品免费领
          </view>
          <view class="rob-go">GO ></view>
        </view>
      </view>
    </view>
    <!-- 限时秒杀 -->
    <view class="flsh">
      <view class="flsh-top">
        <view class="flsh-left">
          <span>限时秒杀</span>
          <view class="flsh-top1">
            <image src="../../static/直播中.png" mode=""></image>
            <view class="flsh-top1-1">直播中</view>
          </view>
        </view>

        <view class="flsh-top2">
          查看更多>
        </view>
      </view>
      <view class="flsh-two">
        <image src="../../static/商品名称.png" mode=""></image>
        <image src="../../static/商品名称2.png" mode=""></image>
        <image src="../../static/商品名称3.png" mode=""></image>
      </view>
    </view>
    <!-- 热卖推荐 -->
    <view class="sell">
      <view class="sell-top">热卖推荐</view>
      <view class="sell-box">
        <!-- 1 -->
        <view class="sell-box1"  v-for="item in recommend" :key="item.id">
          <image :src="item.img" mode=""></image>
          <view class="sell-size">
            <view class="sell-size1">
              <span>{{item.battalion}}</span>
              {{item.title}}
            </view>
            <view class="sell-size2">
              {{item.pack}}
              <span>{{item.price}}</span>
            </view>
            <view class="sell-size3">
              {{item.price1}}
            </view>
            <view class="sell-size4">
              <view class="sell-size4-1">{{item.price2}}</view>
              月销{{item.Sales}}
            </view>
          </view>
          <view class="sell-size5">
            <image src="../../static/热卖.png" mode=""></image>
            <view class="sell-size5-1">
              邀请新人参与抢购再优惠15%
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
        // 搜索框
        value: '',
        // 热卖推荐
        recommend: [{
          id: 1,
          img: '../../static/鞋子.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        },
        {
          id: 2,
          img: '../../static/手机.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        },
        {
          id: 3,
          img: '../../static/电脑.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        },
        {
          id: 4,
          img: '../../static/电动车.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        },
        {
          id: 5,
          img: '../../static/监控.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        },
        {
          id: 6,
          img: '../../static/人物.png',
          battalion: "自营",
          title: '裤子男士休闲长裤加绒加厚束脚裤潮年...',
          pack:'送红包',
          price:'￥50',
          price1:'￥120.00',
          price2:'￥180.00',
          Sales:'180'
        }],
        // 轮播图
        list: [
          'https://cdn.uviewui.com/uview/swiper/swiper1.png',
          'https://cdn.uviewui.com/uview/swiper/swiper2.png',
          'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        ],
        // 十宫格
        baseList: [{
          name: '/static/自营.png',
          title: '商城自营'
        }, {
          name: '/static/加油.png',
          title: '加油'
        }, {
          name: '/static/酒店.png',
          title: '酒店'
        }, {
          name: '/static/打车出行.png',
          title: '打车出行'
        }, {
          name: '/static/车票.png',
          title: '车票'
        }, {
          name: '/static/充值.png',
          title: '充值中心'
        }, {
          name: '/static/养车.png',
          title: '养车'
        }, {
          name: '/static/银行.png',
          title: '银行特惠'
        }, {
          name: '/static/二手.png',
          title: '二手交易'
        }, {
          name: '/static/分类.png',
          title: '全部分类'
        }]
      }
    },
    methods: {
      // 搜索框
      change(e) {
        console.log('change', e);
      },
      search() {
        uni.navigateTo({
          url: '../search/search'
        });
      }
    }
  }
</script>

<style lang="less" scoped>
  .box {
    width: 100%;
    margin: auto;
  }

  // 输入框
  .inpu {
    margin: 10rpx;
  }

  // 十宫格
  .grid-text {
    font-size: 26rpx;
    color: black;
  }

  // 官方活动
  .gonggao {
    width: 95%;
    margin: auto;
    height: 70rpx;
    margin-top: 40rpx;
    background-color: #f5f5f5;
    border-radius: 10rpx;
    display: flex;
    justify-content: space-between;

    .gong-left {
      width: 30%;
      height: 60rpx;
      margin: 5rpx;
      text-align: center;
      font-size: 40rpx;
      color: #fc4121;
      background-color: #ffffff;
    }

    .gong-center {
      font-size: 28rpx;
      text-align: center;
      padding-top: 15rpx;
      color: #acacac;
    }

    .gong-right {
      padding-top: 12rpx;
      color: #acacac;
    }
  }

  // 抢购区
  .rob {
    width: 95%;
    height: 220rpx;
    margin: auto;
    margin-top: 45rpx;
    display: flex;
    justify-content: space-between;

    .rob-left {
      width: 48%;
      border-radius: 20rpx;
      background: linear-gradient(to right, #ffe9c5, #fff4e3);

      .role-all {
        width: 60%;
        margin: 40rpx;
        color: #d38d35;

        span {
          font-size: 45rpx;
          padding-bottom: 10rpx;
        }

        .rob-size {
          font-size: 28rpx;
          padding-bottom: 10rpx;
        }

        .rob-go {
          width: 52%;
          background-color: #d48f39;
          border-radius: 20rpx;
          color: #fff;
          text-align: center;
        }
      }
    }

    .rob-right {
      width: 48%;
      border-radius: 20rpx;
      background: linear-gradient(to right, #ffcfc8, #fee5e0);

      .role-all {
        width: 65%;
        margin: 40rpx;
        color: #d84f4d;

        span {
          font-size: 45rpx;
          padding-bottom: 10rpx;
        }

        .rob-size {
          font-size: 28rpx;
          padding-bottom: 10rpx;
        }

        .rob-go {
          width: 52%;
          background-color: #d9504e;
          border-radius: 20rpx;
          color: #fff;
          text-align: center;
        }
      }
    }
  }

  //限时秒杀
  .flsh {
    width: 95%;
    margin: auto;
    margin-top: 5%;
    background-color: #fb0d48;
    border-radius: 10rpx;
    padding-bottom: 3%;

    .flsh-top {
      display: flex;
      justify-content: space-between;
      padding-left: 5%;
      padding-right: 5%;
      padding-bottom: 3%;

      .flsh-left {
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .flsh-top1 {
          width: 50%;
          display: flex;
          justify-content: space-around;
          border-radius: 30rpx;
          color: #fb0844;
          background-color: #fff;
          margin-top: 20rpx;
          align-items: center;

          image {
            border-radius: 30rpx;
            margin-left: 5%;
            width: 20px;
            height: 20px;

          }

          .flsh-top1-1 {
            font-size: 0.8rem;
          }
        }

      }

      span {
        font-size: 1rem;
        margin-top: 10rpx;
        color: #fff;
      }


      .flsh-top2 {
        color: #fff;
        margin-top: 20rpx;
      }
    }

    .flsh-two {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-around;

      image {
        width: 30%;
        height: 270rpx;
      }
    }
  }

  // 热卖推荐
  .sell {
    width: 100%;
    background-color: #f5f5f5;

    .sell-top {
      text-align: center;
      font-size: 40rpx;
      padding: 30rpx;
    }

    .sell-box {
      width: 95%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .sell-box1 {
        width: 48%;
        margin-bottom: 25rpx;

        image {
          width: 100%;
          height: 300rpx;
        }

        .sell-size {
          width: 100%;
          background-color: #fff;

          .sell-size1 {
            font-size: 30rpx;

            span {
              background-color: #fc4424;
              color: #fff;
              font-size: 25rpx;
              border-radius: 10rpx;
            }
          }
        }

        .sell-size2 {
          margin-top: 10rpx;
          width: 42%;
          font-size: 24rpx;
          border-radius: 10rpx;
          background-color: #fff;
          color: #fd5d57;

          span {
            border: 1px solid red;
            border-radius: 10rpx;
            background-color: #fc4424;
            color: #fff;
          }
        }

        .sell-size3 {
          color: #fc4120;
        }

        .sell-size4 {
          width: 95%;
          display: flex;
          justify-content: space-between;
          color: #9f9f9f;
          font-size: 26rpx;

          .sell-size4-1 {
            font-size: 26rpx;
            text-decoration: line-through;
            color: #9f9f9f;
          }
        }

        .sell-size5 {
          width: 100%;
          height: 40rpx;
          display: flex;
          background-color: #fff8f6;

          image {
            width: 15%;
            height: 30rpx;
            padding-top: 5rpx;
          }

          .sell-size5-1 {
            font-size: 20rpx;
            padding-top: 5rpx;
          }
        }
      }

    }
  }
</style>