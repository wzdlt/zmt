<template>
  <view>
    <AlmostLottery :prizeList="prizeList" :prizeIndex="prizeIndex" @reset-index="prizeIndex = -1"
      @draw-before="handleDrawBefore" @draw-start="handleDrawStart" @draw-end="handleDrawEnd" @finish="handleDrawFinish"
      v-if="prizeList.length"></AlmostLottery>
  </view>
</template>
<script setup>
  import {
    ref
  } from 'vue';
  import AlmostLottery from '@/uni_modules/almost-lottery/components/almost-lottery/almost-lottery.vue'
  // 奖品列表
  const prizeList = ref([{
      prizeId: 1,
      prizeName: '商品1 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/yang.jpg'
    },
    {
      prizeId: 2,
      prizeName: '商品2 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/jiangwei.jpg'
    },
    {
      prizeId: 3,
      prizeName: '商品3 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/yang.jpg'
    },
    {
      prizeId: 4,
      prizeName: '商品4 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/jiangwei.jpg'
    },
    {
      prizeId: 5,
      prizeName: '商品5 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/yang.jpg'
    },
    {
      prizeId: 6,
      prizeName: '商品6 ',
      prizeStock: 1,
      prizeWeight: 1,
      prizeImage: '/static/jiangwei.jpg'
    }
  ])
  // 中奖下标默认-1
  const prizeIndex = ref(-1)

  // 本次抽奖开始之前
  function handleDrawBefore(callback) {
    // 这里需要处理你抽奖之前的逻辑
    // 请查看示例项目中的代码
    // 必须调用 callback 并传递一个布尔值，布尔值为 true 时，转盘才会开始旋转
    let flag = true
    callback(flag)
  }
  // 抽奖开始，从此处控制中奖情况
  function handleDrawStart() {
    setTimeout(() => {
      // 设置中奖位置
      prizeIndex.value = 5
    }, 500)
  }
  // 本次抽奖结束
  function handleDrawEnd() {
    // 完成抽奖后，这里处理你拿到结果后的逻辑
    // 请查看示例项目中的代码
  }
  // 抽奖转盘绘制完成
  function handleDrawFinish(res) {
    // 抽奖转盘准备就绪后，这里处理你的逻辑
    // 请查看示例项目中的代码
    // console.log('抽奖转盘绘制完成', res)
  }
</script>