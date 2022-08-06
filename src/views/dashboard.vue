<template>
  <div class="dashboard">
    <CountDown title="域名到期" expirationDate="2023-08-06"> </CountDown>
    <CountDown title="下一贷款还款日" expirationDate="2024-08-06"> </CountDown>
  </div>
</template>

<script>
import CountDown from '@/components/Date/CountDown.vue'

export default {
  name: 'DashboardDashboard',
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
.dashboard {
  display: flex;
  padding: 20px;
}
</style>
