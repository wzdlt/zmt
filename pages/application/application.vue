<!-- 二手交易商申请 -->
<template>
  <view class="application">
    <uv-form :model="form" :rules="rules" ref="form">
      <uv-form-item label="姓名" prop="username">
        <uv-input v-model="form.username" placeholder="请输入联系人姓名" />
      </uv-form-item>
      <uv-form-item label="电话" prop="mobile">
        <uv-input v-model="form.mobile" placeholder="请输入联系电话" />
      </uv-form-item>
      <uv-form-item prop="pics">
        <view class="text">照片</view>
        <uv-upload :fileList="fileList" name="1" multiple :maxCount="9" @afterRead="afterRead" @delete="deletePic"
          :previewFullImage="true"></uv-upload>
      </uv-form-item>
    </uv-form>
    <uv-button @click="submit" text="提交" color="#f7433d"></uv-button>
  </view>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          username: '',
          mobile: '',
          pics: ''
        },
        rules: {
          username: [{
            required: true,
            message: '此为必填字段',
            trigger: ['blur', 'change']
          }],
          pics: {
            type: 'array',
            required: true,
            message: '请上传照片',
            trigger: ['blur', 'change']
          },
          mobile: [{
            required: true,
            message: '此为必填字段',
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
          }]
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

    ::v-deep .uv-form-item__body__right__content__slot {
      display: block;

      .text {
        margin-bottom: 30rpx;
      }
    }

    .uv-button--square {
      margin: 30rpx 0;
      border-radius: 20px;
    }
  }
</style>