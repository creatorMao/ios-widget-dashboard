<template>
  <div class="container">
    <div class="content">
      <div>{{ extData.title }}</div>
      <div class="day">
        <span class="day-value">{{ days }}</span>
        <span class="day-text">天</span>
      </div>
      <div class="footer">{{ extData.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommemorationDate',
  components: {},
  props: ['extData'],
  data() {
    return {
      today: ''
    }
  },
  created() {
    this.refresh()
  },
  computed: {
    days: function () {
      return (
        this.$dayjs(this.$dayjs(this.today).format('YYYY-MM-DD')).diff(
          this.extData.date,
          'hour'
        ) / 24
      )
    }
  },
  mounted() {},
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
