<template>
  <view class="box">
    <view class="box-top">账号登录</view>
    <view class="box-center">
      <view class="login-view" style="">
        <view class="t-login">
          <form class="cl">
            <view class="t-a">
              <image src="../../static/image/loginphone.png" mode=""></image>
              <input type="number" name="phone" placeholder="手机号" maxlength="11" v-model="phone" />
            </view>
            <view class="t-a">
              <image src="../../static/image/login proving.png" mode=""></image>
              <input type="number" name="code" maxlength="18" placeholder="验证码" v-model="msgCode" />
              <view class="t-a1" @tap="yan()">获取验证码</view>
            </view>
            <button @tap="login()">登 录</button>
            <view class="reg" @tap="reg()">新用户<text style="color: #fc6045;">注册</text></view>
          </form>
        </view>
      </view>
    </view>
    <view class="box-bottom">
      <view class="box-bottom1">
        <view class="box-bottom1-left">
          <radio-group @change="chang">
            <label>
              <radio color="red" style="transform:scale(0.6)" />
            </label>
          </radio-group>
        </view>
        <view class="box-bottom1-right">
          同意正茂通<text style="color: #fc6045;">《用户协议》</text>及
          <text style="color: #fc6045;">《隐私政策》</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        phone: '', //手机号码
        msgCode: '', //验证码
      };
    },
    methods: {
      login() {
        var that = this
        if (!that.phone) {
          uni.showToast({
            title: '请输入您的手机号',
            icon: 'none'
          });
          return
        }
        if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
          uni.showToast({
            title: '请输入正确手机号',
            icon: 'none'
          });
          return;
        }
        if (!that.msgCode) {
          uni.showToast({
            title: '请输入您的验证码',
            icon: 'none'
          });
          return;
        }
        uni.showToast({
          title: '登录成功！',
          icon: 'none'
        });
        uni.switchTab({
          url: '/pages/index/index'
        })

      },
      // 获取验证码
      yan() {
        uni.showToast({
          title: '您的验证码是：1234',
          icon: 'none'
        });
      },
      // 注册按钮点击
      reg() {
        uni.showToast({
          title: '注册跳转',
          icon: 'none'
        });
      }
    }
  };
</script>

<style lang="scss">
  .box {
    .box-top {
      text-align: center;
      font-size: 26px;
      padding: 20px 0;
    }

    .box-center {
      .t-login {
        width: 90%;
        margin: auto;

        .cl {
          .t-a {
            border-radius: 25px;
            border: 1px solid #ccc;
            margin-bottom: 25px;
            box-sizing: border-box;
            position: relative;

            .t-a1 {
              position: absolute;
              right: 15px;
              top: 12px;
              color: #fc4424;
            }

            image {
              position: absolute;
              top: 8px;
              left: 15px;
              width: 30px;
              height: 30px;
            }

            input {
              height: 45px;
              padding-left: 50px;
            }
          }

          button {
            color: #fff;
            background-color: #fc4424;
            border-radius: 25px;
          }

          .reg {
            margin-top: 20px;
            text-align: center;
          }
        }
      }
    }

    .box-bottom {
      width: 100%;
      position: fixed;
      bottom: 10px;

      .box-bottom1 {
        margin: auto;
        width: 80%;
        display: flex;

        .box-bottom1-left {
          margin-top: -4px;
        }

        .box-bottom1-right {
          font-size: 12px;
          color: #878787;
        }
      }
    }
  }
</style>