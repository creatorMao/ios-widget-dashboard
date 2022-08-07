<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <CountDown title="域名到期" expirationDate="2023-08-06"> </CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
      <CountDown title="下一贷款还款日" expirationDate="2024-08-06"></CountDown>
    </div>
  </div>
</template>

<script>
import CountDown from '@/components/Date/CountDown.vue'

export default {
  name: 'DashBoard',
  components: {
    CountDown
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
@import '@/css/base.less';

.dashboard {
  height: 100%;
  background: url('@/assets/dashboard-bg1.jpg');
  background-size: cover;
  &::after,
  .dashboard-content {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
  }
  &::after {
    z-index: 0;
    backdrop-filter: blur((20 / @vw));
  }
  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    box-sizing: border-box;
    padding: (20 / @vw);
    z-index: 1;
  }
}
</style>
