<template>
  <div class="store-detail-html">
    <mt-header title="店铺详细">
      <mt-button icon="back" slot="left" @click.stop="$router.back()"></mt-button>
      <mt-button slot="right">编辑</mt-button>
    </mt-header>
    <div class="store-wrap clear pt10 pl10">
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
      <div class="store-item pr10">
        <div class="store-img ">
          <img src="../../assets/images/zly.jpg" alt="" class="block">
        </div>
      </div>
    </div>
    <div class="store-content pt10 pb10 pl10 pr10">
      <div class="store-title color3 fs14 mb5">店铺名称：浦江新天地足浴店</div>
      <div class="store-sub-title color6 fs12 mb5">店铺类型：洗浴中心</div>
      <div class="store-sub-title color6 fs12 mb5">店铺联系人：张三</div>
      <div class="store-sub-title color6 fs12 mb5">店铺联系电话：18616322701</div>
      <div class="store-sub-title color6 fs12 mb5">店铺地址：安徽合肥市蜀山区</div>
      <div class="store-sub-title color6 fs12 mb5">详细地址：田林路398号新业大楼2号楼6楼</div>
      <div class="store-sub-title color6 fs12 mb5">推广状态：推广成功</div>
      <div class="store-sub-title color6 fs12 mb5">设备数量：3台</div>
      <div class="store-sub-title color6 fs12 mb5">设备总价格：888元</div>
      <div class="store-sub-title color6 fs12 mb5">录入时间：2018-11-12 12：23</div>
      <div class="store-sub-title color6 fs12 mb5">推广奖励：3000元</div>
      <div class="store-sub-title color6 fs12 mb5">备注：2018年11余额12号推荐的</div>
      <div class="store-sub-title color6 fs12 mb5">提交审核状态：<span class="color-default">待审核</span></div>
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
<style lang="less" rel="stylesheet/less">
.store-detail-html {
  overflow: hidden;
  .store-wrap {
    white-space: nowrap;
    overflow-x: auto;
    .store-item {
      width: 30%;
      display: inline-block;
    }
    .store-img {
      padding-top: 100%;
      position: relative;
      img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>
