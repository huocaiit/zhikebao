<template>
  <div class="store-list-html">
    <mt-header title="店铺查询" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="store-search border-bottom bg-white">
      <div class="search-title flex" @click.stop="isShowSearch = true">
        <div class="search-item color3 fs14">推广状态<span class="icon icon-arrowdown"></span></div>
        <div class="search-item color3 fs14">全国地区<span class="icon icon-arrowdown"></span></div>
        <div class="search-item color3 fs14">店铺类型<span class="icon icon-arrowdown"></span></div>
      </div>
    </div>
    <div class="store-layout" v-show="isShowSearch" @click.stop="isShowSearch = false">
      <div class="search-tab bg-white pl15 pr15">
        <div class="search-item border-bottom color6 fs14">全部</div>
        <div class="search-item border-bottom color6 fs14">暂无推广</div>
        <div class="search-item border-bottom color6 fs14">推广成功</div>
        <div class="search-item border-bottom color6 fs14">推广跟进</div>
        <div class="search-item border-bottom color6 fs14">推广失败</div>
      </div>
    </div>
    <div class="store-content">
      <div class="media-wrap flex border-bottom" v-for="item in 10" @click.stop="showStoreDetail" :key="item">
        <div class="media-left">
          <img src="../../assets/images/store.jpg" alt="" class="block">
        </div>
        <div class="media-right flex-item pl10">
          <div class="media-title color3 fs14">店铺名称：浦江新天地足浴店<span class="fs12"><span class="icon icon-range"></span>12km</span></div>
          <div class="media-sub-title color6 fs10 text-hide">店铺类型：洗浴中心</div>
          <div class="media-sub-title color6 fs10 text-hide">店铺地址：安徽合肥市蜀山区田林路398号</div>
          <div class="media-sub-title color6 fs10 text-hide">推广状态：推广成功</div>
          <div class="media-sub-title color6 fs10 text-hide">录入时间：2018-12-01 20:23:00</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "test",
      selected: "1",
      isShowSearch: false
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
<style lang="less" rel="stylesheet/less">
.store-list-html {
  .store-content {
    padding-top: 4.4rem;
  }
  .store-search {
    position: fixed;
    left: 0;
    right: 0;
    top: 2.2rem;
    z-index: 10;
  }
  .search-item {
    height: 2.2rem;
    line-height: 2.2rem;
    position: relative;
  }
  .search-title .search-item {
    width: 33.3333%;
    text-align: center;
  }
  .store-layout {
    position: fixed;
    left: 0;
    right: 0;
    top: 4.4rem;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 100;
    overflow: hidden;
    .search-tab {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    }
  }
}
</style>
