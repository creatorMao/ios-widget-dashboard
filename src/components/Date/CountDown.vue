<template>
  <BaseComponent>
    <div class="count-down">
      <div>距{{ title }}</div>
      <div clas="sub-title">{{ subTitle }}</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
        <span class="days-text">天</span>
      </div>
      <div>{{ deadline }}</div>
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
  props: ['title', 'subTitle', 'date', 'dayList'],
  data() {
    return {
      nextDate: ''
    }
  },
  computed: {
    deadline: function () {
      if (this.nextDate) {
        return this.nextDate
      }
      return this.date
    },
    days: function () {
      const today = this.$dayjs().format('YYYY-MM-DD')
      const todayNotHaveDay = this.$dayjs().format('YYYY-MM')
      if (this.date) {
        return this.$dayjs(this.date).diff(today, 'hour') / 24
      } else {
        let min = Number.MAX_SAFE_INTEGER
        this.dayList.forEach((item, index) => {
          if (item) {
            const day = todayNotHaveDay + '-' + item
            const temp = this.$dayjs(day, 'YYYY-MM-DD').diff(today, 'hour') / 24
            if (temp >= 0) {
              if (temp < min) {
                min = temp
                this.nextDate = day
              }
            }
          }
        })
        return min
      }
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
