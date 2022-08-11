<template>
  <div class="container">
    <div class="content">
      <div class="days">{{ days }}<span class="days-text">天</span></div>
      <div class="info">
        <p class="title">{{ extData.title }}</p>
        <p class="date">{{ extData.date }}</p>
      </div>
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
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 35%;
    left: -72%;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    background-color: rgba(241, 219, 145, 1);
  }
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    right: -46%;
    width: 50%;
    height: 27%;
    border-radius: 11%;
    background-color: #ed7156;
  }
  .content {
    align-items: flex-end;
    justify-content: space-between;
    .days {
      margin-right: 0.1em;
      font-size: 3em;
      .days-text {
        margin-left: 0.2em;
        font-size: 0.4em;
      }
    }
    .info {
      width: 100%;
      margin-bottom: 0.2em;
      font-size: 0.9em;
      p {
        margin-bottom: 0.3em;
      }
      .title {
        font-size: 1.2em;
      }
      .date {
        font-size: 0.8em;
      }
    }
  }
}
</style>
