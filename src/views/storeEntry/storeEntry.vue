<template lang="html">
  <div class="store-entry-html">
    <mt-header title="店铺录入" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="store-entry-wrap pt44">
      店铺录入
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
