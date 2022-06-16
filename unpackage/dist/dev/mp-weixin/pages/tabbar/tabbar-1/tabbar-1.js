"use strict";
var common_vendor = require("../../../common/vendor.js");
var tools_api = require("../../../tools/api.js");
const _sfc_main = {
  setup() {
    const code = common_vendor.ref("");
    const openid = common_vendor.ref("");
    const getCode = () => {
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          code.value = loginRes.code;
          code2Session();
        },
        fail: (error) => {
          console.log(error.errMsg);
        }
      });
    };
    const code2Session = () => {
      tools_api.api.get("user/code2session/" + code.value, {}, (data) => {
        openid.value = data.data.data;
        console.log(openid.value);
      });
    };
    const getSession = () => {
      getCode();
    };
    getSession();
    return {
      code,
      getSession
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/webProject/bookWX/pages/tabbar/tabbar-1/tabbar-1.vue"]]);
wx.createPage(MiniProgramPage);
