"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      value: ""
    };
  },
  methods: {
    change(e) {
      console.log("change", e);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8e41f386"], ["__file", "D:/Auni-app/zhengmaotong/pages/L-appraise/L-appraise.vue"]]);
wx.createPage(MiniProgramPage);
