<!-- 评论列表 -->
<template>
  <view class="review">
    <view class="revi-box">
      <view class="rev" v-for="(item,index) in plli" :key="index">
        <view class="re-name">
          <view class="rn-im">
            <image :src="item.tou" mode="scaleToFill" />
          </view>
          <view class="rn-na">
            <view class="ra-top">{{ item.name }}</view>
            <view class="ra-bot"
              ><uv-rate
                active-color="#ffb800"
                :count="count"
                v-model="value"
              ></uv-rate
            ></view>
          </view>
          <view class="rn-day">{{ item.day }}</view>
        </view>
        <!-- 评论内容 -->
        <view class="re-cen">
          {{ item.text }}
        </view>
        <view class="re-img" v-if="item.ima1=item.ima1">
          <image :src="item.ima1" mode="scaleToFill" />
          <image :src="item.ima1" mode="scaleToFill" />
          <image :src="item.ima1" mode="scaleToFill" />
        </view>
        <view class="re-hf" v-if="item.ima3=item.ima3">
          <view style="padding-top: 20rpx;margin-bottom: 20rpx;width: 95%;margin: auto;">{{ item.ima3 }}</view>
          <view style="padding-bottom: 20rpx;width: 95%;margin: auto;padding-top: 15rpx">{{ item.ima2 }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      plli: [
        {
          tou: "../../static/商品评价1.png",
          name: "不落的太阳",
          day: "2021.12.17",
          text: "整个人生就是思想与劳动，旁劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫",
          ima1:'../../static/商品评价2.png'
        },
        {
          tou: "../../static/商品评价1.png",
          name: "不落的太阳",
          day: "2021.12.17",
          text: "整个人生就是思想与劳动，旁劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫",
          ima2:'人生的白纸全凭自己的笔去描绘。每个人都用自己的经历填写人生价值的档案。',
          ima3:"商家回复:"
        },
        {
          tou: "../../static/商品评价1.png",
          name: "不落的太阳",
          day: "2021.12.17",
          text: "整个人生就是思想与劳动，旁劳动虽然是无闻的、平凡的，却是不能间断的。--冈察洛夫",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.review {
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  .revi-box {
    width: 95%;
    margin: auto;
    .rev {
      width: 100%;
      height: 450rpx;
      margin-bottom: 20rpx;
      background-color: white;
      .re-name {
        width: 100%;
        display: flex;
        padding-top: 20rpx;
        .rn-im {
          width: 100rpx;
          height: 95rpx;
          border-radius: 50rpx;
          image {
            width: 100%;
            height: 100%;
            border-radius: 50rpx;
          }
        }
        .rn-na {
          margin-left: 15rpx;
        }
        .rn-day {
          width: 60%;
          height: 100rpx;
          text-align: right;
          line-height: 100rpx;
          color: silver;
        }
      }
      .re-cen {
        margin-top: 15rpx;
        margin-bottom: 20rpx;
      }
      .re-img {
        width: 100%;
        margin-top: 20rpx;
        image {
          width: 31%;
          height: 190rpx;
          margin-right: 15rpx;
        }
      }
      .re-hf{
        width: 95%;
        margin: auto;
        border-radius: 10rpx;
        background-color: rgba(132,132,132,0.3);
      }
    }
  }
}
</style>
