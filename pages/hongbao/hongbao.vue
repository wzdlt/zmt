<template>

  <view class="box">
    <view class="box-box1">
      <view class="box1">
        <view class="box1-left">
          <uv-input placeholder="请输入你想要的内容" style="color: white;" shape="circle" v-model="value"
            @change="change"></uv-input>
        </view>
        <view class="box1-right">
          <image class="image1" src="../../static/image/签到.png" alt=""></image>
        </view>

      </view>
      <!-- 轮播图 -->
      <view class="box2">
        <uv-swiper :list="list" indicator indicatorMode="line" circular></uv-swiper>
      </view>
      <!-- 轮播图结束 -->
    </view>

    <!-- 点击查看 -->
    <view class="box3">
      <image class="box3-img" src="../../static/image/查看.png" alt=""></image>
    </view>
    <!-- 点击查看结束 -->
    <!-- list选项卡 -->
    <view><uv-tabs :list="list2" @click="click"></uv-tabs></view>
    <!-- list选项卡结束 -->
    <!--商品列表  -->
    <view class="box4">
      <view class="box4-text" v-for="(item, index) in list1" :key="index">
        <image :src="item.imgage" alt=""></image>
        <text class="box4-text1">{{ item.text1 }}</text> {{ item.text }}
        <!-- 红包已省开始 -->
        <view class="box4-content">
          <view class="box4-content1">红包已省</view>
          <view class="box4-content2">{{ item.price2 }}</view>
        </view>
        <!-- 红包已省结束 -->
        <view class="box4-price"> {{ item.price }}</view>
        <!-- 价格结束 -->
        <view class="box4-text2">
          <view class="box4-text2-left">128.00</view>
          <view>月售180</view>
        </view>
      </view>
    </view>
    <!-- 商品列表结束 -->
    
  </view>


</template>

<script>

export default {
  data() {
    return {
      value: '',
      list: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png',
      ],
      list1: [
        {
          id: 1,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥90",
          text1: "自营",
          price2: "￥60.00"
        }, {
          id: 2,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥90",
          text1: "自营",
          price2: "￥60.00"
        }, {
          id: 3,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥900",
          text1: "自营",
          price2: "￥60.00"
        }, {
          id: 4,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥90",
          text1: "自营",
          price2: "￥60.00"
        }, {
          id: 5,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥90",
          text1: "自营",
          price2: "￥60.00"
        }, {
          id: 6,
          imgage: "../../static/image/商品.png",
          text: "耐克NIKE 男子 休闲鞋 气垫运动鞋",
          price: "60红包+￥90",
          text1: "自营",
          price2: "￥60.00"
        }
      ],
      // 标签选项卡

      list2: [ {
        name: '推荐',
      }, {
        name: '养车'
      }, {
        name: '实体'
      }, {
        name: '排行'
      }, {
        name: '热卖推荐'
      }, {
        name: '商城自荐'
      },]

    }
  },
  methods: {
    change(e) {
      console.log('change', e);
    },
    click(item) {
				console.log('item', item);
			}
  }
}



</script>

<style scoped>
/* 全部大盒子 */
.box {
  width: 100%;
  background-color: #F5F5F5;

}

/* 输入框 */
.box-box1 {
  background:  linear-gradient(#FC492A, #F8AFA3);
}

.box1 {
  width: 100%;
  margin: auto;
  justify-content: space-between;
  display: flex;


}

.box1-left {
  width: 80%;
  display: flex;
  z-index: 999;
  margin-left: 20px;
  background-color: white;
  border-radius: 50rpx;
}

.box1-right {
  width: 10%;
  height: 20px;
  margin-right: 10px;
}

.box1-right .image1 {
  height: 37px;
  width: 100%;
}

/* 输入框左右 */
/* 轮播图 */
.box2 {
  width: 90%;
  margin: auto;
  margin-top: 20px;
}

/* 轮播图结束 */
/* 点击查看 */
.box3 {
  width: 95%;
  margin: auto;
}

.box3 .box3-img {
  width: 100%;
  height: 40px;
  margin-top: 20px;
  border-radius: 8px;
}

/* 点击查看结束 */
/* 商品列表 */
.box4 {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
}

.box4-text image {
  width: 100%;
  height: 180px;
}

.box4-text {
  width: 48%;
  margin-top: 10px;
  box-shadow: 0px 0px 1px rgb(171, 165, 165);
}

.box4-text1 {
  background-color: red;
  border-radius: 4px;
  color: wheat;
}

.box4-text2 {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.box4-text2-left {
  text-decoration-line: line-through;
}

.box4-price {
  font-weight: bold;
  color: #FC4E30;
  font-size: 20px;
  margin-top: 10px;
}

/* 已省 */
.box4-content {
  display: flex;
  margin-top: 15px;
  width: 100%;
  border: 1px solid red;
  border-radius: 5px;
  width: 67.4%;
}

.box4-content1 {
  color: red;

}

.box4-content2 {
  background-color: #FC4E30;
  border-radius: 5px;
  color: white;
}

/* 商品列表结束 */
</style>
