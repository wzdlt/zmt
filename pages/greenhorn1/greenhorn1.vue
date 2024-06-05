<template>
  <view class="new">
    <view class="top">
      <p>退款什么时候到账</p>
      <p>2022年2月25日09:55:34</p>
    </view>
    <view class="bottom">
      <p>国新办今日就《海南自由贸易港建设总体方案》有关情况举行新闻发布会，海南省委书记、海南省人大常委会主任刘赐贵表示，海南坚持高标准高质量建设全岛自由贸易试验区，同时还谋划推动智慧海南建设，目前智慧海南方案已经中央批准。刘赐贵表示，海南坚持高标准高质量建设全岛自由贸易试验区，确定了18个先导性项目，对中央“1+N”政策体系，结合海南的实际去细化、推进落实。</p>
    </view>
  </view>
</template>

<script setup>

</script>

<style lang="scss">
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .new {
    width: 100%;

    .top {
      padding-top: 5%;
      padding-left: 5%;
      padding-right: 5%;
      p:nth-child(1){
        font-size: 1.2rem;
        font-weight: bold;
      }
      p:nth-child(2){
        margin-top: 10px;
        font-size: 0.8rem;
        color: #b5b5b5;
        padding-bottom: 10px;
        border-bottom: 1px solid #cfcfcf;
       
      } 
    }
    .bottom{
      padding: 5%;
      font-size: 0.9rem;
      p{
         letter-spacing: 1px;
      } 
     
    }
  }
</style>