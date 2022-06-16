"use strict";
require("../../../tools/api.js");
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  setup() {
    const avatarUrl = common_vendor.ref("/static/defaultPho.png");
    const onChooseAvatar = (e) => {
      avatarUrl.value = e.detail.avatarUrl;
    };
    return {
      avatarUrl,
      onChooseAvatar
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
    a: $setup.avatarUrl,
    b: common_vendor.o((...args) => $setup.onChooseAvatar && $setup.onChooseAvatar(...args)),
    c: common_vendor.p({
      clickable: "true"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/webProject/bookWX/pages/tabbar/me/me.vue"]]);
wx.createPage(MiniProgramPage);
