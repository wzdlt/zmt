<template>
  <view class="box">
    <view class="box1">
      <view class="top">
        <!-- 搜索 -->
        <uv-input shape="circle" placeholder="请输入电话/门店名称进行搜索" prefixIcon="search"
          prefixIconStyle="font-size: 22px;color: #909399">
        </uv-input>
      </view>
      <!-- 下拉 -->
      <view class="center">
        <uv-drop-down ref="dropDown" sign="dropDown_1" text-active-color="#3c9cff"
          :extra-icon="{ name: 'arrow-down-fill', color: '#666', size: '26rpx' }"
          :extra-active-icon="{ name: 'arrow-up-fill', color: '#3c9cff', size: '26rpx' }" :defaultValue="defaultValue"
          :custom-style="{ padding: '0 30rpx' }" @click="selectMenu">
          <uv-drop-down-item name="order" type="2" :label="dropItem('order').label" :value="dropItem('order').value">
          </uv-drop-down-item>
          <uv-drop-down-item name="type" type="2" :label="dropItem('type').label" :value="dropItem('type').value">
          </uv-drop-down-item>
          <uv-drop-down-item name="vip_type" type="2" :label="dropItem('vip_type').label"
            :value="dropItem('vip_type').value">
          </uv-drop-down-item>
        </uv-drop-down>
        <uv-drop-down-popup sign="dropDown_1" :click-overlay-on-close="true" :currentDropItem="currentDropItem"
          @clickItem="clickItem" @popupChange="change"></uv-drop-down-popup>
      </view>
    </view>
    <view class="bottom1" v-for="item in 3 " :key="item">
      <view class="bottom">
        <view class="bottom-left">
          <image src="../../static/image/鑫日汽修厂.png" mode=""></image>
        </view>
        <view class="bottom-right">
          <view class="p1">鑫日汽修厂 <text class="span1">1.2km</text> </view>
          <view class="bottom-right-top">
            <uv-rate :count="count" v-model="value" activeColor="#ffb800"></uv-rate>
            <text class="p2">服务次数：235</text>
          </view>
          <text class="p3">山东省临沂市河东区香港路与长安路...</text>
          <view class="bottom-right-bottom">
            <text v-for="item in list" :key="item.id">{{ item.title }}</text>
          </view>

        </view>
      </view>
      <view class="btn">
        <button>确认选择</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  onPageScroll() {
    // 滚动后及时更新位置
    this.$refs.dropDown.init();
  },
  computed: {
    dropItem(name) {
      return (name) => {
        const result = {};
        const find = this.result.find(item => item.name === name);
        if (find) {
          result.label = find.label;
          result.value = find.value;
        } else {
          result.label = this[name].label;
          result.value = this[name].value;
        }
        return result;
      }
    },
    // 获取当前下拉筛选项
    currentDropItem() {
      return this[this.activeName];
    }
  },
  data() {
    return {
      // 保养循环
      list: [{
        id: "1",
        title: '洗车'
      },
      {
        id: "2",
        title: '美容'
      },
      {
        id: "3",
        title: '维修'
      },
      {
        id: "4",
        title: '轮胎'
      },
      {
        id: "5",
        title: '保养'
      },
      {
        id: "6",
        title: '改装'
      }
      ],
      // 评分
      count: 5,
      value: 4,
      // 表示value等于这些值，就属于默认值
      defaultValue: [0, 'all', '0'],
      // 筛选结果
      result: [{
        name: 'order',
        label: '全部门店',
        value: 'new'
      }],
      // { name: 'order', label: '最新发布', value: 'new' }
      activeName: 'order',
      order: {
        label: '山东交通职业学院',
        value: 'all',
        activeIndex: 0,
        color: '#333',
        activeColor: '#2878ff',
        child: [{
          label: '山东交通职业学院',
          value: 'all'
        }, {
          label: '印象泰山',
          value: 'new'
        }, {
          label: '425宿舍',
          value: 'money'
        }]
      },
      type: {
        label: '临沂市',
        value: 'all',
        activeIndex: 0,
        color: '#333',
        activeColor: '#2878ff',
        child: [{
          label: '临沂市',
          value: 'all'
        }, {
          label: '泰安市',
          value: 'pdf'
        }, {
          label: '济南市',
          value: 'word'
        }, {
          label: '青岛市',
          value: 'ppt'
        }]
      },
      vip_type: {
        label: '综合排序',
        value: 0,
        activeIndex: 0,
        activeColor: '#2878ff',
        child: [{
          lable: '销量排序',
          value: 'xiaoliang'
        }, {
          lable: '价格排序',
          value: 'jiage'
        }]
      }
    }
  },
  methods: {
    change(e) {
      console.log('弹窗打开状态：', e);
    },
    /**
     * 点击每个筛选项回调
     * @param {Object} e { name, active, type } = e
     */
    selectMenu(e) {
      const {
        name,
        active,
        type
      } = e;
      this.activeName = name;
      // type 等于1 的需要特殊处理：type不等于1可以忽略
      if (type == 1) {
        this.clickItem({
          name: 'vip_type',
          label: '销量排序',
          value: e.active ? 1 : 0
        });
      } else {
        const find = this.result.find(item => item.name == this.activeName);
        if (find) {
          const findIndex = this[this.activeName].child.findIndex(item => item.label == find.label && item.value ==
            find.value);
          this[this.activeName].activeIndex = findIndex;
        } else {
          this[this.activeName].activeIndex = 0;
        }
      }
    },
    /**
     * 点击菜单回调处理
     * @param {Object} item 选中项 { label,value } = e
     */
    clickItem(e) {
      // 下面有重新赋值，所以用let
      let {
        label,
        value
      } = e;
      const findIndex = this.result.findIndex(item => item.name == this.activeName);
      if (this.defaultValue.indexOf(value) > -1 && this[this.activeName].label) {
        label = this[this.activeName].label;
      }
      // 已经存在筛选项
      if (findIndex > -1) {
        this.$set(this.result, findIndex, {
          name: this.activeName,
          label,
          value
        })
      } else {
        this.result.push({
          name: this.activeName,
          label,
          value
        });
      }
      this.result = this.result.filter(item => this.defaultValue.indexOf(item.value) == -1);
      uni.showModal({
        content: `筛选的值：${JSON.stringify(this.result)}`
      })
    }
  }
}
</script>

