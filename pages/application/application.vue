<!-- 二手交易商申请 -->
<template>
  <view class="application">
    <uv-form :model="form" :rules="rules" ref="form">
      <uv-form-item label="名称" prop="firm">
        <uv-input v-model="form.firm" placeholder="请输入公司名称" />
      </uv-form-item>
      <uv-form-item label="姓名" prop="username">
        <uv-input v-model="form.username" placeholder="请输入联系人姓名" />
      </uv-form-item>
      <uv-form-item label="身份证号" prop="card">
        <uv-input v-model="form.card" placeholder="请输入身份证号" />
      </uv-form-item>
      <uv-form-item label="电话" prop="mobile">
        <uv-input v-model="form.mobile" placeholder="请输入联系电话" />
      </uv-form-item>
      <uv-form-item label="验证码" prop="captcha">
        <uv-input v-model="form.captcha" placeholder="请输入验证码" />
      </uv-form-item>
      <uv-form-item label="地址" prop="address">
        <uv-input v-model="form.addresss" placeholder="请输入门店地址" />
      </uv-form-item>
      <uv-form-item prop="pics">
        <view class="text">照片</view>
        <uv-upload v-model="form.pics" :fileList="fileList" name="1" multiple :maxCount="2" @afterRead="afterRead"
          @delete="deletePic" :previewFullImage="true"></uv-upload>
      </uv-form-item>
      <uv-form-item>
        <view class="text">商家资质证件</view>
        <uv-upload v-model="form.pics" :fileList="fileList" name="1" multiple :maxCount="2" @afterRead="afterRead"
          @delete="deletePic" :previewFullImage="true"></uv-upload>
      </uv-form-item>
      <uv-form-item prop="pics">
        <view class="text">商家门店图片</view>
        <uv-upload v-model="form.pics" :fileList="fileList" name="1" multiple :maxCount="2" @afterRead="afterRead"
          @delete="deletePic" :previewFullImage="true"></uv-upload>
      </uv-form-item>
      <uv-form-item prop="introduce">
        <view class="text">商家介绍</view>
        <uv-textarea v-model="form.introduce" placeholder="请输入商家介绍"></uv-textarea>
      </uv-form-item>
      <uv-radio-group>
        <uv-radio shape="square" name="112">同意二手交易商入驻协议</uv-radio>
      </uv-radio-group>
    </uv-form>
    <uv-button @click="submit" text="提交" color="#f7433d"></uv-button>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          firm: '',
          username: '',
          mobile: '',
          pics: '',
          card: '',
          address: '',
          captcha: '',
          introduce: ''
        },
        rules: {
          // 公司名称
          firm: {
            required: true,
            message: '请输入公司名称',
            trigger: ['blur', 'change']
          },
          // 联系人姓名
          username: [{
            required: true,
            message: '请输入姓名',
            trigger: ['blur', 'change']
          }],
          // 身份证号
          card: {
            required: true,
            message: '请输入身份证号',
            trigger: ['blur', 'change']
          },
          // 验证码
          captcha: {
            required: true,
            message: '请输入验证码',
            trigger: ['blur', 'change']
          },
          // 商家地址
          address: {
            required: true,
            message: '请输入门店地址',
            trigger: ['blur', 'change']
          },
          // 身份证
          pics: {
            type: 'array',
            required: true,
            message: '请上传照片',
            trigger: ['blur', 'change']
          },
          // 电话
          mobile: [{
            required: true,
            message: '请输入电话',
            // blur和change事件触发检验
            trigger: ['blur', 'change']
          }, {
            // 自定义验证函数，见上说明，注意这里面的逻辑不能出现语法报错，否则可能导致不验证
            validator: (rule, value, callback) => {
              // 此处业务逻辑省略
              // 返回true表校验通过，返回false表示不通过
              return true;
            },
            message: '电话号码格式错误',
            trigger: ['blur']
          }],
          // 商家介绍
          introduce: {
            required: true,
            message: '请输入商家介绍',
            // blur和change事件触发检验
            trigger: ['blur', 'change']
          }
        }
      };
    },
    onReady() {
      this.$refs.form.setRules(this.rules);
    },
    methods: {
      submit() {
        this.$refs.form.validate().then(res => {
          uni.showToast({
            icon: 'success',
            title: '校验通过'
          })
        }).catch(errors => {
          uni.showToast({
            icon: 'error',
            title: '校验失败'
          })
        })
      }
    },
  };
</script>
<style lang="scss">
  .application {
    padding: 30rpx;

    ::v-deep .uv-form-item__body__left__content__label {
      font-size: 26rpx;
    }

    ::v-deep .uv-form-item__body__right__content__slot {
      display: block;

      .text {
        margin-bottom: 30rpx;
      }
    }

    .uv-radio {
      margin: 30rpx 0;
    }

    .uv-button--square {
      margin: 30rpx 0;
      border-radius: 20px;
    }
  }
</style>