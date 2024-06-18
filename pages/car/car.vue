<template>
  <view class="car">
    <view class="top">
      <!-- 头部 -->
      <view class="top-all">
        <uv-icon name="arrow-left" color="#ffffff" size="20"></uv-icon>
        <view class="title">正茂通养车</view>
      </view>
      <!-- 搜索 -->
      <view class="search">
        <view class="btn">{{this.address}}<uv-icon name="arrow-down" @click="open"></uv-icon></view>
        <uv-search placeholder="请输入搜索内容" :showAction="false"></uv-search>
        <uv-picker ref="picker" :columns="addressList" :loading="loading" keyName="name" @change="change"
          @confirm="confirm">
        </uv-picker>
      </view>
      <!-- 奥迪 -->
      <view class="audi">
        <view class="a6">奥迪A6 2020款 豪华动感型</view>
        <uv-icon name="arrow-right" color="#9d9c9c" size="20"></uv-icon>
      </view>
      <!-- 四宫格 -->
      <view class="palace">
        <uv-grid :col="4" :border="false">
          <uv-grid-item v-for="(item,index) in baseList" :key="index">
            <image :src="item.img" mode=""></image>
            <text class="grid-text">{{item.title}}</text>
          </uv-grid-item>
        </uv-grid>
      </view>
      <!-- 抵扣券 -->
      <view class="vouchers">
        <view class="left">
          <image src="../../static/image/抵扣券.png" mode=""></image>
          <view class="color">您有<text>2</text>张工时费抵扣券待使用</view>
        </view>
        <uv-icon name="arrow-right" color="#9d9c9c" size="20"></uv-icon>
      </view>
    </view>
    <!-- 主题1 -->
    <view class="goodshop">
      <view class="shop-top">
        <view>附近好店</view>
        <view>查看更多<uv-icon name="arrow-right" color="#cccccc" size="20"></uv-icon></view>
      </view>
      <!-- 3个盒子 -->
      <view class="bottom1" v-for="item in 3 " :key="item">
        <view class="bottom">
          <view class="bottom-left">
            <image src="../../static/image/鑫日汽修厂.png" mode=""></image>
          </view>
          <view class="bottom-right">
            <view class="p1">鑫日汽修厂 <text class="span1">1.2km</text> </view>
            <view class="bottom-right-top">
              <uv-rate :count="count" v-model="value" activeColor="#ffb800"></uv-rate>
              <text class="p2">服务次数：235</text>
            </view>
            <text class="p3">山东省临沂市河东区香港路与长安路...</text>
            <view class="bottom-right-bottom">
              <text v-for="item in list" :key="item.id">{{ item.title }}</text>
            </view>

          </view>
        </view>
      </view>
    </view>
    <!-- 轮播图 -->
    <view class="swiper">
      <uv-swiper :list="list1"></uv-swiper>
    </view>
    <!-- tabs -->
    <view class="tabs">
      <uv-tabs :list="list2" lineColor='#fc4424' @click="click" activeStyle='#030303' inactiveStyle='#8a8a8a'></uv-tabs>
      <view class="all1">
        <view class="oil" v-for="item in 6" :key="item">
          <view class="oil-top">
            <image src="../../static/image/commodity.png" mode=""></image>
          </view>
          <view class="one">美孚(Mobil)金装美孚1号0W-30 全合成机...</view>
          <view class="two">规格:全合成|0W-304L</view>
          <view class="two">众多原厂认证 高效节油 强劲动力</view>
          <view class="three">￥120 <text class="price1">.00</text> <text class="price2">￥180.00</text> </view>
          <view class="fall">直降￥38.00</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // tabs
        list2: [{
          name: '推荐',
        }, {
          name: '小保养',
        }, {
          name: '保养搭配推荐'
        }, {
          name: '制动系统'
        }, {
          name: '冷却液'
        }, ],
        // 轮播图
        list1: [
          'https://tse1-mm.cn.bing.net/th/id/OIP-C.a_EoENTQYGN2kAx0rbZsCwHaDr?w=349&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          'https://tse4-mm.cn.bing.net/th/id/OIP-C.1byiKGDfMs2PfB2xPnm5vwHaEU?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
          'https://tse2-mm.cn.bing.net/th/id/OIP-C.pYQmlBCY6uVmQnNASHlEqwAAAA?w=285&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
        ],
        // 保养循环
        list: [{
            id: "1",
            title: '洗车'
          },
          {
            id: "2",
            title: '美容'
          },
          {
            id: "3",
            title: '维修'
          },
          {
            id: "4",
            title: '轮胎'
          },
          {
            id: "5",
            title: '保养'
          },
          {
            id: "6",
            title: '改装'
          }
        ],
        // 评分
        count: 5,
        value: 4,
        // 宫格
        baseList: [{
            name: 'photo',
            img: '../../static/image/做保养.png',
            title: '做保养'
          }, {
            img: '../../static/image/换轮胎.png',
            name: 'lock',
            title: '换轮胎'
          }, {
            img: '../../static/image/汽车服务.png',
            name: 'star',
            title: '汽车服务'
          },
          {
            img: '../../static/image/汽车美容.png',
            name: 'star',
            title: '汽车美容'
          }
        ],
        loading: true,
        provinces: [], //省
        citys: [], //市
        areas: [], //区
        pickerValue: [0, 0, 0],
        defaultValue: [3442, 1, 2],
        address: '泰安市' //地址
      }
    },
    created() {
      this.getData();
    },
    computed: {
      addressList() {
        return [this.provinces, this.citys, this.areas];
      }
    },
    methods: {
      getData() {
        uni.request({
          method: 'GET',
          url: '/static/regions.json',
          success: res => {
            const {
              statusCode,
              data
            } = res
            if (statusCode === 200) {
              // console.log('获取的数据：', res);
              this.provinces = data.sort((left, right) => (Number(left.code) > Number(right.code) ? 1 : -1));
              // console.log(this.provinces)
              this.handlePickValueDefault()
              setTimeout(() => {
                this.loading = false
              }, 200)
            }
          }
        })
      },
      handlePickValueDefault() {
        // 设置省
        this.pickerValue[0] = this.provinces.findIndex(item => Number(item.id) === this.defaultValue[0]);
        // 设置市
        this.citys = this.provinces[this.pickerValue[0]]?.children || [];
        this.pickerValue[1] = this.citys.findIndex(item => Number(item.id) === this.defaultValue[1]);
        // 设置区
        this.areas = this.citys[this.pickerValue[1]]?.children || [];
        this.pickerValue[2] = this.areas.findIndex(item => Number(item.id) === this.defaultValue[2]);
        // 重置下位置
        this.$refs.picker.setIndexs([this.pickerValue[0], this.pickerValue[1], this.pickerValue[2]], true);
      },
      change(e) {
        if (this.loading) return;
        const {
          columnIndex,
          index,
          indexs
        } = e
        // 改变了省
        if (columnIndex === 0) {
          this.citys = this.provinces[index]?.children || []
          this.areas = this.citys[0]?.children || []
          this.$refs.picker.setIndexs([index, 0, 0], true)
        } else if (columnIndex === 1) {
          this.areas = this.citys[index]?.children || []
          this.$refs.picker.setIndexs(indexs, true)
        }
      },
      open() {
        this.$refs.picker.open();
        this.handlePickValueDefault()
      },
      confirm(e) {
        this.address = e.value[1].name
        uni.showToast({
          icon: 'none',
          title: `${e.value[0].name}/${e.value[1].name}/${e.value[2].name}`
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  page {
    background-color: #f5f5f5;
  }

  .car {
    width: 100%;

    .top {
      padding-top: 44px;
      width: 100%;
      height: 220px;
      background: linear-gradient(#fc4424, #f6e5e2);

      .top-all {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: left;

        .title {
          font-size: 1.2rem;
          margin: auto;
          color: #ffffff;
        }
      }

      //搜索
      .search {
        width: 90%;
        margin: auto;
        margin-top: 5%;
        display: flex;
        background-color: #f5f5f5;
        border-radius: 30rpx;
        overflow: hidden;

        .btn {
          background-color: #f5f5f5;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          padding: 16rpx;
          border-right: 1px solid #ebebeb;
        }
      }

      // 奥迪
      .audi {
        width: 90%;
        margin: auto;
        background-color: #ffeae7;
        display: flex;
        margin-top: 2%;
        padding-top: 3%;
        padding-bottom: 3%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: space-between;
        color: #fc7760;

        .a6 {
          margin-left: 3%;
        }

        .uv-icon {
          margin-right: 3%;
        }
      }

      // 宫格
      .palace {
        width: 90%;
        margin: auto;
        border-bottom: 1px solid #fcfcfc;
        background-color: #ffffff;
        padding-top: 5%;
        padding-bottom: 6%;

        image {
          width: 80%;
          height: 60px;
        }
      }

      // 抵扣券
      .vouchers {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        background-color: #ffffff;
        padding-top: 3%;
        padding-bottom: 3%;

        .left {
          width: 80%;
          display: flex;
          align-items: center;
          margin-left: 3%;

          image {
            width: 50rpx;
            height: 50rpx;
          }

          .color {
            margin-left: 2%;
            font-size: 0.8rem;

            text {
              color: #fc4424;
            }
          }
        }

        .uv-icon {
          margin-right: 3%;
        }
      }
    }

    // 主题1
    .goodshop {
      width: 90%;
      margin: auto;
      margin-top: 25%;
      background-color: #ffffff;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      .shop-top {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        padding-top: 3%;
        padding-bottom: 3%;
        border-bottom: 1px solid #bfbfc1;

        view:nth-child(2) {
          width: 40%;
          display: flex;
          justify-content: right;
          align-items: center;
          color: #cccccc;
        }
      }

      .bottom1 {
        width: 100%;
        margin: auto;
        margin-top: 10px;
        border-radius: 5px;
        background-color: #ffffff;
        padding-bottom: 10px;

        .bottom {
          width: 100%;
          margin: auto;
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          padding-top: 2%;
          padding-bottom: 2%;

          .bottom-left {
            margin-left: 3%;
            width: 23%;

            image {
              width: 100%;
              height: 100%;
            }
          }

          .bottom-right {
            width: 75%;
            margin-left: 1%;
            margin-right: 3%;

            .bottom-right-top {

              display: flex;
              justify-content: left;

              .p2 {
                margin-left: 2%;
                font-size: 0.8rem;
              }
            }

            .p1 {
              margin-top: 1%;
              margin-left: 2%;
              font-size: 1rem;
              font-weight: bold;
              display: flex;
              justify-content: space-between;

              .span1 {
                margin-top: 6px;
                color: #a0a0a0;
                font-size: 0.7rem;
              }
            }

            .p3 {
              margin-top: 1%;
              margin-left: 2%;
              font-size: 0.8rem;
            }

            .bottom-right-bottom {
              display: flex;
              justify-content: left;

              text {
                background-color: #ffeae7;
                color: #fc664c;
                border-radius: 5px;
                font-size: 0.6rem;
                margin-left: 2%;
                margin-top: 1%;
                width: 12%;
                text-align: center;
                border: 1px solid red;

              }
            }
          }

        }
      }
    }

    // 轮播图
    .swiper {
      width: 90%;
      margin: auto;
      margin-top: 10px;
    }

    // tabs
    .tabs {
      width: 90%;
      margin: auto;

      .all1{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .oil {
          margin-top: 5%;
          overflow: hidden;
          border-radius: 10px;
          width: 48%;
          background-color: #ffffff;
          
          .oil-top {
            width: 100%;
        
            image {
              width: 100%;
              height: 300rpx;
            }
          }
        
          .one {
            padding: 1%;
            font-size: 30rpx;
          }
        
          .two {
            padding: 1%;
            margin-top: 2%;
            font-size: 20rpx;
            color: #cecece;
          }
        
          .three {
            padding: 1%;
            color: #fc4a2c;
        
            .price1 {
              font-size: 25rpx;
            }
        
            .price2 {
              font-size: 25rpx;
              text-decoration: line-through;
              color: #bdbdbd;
            }
          }
        
          .fall {
            margin-bottom: 5%;
            margin-top: 2%;
            border-radius: 5px;
            margin-left: 2%;
            color: #f5f5f5;
            width: 40%;
            text-align: center;
            height: 20px;
            line-height: 20px;
            font-size: 20rpx;
            background-color: #fc4424;
            font-size: 20rpx;
          }
        }
      }
    }
  }
</style>