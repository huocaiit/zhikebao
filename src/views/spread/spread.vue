<template>
  <div class="media-html">
    <mt-header title="我的推广">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button slot="right" @click.native="showSpreadStatus = true">全部<span class="icon icon-arrowdown"></span></mt-button>
    </mt-header>
    <div class="border-bottom relative">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">
          <p class="mb4 fs16">88个</p>
          <p class="fs12">推广成功</p>
        </mt-tab-item>
        <mt-tab-item id="2">
          <p class="mb4 fs16">88个</p>
          <p class="fs12">推广跟进</p>
        </mt-tab-item>
        <mt-tab-item id="3">
          <p class="mb4 fs16">88个</p>
          <p class="fs12">推广失败</p>
        </mt-tab-item>
      </mt-navbar>
    </div>
    <mt-tab-container v-model="selected" :swipeable="true">
      <mt-tab-container-item id="1">
        <div class="media-wrap flex border-bottom" v-for="item in 10" @click.stop="showStoreDetail" :key="item">
          <div class="media-left">
            <img src="../../assets/images/zly.jpg" alt="" class="block">
          </div>
          <div class="media-right flex-item pl10">
            <div class="media-title color3 fs14">店铺名称：浦江新天地足浴店<span class="fs12"><span class="icon icon-range"></span>12km</span></div>
            <div class="media-sub-title color6 fs10 text-hide">店铺类型：洗浴中心</div>
            <div class="media-sub-title color6 fs10 text-hide">店铺地址：安徽合肥市蜀山区田林路398号</div>
            <div class="media-sub-title color6 fs10 text-hide">推广状态：推广成功</div>
            <div class="media-sub-title color6 fs10 text-hide">录入时间：2018-11-12 12：23</div>
            <div class="media-sub-title color6 fs10 text-hide">推广奖励：3000元</div>
            <div class="text-right fs12">
              <div class="inline-block color-default">待审核</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <div class="media-wrap flex border-bottom" v-for="item in 10" @click.stop="showStoreDetail" :key="item">
          <div class="media-left">
            <img src="../../assets/images/zly.jpg" alt="" class="block">
          </div>
          <div class="media-right flex-item pl10">
            <div class="media-title color3 fs14">店铺名称：浦江新天地足浴店<span class="fs12"><span class="icon icon-range"></span>12km</span></div>
            <div class="media-sub-title color6 fs10 text-hide">店铺类型：洗浴中心</div>
            <div class="media-sub-title color6 fs10 text-hide">店铺地址：安徽合肥市蜀山区田林路398号</div>
            <div class="media-sub-title color6 fs10 text-hide">推广状态：推广成功</div>
            <div class="media-sub-title color6 fs10 text-hide">录入时间：2018-11-12 12：23</div>
            <div class="media-sub-title color6 fs10 text-hide">推广奖励：3000元</div>
            <div class="text-right fs12">
              <div class="inline-block color-success">审核通过</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <div class="media-wrap flex border-bottom" v-for="item in 10" @click.stop="showStoreDetail" :key="item">
          <div class="media-left">
            <img src="../../assets/images/zly.jpg" alt="" class="block">
          </div>
          <div class="media-right flex-item pl10">
            <div class="media-title color3 fs14">店铺名称：浦江新天地足浴店<span class="fs12"><span class="icon icon-range"></span>12km</span></div>
            <div class="media-sub-title color6 fs10 text-hide">店铺类型：洗浴中心</div>
            <div class="media-sub-title color6 fs10 text-hide">店铺地址：安徽合肥市蜀山区田林路398号</div>
            <div class="media-sub-title color6 fs10 text-hide">推广状态：推广成功</div>
            <div class="media-sub-title color6 fs10 text-hide">录入时间：2018-11-12 12：23</div>
            <div class="media-sub-title color6 fs10 text-hide">推广奖励：3000元</div>
            <div class="text-right fs12">
              <div class="inline-block color-error">审核失败</div>
            </div>
          </div>
        </div>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-actionsheet :actions="mediaActions" v-model="showSpreadStatus"></mt-actionsheet>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      value: "test",
      selected: "1",
      showSpreadStatus: false,
      mediaActions: [
        {
          name: "推广成功",
          method() {
            Toast("操作成功");
          }
        },
        {
          name: "推广跟进",
          method() {
            Toast("操作成功");
          }
        },
        {
          name: "推广失败",
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
