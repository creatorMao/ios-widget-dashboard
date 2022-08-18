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
export default {
  name: 'DashboardTime',

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
      const weekDay = ['日', '一', '二', '三', '四', '五', '六']
      return `星期${weekDay[this.now.day()]}`
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
