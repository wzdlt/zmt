<template>
  <view class="invite">
    <uv-tabs :list="list" @click="click"></uv-tabs>
  </view>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        name: '直推',
      }, {
        name: '间推',
      },]
    }
  },
  methods: {
    click(item) {
      console.log('item', item);
    }
  }
}
</script>
<style lang="less" scoped>
page {}
</style>