<template>
  <view class="box">
    <view class="box1">
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>代理名称</view>
        <view><input type="text" placeholder="请输入公司名称" /></view>
      </view>
      <view class="box1-2">
        <view class="box1-2-left"><text style="color: #fc492a;margin-right: 5px;">*</text>logo</view>
        <view class="box1-2-right">
          <image src="../../static/image/addimage.png" v-if="logoimage" @click="huoqu"></image>
          <view class="box1-2-right1" v-for="(image, index) in logoimage">
            <image :src="image" @click="bigImg(image)"></image>
            <view class="box1-2-right2" @click="bindImg(index)">-</view>
          </view>
        </view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>联系人姓名</view>
        <view><input type="text" placeholder="请填写联系人姓名" /></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>身份证号</view>
        <view><input type="idcard" placeholder="请填写身份证号" /></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>联系电话</view>
        <view><input type="number" placeholder="请填写联系电话" /></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>验证码</view>
        <view style="display: flex;">
          <input type="number" placeholder="请填入验证码" />
          <text style="color: #fc492a;margin-left: 10px;">获取验证码</text>
        </view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>商家地址</view>
        <view><input type="number" placeholder="请填写门店地址" /></view>
      </view>
    </view>
    <view class="box2">
      <button>提交申请</button>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        logoimage: [] // 存储选择的图片路径
      };
    },
    methods: {
      huoqu() {
        let that = this
        uni.chooseImage({
          count: 1, // 图片数量，这里设置为6
          sizeType: ['original', 'compressed'], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为二者都有
          sourceType: ['album', 'camera'], // 指定选择图片的来源，这里设置为相册和相机
          success: (res) => {
            console.log(res.tempFilePaths)
            that.logoimage.push(res.tempFilePaths[0]);
          },
          fail: (err) => {
            console.log('选择图片失败', err);
          }
        });
      },
      bindImg(index) {
        this.logoimage.splice(index, 1)
      },
      bigImg(url) {
        uni.previewImage({
          urls: this.logoimage,
        });
      }
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    height: 100vh;

    .box1 {
      background-color: #fff;

      .box1-1 {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;

        input {
          text-align: right;
        }
      }

      .box1-2 {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;

        .box1-2-right {
          width: 80%;
          border: 1px solid #000;
          image {
            float: right;
            width: 60px;
            height: 60px;

          }

          .box1-2-right1 {
            width: 60px;
            height: 60px;
            position: relative;
        
            image {
              width: 60px;
              height: 60px;
            }

            .box1-2-right2 {
              position: absolute;
              top: 0;
              right: 0;
              color: red;
              font-size: 20px;
            }
          }
        }
      }
    }

    .box2 {
      width: 90%;
      margin: auto;
      position: fixed;
      bottom: 0;

      button {
        color: #fff;
        background-color: #fc4424;
        border-radius: 25px;
      }
    }
  }
</style>