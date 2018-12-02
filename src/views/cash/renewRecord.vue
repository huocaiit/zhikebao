<template lang="html">
  <div class="renew-record-html">
    <mt-header title="续费奖励明细" :fixed="true">
      <mt-button icon="back" slot="left" @click.stop="$router.back()"></mt-button>
      <mt-button slot="right">今日<span class="icon icon-arrowdown"></span></mt-button>
    </mt-header>
    <div class="renew-record-wrap pt44">
      <div class="search-btns mt15 mb5 wp60 block-center clear hl34 text-center fs16">
        <div class="btn-left pull-left wp50 active">日收入</div>
        <div class="btn-right pull-left wp50">月收入</div>
      </div>
      <div class="record-header clear pt15 pb15 text-center">
        <div class="success-num pull-left wp50 relative border-right">
          <div class="fs18 color3">32</div>
          <div class="fs12 color6">今日店铺推广成功数</div>
        </div>
        <div class="cash-total pull-left wp50">
          <div class="fs18 color3">32.00</div>
          <div class="fs12 color6">今日推广奖励（元）</div>
        </div>
      </div>
      <div class="bg-f2 pb5"></div>
      <div class="record-content">
        <div class="record-list pl20 pr20 pt15 pb15 relative border-bottom" v-for="item in 10" :key="item">
          <p class="fs14 color3 hl24">店铺名称：浦江新天地足浴店</p>
          <p class="fs12 color6 hl24">审核时间：2018-11-12 12：23</p>
          <p class="fs15 hl24 color-blue">
            推广奖励：3000元
            <span class="pull-right color-blue fs12" @click.stop="showRecordDetail(item)">查看详情<span class="icon icon-arrowright"></span></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "test"
    };
  },
  methods: {
    showRecordDetail(val) {
      this.$router.push({
        name: "storeDetail",
        query: {
          id: val
        }
      });
    }
  }
};
</script>
