<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <CountDown title="域名到期" subTitle="smart" expirationDate="2024-03-08">
      </CountDown>
      <CountDown
        title="域名到期"
        subTitle="creator"
        expirationDate="2022-11-28"
      >
      </CountDown>
      <CountDown title="下一次学费还款" :dayList="['01', '19', '22']">
      </CountDown>
      <CountDown
        title="服务器到期"
        subTitle="118.xxxx"
        expirationDate="2022-09-08"
      >
      </CountDown>
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
