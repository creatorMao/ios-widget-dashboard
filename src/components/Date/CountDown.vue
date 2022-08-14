<template>
  <div
    class="container"
    :style="{
      backgroundColor:
        backgroundColorList[
          parseInt(Math.random() * backgroundColorList.length, 10)
        ]
    }"
  >
    <div class="content">
      <div class="deadline">
        <p>{{ deadline.value }}</p>
        <p class="day-text">{{ deadline.weekDayText }}</p>
      </div>
      <div>
        <div class="title">离{{ extData.title }}</div>
        <div class="days">{{ days }}<span class="days-text">天</span></div>
      </div>
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
      nextDate: '',
      backgroundColorList: [
        'rgb(48 73 91)',
        'rgb(73 146 176)',
        '#61a1a9',
        '#377880'
      ]
    }
  },
  computed: {
    deadline: function () {
      let date = ''
      if (this.nextDate) {
        date = this.nextDate
      } else {
        date = this.extData.date
      }

      const weekDay = ['日', '一', '二', '三', '四', '五', '六']
      return {
        value: date,
        weekDayText: `星期${weekDay[this.$dayjs(date).day()]}`
      }
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
  created() {},
  methods: {
    refresh: function () {
      this.today = this.$dayjs().format('YYYY-MM-DD')
    }
  }
}
</script>
<style lang="less" scoped>
.container {
  background-color: #377880;
  color: white;
  .content {
    justify-content: space-between;
    align-items: flex-start;
    .deadline {
      padding: 0.4em 1em;
      margin-top: 0.3em;
      font-size: 0.7em;
      padding-left: 0;
      padding-top: 0;
      .day-text {
        margin-top: 0.2em;
      }
    }
    .title {
      font-size: 1em;
    }
    .days {
      margin-top: 0.2em;
      font-size: 2.4em;
      .days-text {
        margin-left: 0.2em;
        font-size: 0.5em;
      }
    }
  }
}
</style>
