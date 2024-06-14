<!-- 发布 -->
<template>
  <view class="publish">
    <view class="publish-box">
      <view class="top">
        <view class="input">
          <uv-textarea v-model="value" placeholder="买家都关心品牌型号、入手渠道、转手原因……"></uv-textarea>
          <uv-upload :fileList="fileList1" name="1" multiple :maxCount="10" @afterRead="afterRead" @delete="deletePic">
          </uv-upload>
        </view>
      </view>
      <view class="address">
        <view class="btn">{{this.address}}<uv-icon name="arrow-down" @click="open"></uv-icon></view>
        <uv-picker ref="picker" :columns="addressList" :loading="loading" keyName="name" @change="change"
          @confirm="confirm">
        </uv-picker>
      </view>
      <view class="bottom" v-for="(item,index) in list" :key="index">
        <view class="bottom-box">
          <view class="left">
            {{item.left}}
          </view>
          <view class="right">
            <text>{{item.right1}}</text>
            <text>{{item.right2}}</text>
            <text v-if="item.right3 = item.right3">{{item.right3}}</text>
            <text v-if="item.right4 = item.right4">{{item.right4}}</text>
          </view>
        </view>
      </view>
      <view class="contact">
        <view class="person">
          <view class="left">
            <image src="../../static/image/联系人.png" mode=""></image>
            <text>联系人</text>
          </view>
          <view class="right">
            请输入联系人
          </view>
        </view>
        <view class="phone">
          <view class="left">
            <image src="../../static/image/电话.png" mode=""></image>
            <text>联系电话</text>
          </view>
          <view class="right">
            请输入联系电话
          </view>
        </view>
      </view>
      <view class="line"></view>
      <view class="button">
        <uv-button type="primary" text="发布" color="#f7433d"></uv-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        fileList1: [],
        loading: true,
        provinces: [], //省
        citys: [], //市
        areas: [], //区
        pickerValue: [0, 0, 0],
        defaultValue: [3442, 1, 2],
        address: '请选择城市', //地址
        list: [{
          left: '分类',
          right1: '手机',
          right2: '电脑',
          right3: '普通数码相机',
          right4: '衣服'
        }, {
          left: '品牌',
          right1: 'vivo',
          right2: '华为',
          right3: 'APPle/苹果',
          right4: 'oppo'
        }, {
          left: '容量',
          right1: '32G',
          right2: '64G',
          right3: '128G',
          right4: '256G'
        }, {
          left: '成色',
          right1: '全新',
          right2: '几乎全新',
          right3: '轻微磕碰',
        }, {
          left: '拆修',
          right1: '无任何拆修',
          right2: '仅更换电池',
          // right3: '仅屏幕有维修'
        }],
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
      // 删除图片
      deletePic(event) {
        this[`fileList${event.name}`].splice(event.index, 1)
      },
      // 新增图片
      async afterRead(event) {
        // 当设置 multiple 为 true 时, file 为数组格式，否则为对象格式
        let lists = [].concat(event.file)
        let fileListLen = this[`fileList${event.name}`].length
        lists.map((item) => {
          this[`fileList${event.name}`].push({
            ...item
            // status: 'uploading',
            // message: '上传中'
          })
        })
        for (let i = 0; i < lists.length; i++) {
          const result = await this.uploadFilePromise(lists[i].url)
          let item = this[`fileList${event.name}`][fileListLen]
          this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
            status: 'success',
            message: '',
            url: result
          }))
          fileListLen++
        }
      },
      uploadFilePromise(url) {
        return new Promise((resolve, reject) => {
          let a = uni.uploadFile({
            url: 'http://192.168.2.21:7001/upload', // 仅为示例，非真实的接口地址
            filePath: url,
            name: 'file',
            formData: {
              user: 'test'
            },
            success: (res) => {
              setTimeout(() => {
                resolve(res.data.data)
              }, 1000)
            }
          });
        })
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
              console.log('获取的数据：', res);
              this.provinces = data.sort((left, right) => (Number(left.code) > Number(right.code) ? 1 : -1));
              console.log(this.provinces)
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
  .publish {
    padding: 0;
    margin: 0;
    border-radius: 20px;

    .publish-box {
      margin-top: 40rpx;


      .top {
        padding: 0 30rpx;

        .input {
          .uv-textarea {
            border: none;
          }

          .uv-upload {
            padding-bottom: 30rpx;
            border-bottom: 1px solid #b1b1b1;
          }
        }
      }

      .address {
        padding: 30rpx 30rpx;
        border-bottom: 1px solid #b1b1b1;

        .btn {
          background-color: #f5f5f5;
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          padding: 16rpx;
          border-right: 1px solid #ebebeb;
        }
      }

      .bottom {
        margin-top: 40rpx;
        padding: 0 30rpx;

        .bottom-box {
          display: flex;

          .right {
            margin-left: 12rpx;

            text {
              margin-left: 16rpx;
              background-color: #f2f2f2;
              text-align: center;
              padding: 10rpx 20rpx;
              border-radius: 20px;
            }
          }
        }
      }

      .contact {
        margin-top: 60rpx;
        padding: 0 30rpx;

        .person {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #b1b1b1;
          padding: 30rpx 10rpx;

          .left {
            width: 40%;

            image {
              width: 20%;
              height: 50rpx;
            }

            text {
              margin-left: 20rpx;
              color: #888888;
            }
          }

          .right {
            color: #888888;
          }
        }

        .phone {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #b1b1b1;
          padding: 30rpx 10rpx;

          .left {
            width: 40%;

            image {
              width: 20%;
              height: 50rpx;
            }

            text {
              margin-left: 20rpx;
              color: #888888;
            }
          }

          .right {
            color: #888888;
          }
        }
      }

      .line {
        height: 20rpx;
        background-color: #f5f5f5;
      }

      .button {
        margin-top: 10rpx;
        padding: 0 30rpx 40rpx;

        ::v-deep .uv-button--square {
          border-radius: 20px;
        }
      }
    }
  }
</style>