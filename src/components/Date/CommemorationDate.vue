<template>
  <div class="container">
    <div class="content">
      <div>{{ extData.title }}</div>
      <div clas="sub-title">{{ extData.subTitle }}</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
        <span class="days-text">天</span>
      </div>
      <div>{{ extData.date }}</div>
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
