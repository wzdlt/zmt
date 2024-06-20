<template>
  <view class="header">
      <view 
      class="left"
      @click="syy">
          <!-- &lt; -->
      </view>
  
      <view class="center">添加车辆</view>
  </view>
  <view class="richscan">
    <view class="item">
      <view class="i-left">车架号</view>
      <view class="i-input">
        <input class="uni-input" type="number" placeholder="请输入车架号" />
      </view>
    </view>
  </view>
  
  <view class="button">
    <button>保存</button>
  </view>
  

</template>

<script>
</script>

<style lang="scss">
  .header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 40px;
      display: flex;
      background-color: #fff;
      border-bottom: 1px solid #ccc;
      .left{
          width: 40px;
          height: 40px;
          text-align: center;
          line-height: 40px;
      }
      .center{
          flex: 1;
          text-align: center;
          line-height: 40px;
      }
  }
  
  .richscan{
    margin-top: 40px;
    width: 100%;
    background-color: #fff;
    .item{
      width: 90%;
      height: 60px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .i-left{
        width: 16%;
        height:100%;
        line-height: 60px;
      }
      .i-input{
        width: 84%;
        height:100%;
        input{
          width: 100%;
          height:100%;
          line-height: 60px;
          text-align: center;
          text-indent: 4em;
          background-image: url(../../static/image/richscan.png);
          background-size: 20px;
          background-position: 88% 50%;
          background-repeat: no-repeat;
        }
      }
    }
  }
  
  .button{
    width: 90%;
    height: 50px;
    margin: 20px auto;
    button{
      border-radius: 50em;
      width: 100%;
      height: 100%;
      line-height: 50px;
      color: #fff;
      background-color: #f7433d;
    }
  }
</style>