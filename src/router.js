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
    }
  ]
});
