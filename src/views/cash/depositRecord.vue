<template lang="html">
  <div class="deposit-record-html">
    <mt-header title="提现记录" :fixed="true">
      <mt-button icon="back" slot="left" @click.stop="$router.back()"></mt-button>
    </mt-header>
    <div class="deposit-record pt44 bg-f2">
      <div class="record-list pl15 pr15 mb5 pb5 bg-white" v-for="item in 10" :key="item">
        <div class="hl44 relative border-bottom flex space-between">
          <div class="fs14 color6">申请时间：2017-10-01 14:20</div>
          <div class="fs16 color-default" v-if="item == 1">申请中</div>
          <div class="fs16 color-success" v-if="item == 2">已付款</div>
          <div class="fs16 color-error" v-if="item == 3">审核不通过</div>
        </div>
        <div class="mt10">
          <div class="hl24 flex space-between">
            <div class="fs14 color3">提现金额：9800.00</div>
            <div class="fs14 color6">余额：450.00元</div>
          </div>
          <div class="hl24 fs14 color3">所属银行：中国建设银行</div>
          <div class="hl24 fs14 color3">开户行姓名：柳士勇</div>
          <div class="hl24 fs14 color3">银行支行：上海浦江支行</div>
          <div class="hl24 fs14 color3">银行卡号：347*********0566</div>
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
  }
};
</script>
