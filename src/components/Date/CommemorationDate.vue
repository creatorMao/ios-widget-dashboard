<template>
  <BaseComponent>
    <div class="count-down">
      <div>{{ title }}</div>
      <div clas="sub-title">{{ subTitle }}</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
        <span class="days-text">天</span>
      </div>
      <div>{{ date }}</div>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'

export default {
  name: 'CommemorationDate',
  components: {
    BaseComponent
  },
  props: ['title', 'subTitle', 'date'],
  data() {
    return {
      nextDate: ''
    }
  },
  computed: {
    days: function () {
      return (
        this.$dayjs(this.$dayjs().format('YYYY-MM-DD')).diff(
          this.date,
          'hour'
        ) / 24
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
  font-size: (28 / @vw);
  .days {
    font-size: (80 / @vw);
  }
  .sub-title {
    font-size: (24 / @vw);
  }
  .days-text {
    font-size: (30 / @vw);
  }
}
</style>