<style lang="scss">
page {
  background-color: #f5f5f5;
}
.box {
  width: 100%;

  .box1 {
    background-color: white;

    .top {
      width: 90%;
      margin: auto;
      padding-top: 3%;

      .uv-input {
        margin-bottom: 10px;
      }
    }

    .center {
      width: 90%;
      margin: auto;
    }

  }



  .bottom1 {
    width: 90%;
    margin: auto;
    margin-top: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    padding-bottom: 10px;

    .bottom {
      width: 100%;
      margin: auto;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      padding: 2%;

      .bottom-left {
        width: 23%;


        image {
          width: 100%;
          height: 100%;
        }
      }

      .bottom-right {
        width: 75%;

        .bottom-right-top {
          display: flex;
          justify-content: left;

          .p2 {
            margin-left: 2%;
            font-size: 0.8rem;
          }
        }

        .p1 {
          margin-top: 1%;
          margin-left: 2%;
          font-size: 1rem;
          font-weight: bold;
          display: flex;
          justify-content: space-between;

          .span1 {
            margin-top: 6px;
            color: #a0a0a0;
            font-size: 0.7rem;
          }
        }

        .p3 {
          margin-top: 1%;
          margin-left: 2%;
          font-size: 0.8rem;
        }

        .bottom-right-bottom {
          display: flex;
          justify-content: left;

          text {
            background-color: #ffeae7;
            color: #fc664c;
            border-radius: 5px;
            font-size: 0.6rem;
            margin-left: 2%;
            margin-top: 1%;
            width: 12%;
            text-align: center;
            border: 1px solid red;

          }
        }
      }

    }

    .btn {
      width: 100%;
      margin-top: 5%;
      margin-bottom: 10px;
      display: flex;
      justify-content: right;

      // border: 1px solid #000;
      button {
        margin-right: 2%;
        width: 25%;
        height: 20%;
        font-size: 0.7rem;
        background-color: #ffffff;
        // float: right;
        color: #fc5234;
        border: 1px solid #fc6e54;
        border-radius: 20px;

      }
    }
  }

}
</style>