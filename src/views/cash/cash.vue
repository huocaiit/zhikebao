<template lang="html">
  <div class="cash-html">
    <mt-header title="我的钱包" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="cash-wrap pt44 text-center">
      <div class="pb15">
        <div class="cash-total pt15 pb15">
          <div class="fs20 color3">9999.00</div>
          <div class="fs12 color6">我的总余额(元)</div>
        </div>
        <div class="clear pt5">
          <div class="cash-spread wp50 pull-left relative border-right">
            <div class="fs18 color3">6666.00</div>
            <div class="fs12 color6">推广奖励(元)</div>
          </div>
          <div class="cash-renew wp50 pull-left">
            <div class="fs18 color3">3333.00</div>
            <div class="fs12 color6">续费奖励(元)</div>
          </div>
        </div>
      </div>
      <div class="pb5 bg-f2"></div>
      <div class="cash-records color3 fs14">
        <div class="hl44 relative pl15 pr15 flex border-bottom space-between" @click.stop="showRecords('spreadRecord')">
          推广奖励明细
          <span class="icon icon-arrowright"></span>
        </div>
        <div class="hl44 relative pl15 pr15 flex border-bottom space-between" @click.stop="showRecords('renewRecord')">
          续费奖励明细
          <span class="icon icon-arrowright"></span>
        </div>
        <div class="hl44 relative pl15 pr15 flex border-bottom space-between" @click.stop="showRecords('depositRecord')">
          提现记录
          <span class="icon icon-arrowright"></span>
        </div>
      </div>
      <div class="mt20 pl15 pr15">
        <mt-button type="primary" size="large" @click.native="depositCash">提现</mt-button>
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
    showRecords(val) {
      this.$router.push({
        name: val
      });
    },
    depositCash() {
      this.$router.push({
        name: "depositType",
        query: {
          id: 2222
        }
      });
    }
  }
};
</script>
