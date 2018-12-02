<template lang="html">
  <div class="about-html">
    <mt-header title="关于我们" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="about pt44">
      <div class="logo-wrap block-center wp40 pt20">
        <img src="../../assets/images/zly2.jpg" alt="" class="block border-r-4">
        <div class="logo-name text-center fs20 pt5 pb5 color3">智客宝</div>
      </div>
      <div class="about-content pl20 pr20 pt10 pb10 color6 fs14 relative border-bottom">
        某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某
        某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某
        某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某
        某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某某
      </div>
      <div class="contact-wrap pl20 pr20 pt10 pb20 color3 fs14">
        <p class="mb5">电话：<a href="tel:888888888" class="color-blue a-none-line">888888888</a></p>
        <p class="mb5">邮箱：<a href="mailto:zkb@163.com" class="color3 a-none-line">zkb@163.com</a></p>
        <p class="mb5">网址：<a href="www.zkb.com" class="color3 a-none-line">www.zkb.com</a></p>
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
