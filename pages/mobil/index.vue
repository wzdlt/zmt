<template>
  <view class="header">
    <view class="left" @click="syy">
      &lt;
    </view>
  </view>
  <div id="app">
    <div class="banner">
      <img src="../../static/image/commodity.png" alt="" />
    </div>

    <div class="text-box">
      <div class="t-top">
        <div class="t-left">
          <div>￥439.00</div>
          <div class="color">￥599.00</div>
        </div>
        <div class="t-right">分享</div>
      </div>

      <div class="t-title">
        <div>送100元红包</div>
      </div>

      <div class="t-center">
        美孚(hab0)金装美孚1号FSOW-30 全合成机油润滑油 SL级 4L 汽车保养
      </div>

      <div class="t-bottom">
        <div class="b-left">库存999</div>
        <div class="b-right">销量2314</div>
      </div>
    </div>


    <!-- 选择产品规格 -->
    <div class="specification">
      <div class="s-left">规格</div>
      <div class="s-right" @click="togglePop">
        <div class="r-left">请选择规格</div>
        <div class="r-right">&gt;</div>
      </div>
    </div>

    <!-- 选择产品规格弹出层 -->
    <div class="pop" v-show="isPopVisible">

      <!-- 弹出层顶部 -->
      <div class="p-top">
        <div class="t-img">
          <img src="../../static/image/commodity.png" alt="" />
        </div>
        <div class="t-txt">
          <div class="t-color">￥{{ price }}</div>
          <div class="model">{{ selectedSpec }}</div>
        </div>
      </div>

      <!-- 选择商品规格 -->
      <div class="pop-specification">
        <div class="s-p-top">商品规格</div>
        <div class="s-p-box">
          <div class="one" v-for="(spec, index) in specifications" :key="index" @click="toggleSelected(spec.volume)"
            :class="{ 'selected-spec': selectedSpec === spec.volume }">{{ spec.volume }}</div>
        </div>
      </div>

      <!-- 选择购买商品数量 -->
      <div class="quantity">
        <div class="q-left">购买数量：</div>
        <div class="q-right">
          <button class="down" @click="decrementQuantity">-</button>
          <input type="text" :value="selectedQuantity" min="1" />
          <button class="up" @click="incrementQuantity">+</button>
        </div>
      </div>

      <div class="btn">
        <button>购买</button>
      </div>
    </div>

    <!-- 商品介绍 -->
    <div class="present">
      <div class="p-top">商品介绍</div>
      <div class="p-img">
        <img src="../../static/image/present.jpg" alt="" />
      </div>
    </div>

    <!-- 底部购买按钮 -->
    <div class="footer">
      <button>购买</button>
    </div>
  </div>
</template>

<script setup>
  import {
    ref,
    computed
  } from 'vue';

const syy = () => {
  uni.navigateBack();
};

  // 定义控制弹出层显示的布尔值
  const isPopVisible = ref(false);

  // 点击事件处理函数，用于切换弹出层的显示状态
  const togglePop = () => {
    isPopVisible.value = !isPopVisible.value;
  };

  // 商品规格数组
  const specifications = [{
      volume: '5L',
      price: 499
    },
    {
      volume: '10L',
      price: 798
    },
    {
      volume: '20L',
      price: 1596
    },
  ];

  // 初始化状态
  const selectedQuantity = ref(1); // 初始购买数量
  const selectedSpec = ref('5L'); // 初始商品规格，同时也作为选中规格的跟踪

  // 计算商品价格
  const price = computed(() => {
    const spec = specifications.find(s => s.volume === selectedSpec.value);
    return spec ? spec.price * selectedQuantity.value : 0;
  });

  // 选择商品规格，同时更新样式
  const toggleSelected = (volume) => {
    selectedSpec.value = volume === selectedSpec.value ? '' : volume; // 切换或清空选中
  };

  // 处理数量变化
  const incrementQuantity = () => {
    if (selectedQuantity.value < 999) {
      selectedQuantity.value++;
    }
  };
  const decrementQuantity = () => {
    if (selectedQuantity.value > 1) {
      selectedQuantity.value--;
    }
  };
