<template lang="html">
  <div class="setting-html">
    <mt-header title="系统设置" :fixed="true">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="setting-wrap pt44">
      系统设置
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
