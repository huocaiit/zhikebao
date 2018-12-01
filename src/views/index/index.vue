<template>
  <div class="main">
    <header class="text-center fs20">智客宝营销</header>
    <div class="notify pl15 pr15 text-center text-hide fs14">
      <span class="icon icon-gonggao"></span>186******业务员推广成功获得推广奖励999元
    </div>
    <div class="search-wrap ml15 mr15 mt5 pl30 pr30">
      <div class="search-icon text-center">
        <span class="icon icon-search"></span>
      </div>
      <input class="search-input" type="text" name="">
      <div class="search-close">
        <span class="icon icon-close"></span>
      </div>
    </div>
    <div class="pl15 pr15 pt5 pb5 fs14 bg-f8 mt10 color-gray">店铺推广</div>
    <div class="grids text-center border-left border-top">
      <div class="grid border-right border-bottom">
        <div class="grid-icon mb5">
          <span class="icon icon-luru menu-luru-icon"></span>
        </div>
        <div class="grid-label fs14">店铺录入</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('spread')">
        <div class="grid-icon mb5">
          <span class="icon icon-tuiguang menu-tuiguang-icon"></span>
        </div>
        <div class="grid-label fs14">我的推广</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('renew')">
        <div class="grid-icon mb5">
          <span class="icon icon-xufei menu-xufei-icon"></span>
        </div>
        <div class="grid-label fs14">店铺续费</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-chaxun menu-chaxun-icon"></span>
        </div>
        <div class="grid-label fs14">店铺查询</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('reward')">
        <div class="grid-icon mb5">
          <span class="icon icon-jiangli menu-jiangli-icon"></span>
        </div>
        <div class="grid-label fs14">奖励机制</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-guanyu menu-guanyu-icon"></span>
        </div>
        <div class="grid-label fs14">关于我们</div>
      </div>
    </div>
    <div class="pl15 pr15 pt5 pb5 fs14 bg-f8 color-gray">个人数据</div>
    <div class="grids text-center border-left border-top">
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-qianbao menu-qianbao-icon"></span>
        </div>
        <div class="grid-label fs14">我的钱包</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-xinxi menu-xinxi-icon"></span>
        </div>
        <div class="grid-label fs14">个人信息</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-shezhi menu-shezhi-icon"></span>
        </div>
        <div class="grid-label fs14">系统设置</div>
      </div>
      <div class="grid border-right border-bottom" @click.stop="jumpPage('storeList')">
        <div class="grid-icon mb5">
          <span class="icon icon-renzheng menu-renzheng-icon"></span>
        </div>
        <div class="grid-label fs14">实名认证</div>
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
    jumpPage(val) {
      this.$router.push({
        name: val
      });
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less">
.main {
  .grid-icon .icon {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    border-radius: 100%;
    color: #fff;
  }
  .menu-luru-icon,
  .menu-shezhi-icon {
    background-color: #5d98e6;
  }
  .menu-tuiguang-icon,
  .menu-xinxi-icon,
  .menu-renzheng-icon {
    background-color: #f28023;
  }
  .menu-xufei-icon,
  .menu-qianbao-icon {
    background-color: #8ed620;
  }
  .menu-chaxun-icon,
  .menu-guanyu-icon {
    background-color: #ec7783;
  }
  .menu-jiangli-icon {
    background-color: #50dcd9;
  }
}
</style>
