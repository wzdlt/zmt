<template>
  <view class="box">
    <view class="box1">
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>代理名称</view>
        <view><input type="text" placeholder="请输入公司名称"/></view>
      </view>
      
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>联系人姓名</view>
        <view><input type="text" placeholder="请填写联系人姓名"/></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>身份证号</view>
        <view><input type="idcard" placeholder="请填写身份证号"/></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>联系电话</view>
        <view><input type="number" placeholder="请填写联系电话"/></view>
      </view>
      <view class="box1-1">
        <view><text style="color: #fc492a;margin-right: 5px;">*</text>商家地址</view>
        <view><input type="number" placeholder="请填写门店地址"/></view>
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

      };
    }
  }
</script>

<style lang="scss">
  .box {
    background-color: #f5f5f5;
    height: 100vh;
    .box1{
     background-color: #fff;
     .box1-1{
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #ccc;
       padding: 15px 10px;
       input{
         text-align: right;
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