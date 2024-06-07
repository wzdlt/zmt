<template>
  <view class="box">
    <view class="box1" v-for="(item, index) in list" :key="index">
      <view class="box1-prc">
        <img :src="item.img" alt="">
      </view>
      <view class="box2">
        <view class="box2-top">{{ item.text }}</view>
        <view class="box2-bottom"><img :src="item.img1" alt="">{{ item.text2 }}</view>
        <view class="box3" v-for="(item, index) in list2" :key="index">
          <view class="box3-left"> {{ item.text3 }}</view>
          <view class="box3-right">{{ item.text4 }}</view>
        </view>
      </view>

    </view>

    <!-- 编辑 -->

  </view>
</template>

<script>
export default {
  data() {
    return {
      list: [{
        img: "../../static/鞋子111.png",
        text: "小米手环6 全面彩屏 30种运动模式 24h心率检测智能运动手...",
        img1: "../../static/聊天.png",
        text2: 12
      }, {
        img: "../../static/鞋子111.png",
        text: "小米手环6 全面彩屏 30种运动模式 24h心率检测智能运动手...",
        img1: "../../static/聊天.png",
        text2: 12
      }, {
        img: "../../static/鞋子111.png",
        text: "小米手环6 全面彩屏 30种运动模式 24h心率检测智能运动手...",
        img1: "../../static/聊天.png",
        text2: 12
      },
      ],
      list2: [{
        text3: "删除",
        text4: "编辑"
      }]

    };
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background-color: #F5F5F5;


  .box1 {
    width: 95%;
    margin: auto;
    display: flex;
    box-shadow: 5px 5px 5px #ccc;
    margin-bottom: 10px;
    border-radius: 8px;
    background-color: #FFFFFF;

    .box1-prc {
      width: 35%;

      img {
        width: 100%;
      }
    }

    .box2 {
      width: 100%;
      margin-top: 20px;


      .box2-top {
        font-size: 15px;
      }

      .box2-bottom {
        align-items: center;

      }

      .box2-bottom img {
        width: 10%;
        margin-top: 20px;

      }
    }

    .box3 {
      display: flex;
      margin-left: 150px;
      justify-content: space-around;

      .box3-left {
        border: 1px solid black;
        width: 45px;
        height: 20px;
        text-align: center;
        border-radius: 9px;
        color: #878787;
        font-size: 15px;
      }

      .box3-right {
        border: 1px solid black;
        border-radius: 9px;
        width: 45px;
        height: 20px;
        text-align: center;
        color: #878787;
        font-size: 15px;
      }
    }
  }


}
</style>
