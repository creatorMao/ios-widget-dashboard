<template>
  <BaseComponent>
    <div class="count-down">
      <div>距离{{ title }}还有</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
        <span class="days-text">天</span>
      </div>
      <div>{{ expirationDate }}</div>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'

export default {
  name: 'CountDown',
  components: {
    BaseComponent
  },
  props: ['title', 'expirationDate'],
  data() {
    return {}
  },
  computed: {
    days: function () {
      return (
        this.$dayjs(this.expirationDate).diff(
          this.$dayjs().format('YYYY-MM-DD'),
          'week'
        ) * 7
      )
    }
  },
  mounted() {},
  methods: {}
}
</script>
<style lang="less" scoped>
@import '@/css/base.less';

.count-down {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: (13 / @vw);
  .days {
    font-size: (50 / @vw);
  }
  .days-text {
    font-size: (25 / @vw);
  }
}
</style>
