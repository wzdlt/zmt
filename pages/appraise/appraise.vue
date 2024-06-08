<!-- 评价 -->
<template>
  <view class="appraise">
    <view class="appraise-box">
      <view class="top">
        <view class="word">商品评价</view>
        <view class="star">
          <uv-rate active-color="#ffb800" size="30" inactive-color="#b2b2b2" :count="count" v-model="value"></uv-rate>
        </view>
        <view class="input">
          <uv-textarea v-model="value1" placeholder="请输入评价内容" border="none"></uv-textarea>
          <uv-upload :fileList="fileList1" name="1" multiple :maxCount="10" @afterRead="afterRead" @delete="deletePic">
          </uv-upload>
        </view>
      </view>
      <view class="bottom">
        <view class="word">商品评价</view>
        <view class="star">
          <uv-rate active-color="#ffb800" size="30" inactive-color="#b2b2b2" :count="count" v-model="star"></uv-rate>
        </view>
      </view>
      <view class="button">
        <uv-button type="primary" text="提交" color="#f7433d"></uv-button>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        count: 5,
        value: 0,
        star: 0,
        value1: '',
        fileList1: []
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .appraise {
    background-color: #f5f6f7;
    padding: 0;
    margin: 0;
    border-radius: 10px;

    .appraise-box {
      width: 90%;
      margin: 0 auto;
      padding-top: 40rpx;

      .top {
        padding-top: 20rpx;
        background-color: #fff;

        .word {
          font-size: 1.2rem;
          margin-left: 39%;
        }

        .star {
          padding-top: 20rpx;
          margin-left: 24%;
        }

        .input {
          width: 90%;
          margin: auto;
          margin-top: 20rpx;

          .uv-textarea {
            background-color: #fafafa;

          }

          uni-view {
            background-color: #fafafa;
            padding-left: 40rpx;
          }
        }
      }

      .bottom {
        background-color: #fff;
        margin-top: 40rpx;

        .word {
          padding-top: 40rpx;
          font-size: 1.2rem;
          margin-left: 39%;
        }

        .star {
          padding: 20rpx 0;
          margin-left: 24%;
        }
      }

      .button {
        margin-top: 60rpx;
        padding-bottom: 60rpx;

        ::v-deep .uv-button--square {
          border-radius: 20px;
        }
      }
    }
  }
</style>