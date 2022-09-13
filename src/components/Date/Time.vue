<template>
  <div class="container">
    <div class="content">
      <div class="week">
        <span>{{ weekDayText }}</span>
        <span>{{ monthText }}</span>
      </div>
      <div class="hour">{{ hourText }}</div>
    </div>
  </div>
</template>

<script>
import { getWeekDay } from '@/utils/date.js'

export default {
  name: 'Time',

  data() {
    return {
      now: null
    }
  },
  created() {
    this.refresh()
  },
  computed: {
    hourText() {
      return this.now.format('HH:mm')
    },
    monthText() {
      return this.now.format('M月D日')
    },
    weekDayText() {
      return getWeekDay(this.now).text
    }
  },
  mounted() {},

  methods: {
    refresh() {
      this.now = this.$dayjs()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: rgba(65, 76, 145, 1);
  color: white;
  .content {
    .week {
      font-size: 0.9em;
      & > span {
        margin: 0 0.2em;
      }
    }
    .hour {
      font-size: 2.9em;
    }
  }
}
</style>
