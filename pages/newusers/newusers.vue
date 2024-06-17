<template>
  <view class="newusers">

    <view class="top">
      <!-- 头部 -->
      <view class="top-all">
        <view class="title">正茂通养车</view>
      </view>
      <!-- 搜索 -->
      <view class="search">
        <view class="btn" @click="open1">{{this.address}}<uv-icon name="arrow-down" @click="open"></uv-icon></view>
        <uv-search placeholder="请输入搜索内容" :showAction="false"></uv-search>
        <uv-picker ref="picker" :columns="addressList" :loading="loading" keyName="name" @change="change"
          @confirm="confirm">
        </uv-picker>
      </view>
      <!-- 奥迪 -->
      <view class="audi">
        <view class="a6">添加爱车 <text>享专属服务</text></view>
        <view class="addcar"><button class="btn">添加爱车</button></view>
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
    <!-- 新人专享 -->
    <view class="exclusive">
      <view class="left"></view>
      <view class="center">
        <image src="../../static/新人专享.png" mode=""></image> <text>新人专享</text>
      </view>
      <view class="right"></view>
    </view>
    <!-- 5个盒子 -->
    <view class="box5">
      <view class="all" v-for="item in 5" :key="item">
        <view class="body" v-for='item in commodity' :key="item.id">
          <view class="body-center">
            <image :src="item.img" mode=""></image>
          </view>
          <view class="body-right">
            <view class="one">{{item.title1}}</view>
            <view class="two">{{item.title2}}</view>
            <view class="three">{{item.title3}}</view>
            <view class="four">
              <view class="span2">{{item.title4}}
                <image src="../../static/image/三角.png" mode=""></image>
              </view>
              <text class="span1">送100%红包</text>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 弹出层 -->
    <view class="layers">
      <uv-popup ref="popup" mode="center" @change="change1" round="20">
        <view class="layers1">
          <uv-icon @click="close" name="close" style="display: flex;justify-content: right;"></uv-icon>
          <text class="text1">当前地区没有服务商，请重新选择您的位置</text>
          <text class="text2"> <button class="btn">确定</button> </text>
        </view>
      </uv-popup>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 循环5个盒子
        commodity: [{
          id: 1,
          img: "../../static/image/润滑油1.png",
          title1: "美孚(Mobil) 金装美孚1号0W-30全合成机油润滑油",
          title2: "规格:全合成|0W-30|4L",
          title3: "众多原厂认证 高效节油 强劲动力",
          title4: "￥439",
        }],
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
        address: '上海' //地址
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
      // 弹出层
      open1() {
        this.$refs.popup.open('layers');
      },
      close(){
        this.$refs.popup.close('layers');
      },
      change1(e) {
        console.log('弹窗状态改变：', e);
      },
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

  .newusers {
    width: 100%;

    // 弹出层
    .layers {

      width: 100%;

      .layers1 {
        padding: 10%;

        .text1 {
          margin-top: 5%;
          margin-top: 5%;
          display: flex;
          text-align: center;
        }

        .text2 {
          .btn {
            height: 35px;
            line-height: 35px;
            background-color: #f7433d;
            border-radius: 10px;
            margin-top: 5%;
            color: #fff;
          }

        }
      }

    }

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

          text {
            color: #000000;
          }
        }

        .addcar {
          margin-right: 2%;

          .btn {
            height: 25px;
            line-height: 25px;
            font-size: 0.8rem;
            border-radius: 20px;
            background-color: #fc4424;
            color: #ffffff;
          }
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

    // 新人专享
    .exclusive {
      width: 50%;
      margin: auto;
      margin-top: 100px;
      display: flex;
      justify-content: space-between;

      .left {
        width: 15%;
        border-top: 1px solid red;
        margin-top: 5%;
      }

      .center {
        width: 60%;
        display: flex;
        align-items: center;

        image {
          width: 20px;
          height: 20px;
        }

        text {
          color: red;
          margin-left: 10%;
        }
      }

      .right {
        margin-top: 5%;
        width: 15%;
        border-top: 1px solid red;
      }
    }

    // 5个盒子
    .box5 {
      width: 90%;
      margin: auto;
      margin-top: 3%;

      .all {
        background-color: #ffffff;
        padding: 2%;
        margin-top: 2%;

        .body {
          margin-top: 3%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 2%;
          border-bottom: 1px solid #f8f8f8;

          .body-left {
            width: 6%;
            margin-top: 13%;
            height: 100%;
          }

          .body-center {
            width: 25%;

            image {
              width: 100%;
              height: 100%;
            }
          }

          .body-right {

            width: 68%;

            .one {
              font-size: 0.9rem;
              padding-bottom: 2%;
            }

            .two {
              font-size: 0.7rem;
              color: #cdcdcd;
            }

            .three {
              font-size: 0.7rem;
              color: #cdcdcd;
            }

            .four {
              width: 100%;
              font-size: 1rem;
              color: #fc6146;
              padding-top: 2%;
              padding-bottom: 2%;
              display: flex;
              justify-content: left;
              align-items: center;

              .span2 {
                height: 20px;
                line-height: 20px;
                text-align: center;
                width: 30%;
                color: #ffffff;
                display: flex;
                justify-content: left;
                background-color: #fc4424;
                border-top-left-radius: 2px;
                border-bottom-left-radius: 2px;

                image {
                  width: 100%;
                  margin-left: 10%;
                  height: 20px;
                }
              }

              .span1 {
                color: red;
                height: 20px;
                line-height: 20px;
                font-size: 0.7rem;
                text-align: center;
                width: 30%;
                border-top-right-radius: 2px;
                border-bottom-right-radius: 2px;
                background-color: #fcebc8;
              }
            }
          }
        }

      }
    }
  }
</style>