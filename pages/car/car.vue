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
      <view>
        <uv-grid :border="false">
          <uv-grid-item v-for="(item,index) in baseList" :key="index">
            <uv-icon :customStyle="{paddingTop:20+'rpx'}" :name="item.name" :size="22"></uv-icon>
            <text class="grid-text">{{item.title}}</text>
          </uv-grid-item>
        </uv-grid>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 宫格
        baseList: [{
            name: 'photo',
            title: '李白'
          }, {
            name: 'lock',
            title: '韩信'
          }, {
            name: 'star',
            title: '刘备'
          },
          {
            name: 'star',
            title: '刘备'
          }
        ],
        loading: true,
        provinces: [], //省
        citys: [], //市
        areas: [], //区
        pickerValue: [0, 0, 0],
        defaultValue: [3442, 1, 2],
        address: '请选择城市' //地址
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
  .car {
    width: 100%;

    .top {
      padding-top: 44px;
      width: 100%;
      height: 300px;
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
        padding-top: 2%;
        padding-bottom: 2%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        justify-content: space-between;
        color: #fc7760;

        .a6 {
          margin-left: 2%;
        }
      }
    }
  }
</style>