<template>
  <div class="media-html">
    <mt-header title="我的推广">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="showmediaStatus = true">全部<span class="icon icon-arrowdown"></span></mt-button>
    </mt-header>
    <div class="media-wrap flex border-bottom" v-for="item in 10" @click.stop="showStoreDetail" :key="item">
      <div class="media-left">
        <img src="../../assets/images/zly.jpg" alt="" class="block">
      </div>
      <div class="media-right flex-item pl10">
        <div class="media-title color3 fs14">店铺名称：浦江新天地足浴店<span class="fs12"><span class="icon icon-range"></span>12km</span></div>
        <div class="media-sub-title color6 fs10 text-hide">店铺类型：洗浴中心</div>
        <div class="media-sub-title color6 fs10 text-hide">店铺地址：安徽合肥市蜀山区田林路398号</div>
        <div class="media-sub-title color6 fs10 text-hide">设备使用有效期：2018-11-12至2019-11-12</div>
        <div class="media-sub-title color6 fs10 text-hide">设备使用状态：正常使用</div>
        <div class="media-sub-title color6 fs10 text-hide">设备使用缴费次数：2次</div>
        <div class="media-sub-title color6 fs10 text-hide">续费奖励：88元</div>
      </div>
    </div>
    <mt-actionsheet :actions="mediaActions" v-model="showmediaStatus"></mt-actionsheet>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      value: "test",
      selected: "1",
      showmediaStatus: false,
      mediaActions: [
        {
          name: "全部",
          method() {
            Toast("操作成功");
          }
        },
        {
          name: "正常使用",
          method() {
            Toast("操作成功");
          }
        },
        {
          name: "已欠费",
          method() {
            Toast("操作成功");
          }
        }
      ]
    };
  },
  methods: {
    showStoreDetail() {
      this.$router.push({
        name: "storeDetail"
      });
    }
  }
};
</script>
