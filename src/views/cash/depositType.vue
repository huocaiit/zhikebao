<template lang="html">
  <div class="deposit-type-html">
    <mt-header title="提现" :fixed="true">
      <mt-button icon="back" slot="left" @click.stop="$router.back()"></mt-button>
    </mt-header>
    <div class="deposit-type pt44">
      <div class="bank-list">
        银行卡列表
      </div>
      <div class="no-bank-list pl15 pr15 pt50 text-center">
        <span class="icon icon-bank fs40 color-blue"></span>
        <div class="hl44 fs18 border-r-4 mt15 block-center wp50 text-center bg-blue color-white">添加银行卡</div>
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
