<template>
  <view class="box">
    <view class="box1">
      <view class="box1-1">
        <view class="box1-1-left">品牌车系</view>
        <view class="box1-1-right">宝马3系 / E90</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">车型</view>
        <view class="box1-1-right">E90（MUE）</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">车架号</view>
        <view class="box1-1-right">84327658128959</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">生产日期</view>
        <view class="box1-1-right">2008-09-15</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">车身颜色（漆色号）</view>
        <view class="box1-1-right">雪山白3</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">发动机</view>
        <view class="box1-1-right">3297684268vf</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">排量</view>
        <view class="box1-1-right">2.0L</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">机油推荐</view>
        <view class="box1-1-right">0W-40 全合成 SN级</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">机油加注量</view>
        <view class="box1-1-right">4.25L</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">燃油动力</view>
        <view class="box1-1-right">汽油</view>
      </view>
      <view class="box1-1">
        <view class="box1-1-left">变速箱</view>
        <view class="box1-1-right">手自一体变速箱()AT</view>
      </view>
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
.box{
  background-color: #f5f5f5;
  height: 100vh;
  .box1{
    background-color: #fff;
    .box1-1{
      display: flex;
      justify-content: space-between;
      padding: 15px 10px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
