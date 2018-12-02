import Vue from "vue";
import Router from "vue-router";
import Index from "./views/index/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      //我的推广
      path: "/spread",
      name: "spread",
      component: () => import("./views/spread/spread")
    },
    {
      //店铺详细
      path: "/storeList",
      name: "storeList",
      component: () => import("./views/store/storeList")
    },
    {
      //店铺详细
      path: "/storeDetail",
      name: "storeDetail",
      component: () => import("./views/store/storeDetail")
    },
    {
      //续费列表
      path: "/renew",
      name: "renew",
      component: () => import("./views/renew/renew")
    },
    {
      //奖励机制
      path: "/reward",
      name: "reward",
      component: () => import("./views/reward/reward")
    },
    {
      //关于我们
      path: "/about",
      name: "about",
      component: () => import("./views/about/about")
    },
    {
      //我的钱包
      path: "/cash",
      name: "cash",
      component: () => import("./views/cash/cash")
    },
    {
      //个人信息
      path: "/my",
      name: "my",
      component: () => import("./views/my/my")
    },
    {
      //系统设置
      path: "/setting",
      name: "setting",
      component: () => import("./views/setting/setting")
    },
    {
      //实名认证
      path: "/identity",
      name: "identity",
      component: () => import("./views/identity/identity")
    },
    {
      //店铺录入
      path: "/storeEntry",
      name: "storeEntry",
      component: () => import("./views/storeEntry/storeEntry")
    },
    {
      //推广奖励名细
      path: "/spreadRecord",
      name: "spreadRecord",
      component: () => import("./views/cash/spreadRecord")
    },
    {
      //续费奖励名细
      path: "/renewRecord",
      name: "renewRecord",
      component: () => import("./views/cash/renewRecord")
    },
    {
      //提现记录
      path: "/depositRecord",
      name: "depositRecord",
      component: () => import("./views/cash/depositRecord")
    },
    {
      //提现
      path: "/depositType",
      name: "depositType",
      component: () => import("./views/cash/depositType")
    }
  ]
});