</script>

<style lang="scss">
  page {
    background-color: #f5f5f5;
  }

  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 10;

    .left {
      width: 40px;
      height: 50px;
      text-align: center;
      line-height: 50px;
    }
  }

  .banner {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .text-box {
    padding: 10px 0;
    width: 90%;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 10px;

    .t-top {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      .t-left {
        width: 60%;
        height: 24px;
        line-height: 30px;
        font-size: 16px;
        display: flex;
        color: #e84b2e;

        .color {
          margin-left: 10px;
          font-size: 12px;
          line-height: 32px;
          color: #a0a0a0;
          text-decoration: line-through;
        }
      }

      .t-right {
        width: 20%;
        font-size: 12px;
        height: 24px;
        line-height: 32px;
        color: #a0a0a0;
        text-align: right;
      }
    }

    .t-title {
      width: 90%;
      margin: 10px auto;

      div {
        font-size: 12px;
        width: 24%;
        height: 22px;
        background-color: #e84b2e;
        text-align: center;
        line-height: 22px;
        color: #fff;
        border-radius: 6px;
      }
    }

    .t-center {
      width: 90%;
      margin: 10px auto;
    }

    .t-bottom {
      width: 90%;
      margin: 10px auto;
      color: #a0a0a0;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
    }
  }

  .specification {
    width: 90%;
    height: 40px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 10px;
    display: flex;

    .s-left {
      width: 20%;
      line-height: 40px;
      text-align: center;
    }

    .s-right {
      width: 80%;
      font-size: 12px;
      display: flex;
      color: #a0a0a0;
      line-height: 40px;
      display: flex;

      .r-left {
        width: 90%;
      }
    }
  }

  .pop {
    // display: none;
    position: fixed;
    bottom: 0;
    padding-top: 30px;
    width: 100%;
    background-color: #fff;

    .p-top {
      width: 80%;
      margin: 0 auto;
      display: flex;

      .t-img {
        width: 100px;
        height: 100px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .t-txt {
        width: 30%;
        background-color: pink;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        div {
          width: 100%;
        }
      }
    }

    .pop-specification {
      width: 80%;
      margin: 20px auto;
      display: flex;
      flex-wrap: wrap;

      .s-p-top {
        width: 100%;
        margin: 10px 0;
      }

      .s-p-box {
        width: 100%;
        display: flex;

        .one,
        .two,
        .three {
          margin-right: 10px;
          width: 20%;
          height: 30px;
          line-height: 30px;
          color: #fff;
          background-color: #e84b2e;
          text-align: center;
          border-radius: 6px;
        }

        .selected-spec {
          background-color: #f0f0f0;
          color: #e84b2e;
          border: 1px solid #ccc;
        }
      }
    }

    .quantity {
      width: 80%;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;

      .q-left {
        width: 28%;
        text-align: center;
      }

      .q-right {
        display: flex;
        width: 60%;

        button {
          width: 20%;
          height: 40px;
          line-height: 40px;
          border: none;
          background-color: #e84b2e;
          color: #fff;
        }

        input {
          width: 20%;
          height: 40px;
          border: 1px solid #000;
          text-align: center;
        }
      }
    }

    .btn {
      width: 100%;

      button {
        color: #fff;
        width: 100%;
        background-color: #e84b2e;
      }
    }
  }

  .present{
    padding-top: 6px;
    border-radius: 10px;
    width: 90%;
    margin: 10px auto;
    background-color: #fff;
    .p-top{
      width: 90%;
      margin: 10px auto;
    }
    .p-img{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }

  .footer{
    padding: 6px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    button{
      width: 90%;
      margin: 0 auto;
      background-color: #fc4424;
      color: #fff;
      border-radius: 999em;
    }
  }
</style>