<template lang="html">
  <div class="my-html">
    <mt-header title="个人信息" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="my-wrap pt44">
      我的信息
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
