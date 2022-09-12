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
        <div class="days">
          {{ days }}<span class="days-text" v-if="days != '今日'">天</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getWeekDay } from '@/utils/date.js'
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

      return {
        value: date,
        weekDayText: getWeekDay(date).text
      }
    },
    days: function () {
      let days = 0

      if (this.extData.date) {
        days = this.$dayjs(this.extData.date).diff(this.today, 'hour') / 24
      } else {
        let min = Number.MAX_SAFE_INTEGER
        const monthList = [
          this.$dayjs().format('YYYY-MM'),
          this.$dayjs().add(1, 'month').format('YYYY-MM')
        ]

        this.extData.dayList.forEach((item, index) => {
          if (item) {
            monthList.forEach((month) => {
              const day = month + '-' + item
              const temp =
                this.$dayjs(day, 'YYYY-MM-DD').diff(this.today, 'hour') / 24
              if (temp >= 0) {
                if (temp < min) {
                  min = temp
                  this.nextDate = day
                }
              }
            })
          }
        })

        days = min
      }

      return days === 0 ? '今日' : days
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
      font-size: 0.8em;
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
