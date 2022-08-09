<template>
  <div class="container">
    <div class="content">
      <div>{{ extData.title }}</div>
      <div class="day">
        <span class="day-value">{{ days }}</span>
        <span class="day-text">天</span>
      </div>
      <div class="footer">{{ deadline }}</div>
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
.container {
  .content {
    .day {
      margin: 0.2em 0em;
      .day-value {
        margin-right: 0.1em;
        font-size: 2.5em;
      }
      .day-text {
        font-size: 1.2em;
      }
    }
    .footer {
      font-size: 0.8em;
    }
  }
}
</style>
