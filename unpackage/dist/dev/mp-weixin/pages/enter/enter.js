"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      //手机号码
      pwd: ""
      //密码
    };
  },
  onLoad() {
  },
  methods: {
    //当前登录按钮操作
    login() {
      var that = this;
      if (!that.phone) {
        common_vendor.index.showToast({
          title: "请输入您的手机号",
          icon: "none"
        });
        return;
      }
      if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(that.phone)) {
        common_vendor.index.showToast({
          title: "请输入正确手机号",
          icon: "none"
        });
        return;
      }
      if (!that.pwd) {
        common_vendor.index.showToast({
          title: "请输入您的密码",
          icon: "none"
        });
        return;
      }
      common_vendor.index.showToast({
        title: "登录成功！",
        icon: "none"
      });
    },
    //注册按钮点击
    reg() {
      common_vendor.index.showToast({
        title: "注册跳转",
        icon: "none"
      });
    },
    //等三方微信登录
    wxLogin() {
      common_vendor.index.showToast({
        title: "微信登录",
        icon: "none"
      });
    },
    //第三方支付宝登录
    zfbLogin() {
      common_vendor.index.showToast({
        title: "支付宝登录",
        icon: "none"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phone,
    b: common_vendor.o(($event) => $data.phone = $event.detail.value),
    c: $data.pwd,
    d: common_vendor.o(($event) => $data.pwd = $event.detail.value),
    e: common_vendor.o(($event) => $options.login()),
    f: common_vendor.o(($event) => $options.reg()),
    g: common_vendor.o((...args) => _ctx.chang && _ctx.chang(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Uniapp-----------/zhengmaotong/pages/enter/enter.vue"]]);
wx.createPage(MiniProgramPage);
