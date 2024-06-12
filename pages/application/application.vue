<!-- 二手交易商申请 -->
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
            <view class="box1-2-right2" @click="bindImg(index)">
              <image src="../../static/image/delete.png" mode=""></image>
            </view>
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
        <view><input type="text" placeholder="请填写门店地址" /></view>
      </view>

      <view class="box1-5">
        <view class="box1-2-left"><text style="color: #fc492a;margin-right: 5px;">*</text>上传身份证</view>
        <view class="box1-2-right">
          <view class="box1-2-right-1">
            <image src="../../static/image/addimage.png" v-if="logoimage" @click="huoqu1"></image>
          </view>
          <view class="box1-2-right-1">
            <image src="../../static/image/addimage.png" v-if="logoimage" @click="huoqu1"></image>
          </view>
          <view class="box1-2-right1" v-for="(image, index) in logoimage1">
            <image :src="image" @click="bigImg(image)"></image>
            <view class="box1-2-right2" @click="bindImg(index)">
              <image src="../../static/image/delete.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
      <view class="box1-5">
        <view class="box1-2-left"><text style="color: #fc492a;margin-right: 5px;">*</text>商家资质证件(支持多张图片上传)</view>
        <view class="box1-2-right">
          <view class="box1-2-right-1">
            <image src="../../static/image/addimage.png" v-if="logoimage" @click="huoqu2"></image>
          </view>
          <view class="box1-2-right1" v-for="(image, index) in logoimage2">
            <image :src="image" @click="bigImg(image)"></image>
            <view class="box1-2-right2" @click="bindImg(index)">
              <image src="../../static/image/delete.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>
      <view class="box1-5">
        <view class="box1-2-left"><text style="color: #fc492a;margin-right: 5px;">*</text>商家门店图片</view>
        <view class="box1-2-right">
          <view class="box1-2-right-1">
            <image src="../../static/image/addimage.png" v-if="logoimage" @click="huoqu3"></image>
          </view>
          <view class="box1-2-right1" v-for="(image, index) in logoimage3">
            <image :src="image" @click="bigImg(image)"></image>
            <view class="box1-2-right2" @click="bindImg(index)">
              <image src="../../static/image/delete.png" mode=""></image>
            </view>
          </view>
        </view>
      </view>

      <view class="box1-3">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>商家介绍</view>
        <view><textarea @blur="bindTextAreaBlur" placeholder="请填写商家介绍" auto-height /></view>
      </view>
      <view class="box1-4">
        <view class="box1-4-1">
          <checkbox-group>
            <label>
              <checkbox value="cb" />
            </label>
          </checkbox-group>
          同意代理<text style="color: #fc4424  ;">入驻协议</text>
        </view>
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
        logoimage: [], // 存储选择的图片路径
        logoimage1: [], // 存储选择的图片路径
        logoimage2: [], // 存储选择的图片路径
        logoimage3: [] // 存储选择的图片路径
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
      },
      huoqu1() {
        let that = this
        uni.chooseImage({
          count: 1, // 图片数量，这里设置为6
          sizeType: ['original', 'compressed'], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为二者都有
          sourceType: ['album', 'camera'], // 指定选择图片的来源，这里设置为相册和相机
          success: (res) => {
            console.log(res.tempFilePaths)
            that.logoimage1.push(res.tempFilePaths[0]);
          },
          fail: (err) => {
            console.log('选择图片失败', err);
          }
        });
      },
      bindImg(index) {
        this.logoimage1.splice(index, 1)
      },
      bigImg(url) {
        uni.previewImage({
          urls: this.logoimage1,
        });
      },
      huoqu2() {
        let that = this
        uni.chooseImage({
          count: 1, // 图片数量，这里设置为6
          sizeType: ['original', 'compressed'], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为二者都有
          sourceType: ['album', 'camera'], // 指定选择图片的来源，这里设置为相册和相机
          success: (res) => {
            console.log(res.tempFilePaths)
            that.logoimage2.push(res.tempFilePaths[0]);
          },
          fail: (err) => {
            console.log('选择图片失败', err);
          }
        });
      },
      bindImg(index) {
        this.logoimage2.splice(index, 1)
      },
      bigImg(url) {
        uni.previewImage({
          urls: this.logoimage2,
        });
      },
      huoqu3() {
        let that = this
        uni.chooseImage({
          count: 1, // 图片数量，这里设置为6
          sizeType: ['original', 'compressed'], // 指定选择的图片类型，可以选择原图和压缩图，这里设置为二者都有
          sourceType: ['album', 'camera'], // 指定选择图片的来源，这里设置为相册和相机
          success: (res) => {
            console.log(res.tempFilePaths)
            that.logoimage3.push(res.tempFilePaths[0]);
          },
          fail: (err) => {
            console.log('选择图片失败', err);
          }
        });
      },
      bindImg(index) {
        this.logoimage3.splice(index, 1)
      },
      bigImg(url) {
        uni.previewImage({
          urls: this.logoimage3,
        });
      }
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #ccc;
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
        line-height: 60px;

        .box1-2-right {
          width: 80%;
          display: flex;
          justify-content: right;

          image {
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
              top: -14px;
              right: 0;

              image {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }

      .box1-3 {
        // display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;

        textarea {
          width: 100%;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px;
          border: 1px solid #ccc;
          margin-top: 15px;
        }
      }

      .box1-4 {
        // display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;
        color: #9c9c9c;

        .box1-4-1 {
          display: flex;
        }
      }

      .box1-5 {
        // display: flex;
        // justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding: 15px 10px;

        .box1-2-left {
          margin-bottom: 10px;
        }

        .box1-2-right {
          width: 100%;
          display: flex;
          justify-content: space-between;

          .box1-2-right-1 {
            width: 47%;
            height: 100px;
            border-radius: 10px;
            border: 2px solid #fc4424;
            display: flex;
            align-items: center;
            justify-content: center;

            image {
              width: 30px;
              height: 30px;

            }
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

              image {
                width: 20px;
                height: 20px;
              }
            }
          }
        }
      }
    }

    .box2 {
      width: 95%;
      margin: auto;
      padding: 30px 0 0;

      button {
        color: #fff;
        background-color: #fc4424;
        border-radius: 25px;
      }
    }
  }
</style>