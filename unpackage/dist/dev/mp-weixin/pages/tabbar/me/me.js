"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  setup() {
    const login = () => {
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          console.log(loginRes.authResult);
        },
        fail: (error) => {
          console.log(error.errMsg);
        }
      });
    };
    login();
    return {
      login
    };
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_list_item2 + _easycom_uni_list2)();
}
const _easycom_uni_list_item = () => "../../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.login)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/webProject/bookWX/pages/tabbar/me/me.vue"]]);
wx.createPage(MiniProgramPage);
