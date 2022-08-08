<template>
  <div class="container">
    <div class="content">
      <div>距{{ extData.title }}</div>
      <div clas="sub-title">{{ extData.subTitle }}</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
        <span class="days-text">天</span>
      </div>
      <div>{{ deadline }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  components: {},
  props: ['extData'],
  data() {
    return {
      today: '',
      nextDate: ''
    }
  },
  computed: {
    deadline: function () {
      if (this.nextDate) {
        return this.nextDate
      }
      return this.extData.date
    },
    days: function () {
      const todayNotHaveDay = this.$dayjs().format('YYYY-MM')
      if (this.extData.date) {
        return this.$dayjs(this.extData.date).diff(this.today, 'hour') / 24
      } else {
        let min = Number.MAX_SAFE_INTEGER
        this.extData.dayList.forEach((item, index) => {
          if (item) {
            const day = todayNotHaveDay + '-' + item
            const temp =
              this.$dayjs(day, 'YYYY-MM-DD').diff(this.today, 'hour') / 24
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
  created() {
    this.refresh()
  },
  methods: {
    refresh: function () {
      this.today = this.$dayjs().format('YYYY-MM-DD')
    }
  }
}
</script>
<style lang="less" scoped>
@import '@/css/base.less';
.container {
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
