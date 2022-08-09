<template>
  <div :class="`component component-${size}`">
    <slot name="default" :headerData="headerData" :extData="extData"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  props: ['size', 'interval', 'headerData', 'extData'],
  data() {
    return {}
  },
  mounted() {},
  created() {
    const interval = this.interval
    if (interval) {
      this.timer = setInterval(() => {
        this.refresh()
      }, interval)
    } else {
      // 未设置定时器，则每天凌晨刷新一次。
      this.timer = setInterval(() => {
        if (this.$dayjs().format('HH-mm') === '00-00') {
          this.refresh()
        }
      }, 5000)
    }
  },
  methods: {
    refresh: function () {
      this.$children.forEach((item) => {
        if (item.refresh) {
          item.refresh()
        }
      })
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less">
.component {
  box-sizing: border-box;
  width: (200 / @vw);
  height: (200 / @vw);
  padding: (15 / @vw);
  margin: (15 / @vw);
  border-radius: (30 / @vw);
  background-color: white;
  font-size: ((200 /10) / @vw);
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1em;
    }
  }
}
.component-small {
  width: (160 / @vw);
  height: (160 / @vw);
  font-size: ((160 /10) / @vw);
}
.component-big {
  width: (250 / @vw);
  height: (250 / @vw);
  font-size: ((250 /10) / @vw);
}
</style>
