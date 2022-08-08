<template>
  <div :class="`component component-${size}`">
    <slot
      name="default"
      :headerData="headerData"
      :extData="extData"
      ref="component"
    ></slot>
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
    if (this.interval) {
      this.timer = setInterval(() => {
        this.$refs.component.refresh()
      }, this.interval)
    } else {
      // 未设置定时器，则每天凌晨刷新一次。
      this.timer = setInterval(() => {
        if (this.$dayjs().format('HH-mm') === '00-00') {
          this.$refs.component.refresh()
        }
      }, 5000)
    }
  },
  methods: {},
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less">
@import '@/css/base.less';

.component {
  box-sizing: border-box;
  width: (210 * 1.3 / @vw);
  height: (210 * 1.3 / @vw);
  padding: (30 / @vw);
  margin: (15 / @vw);
  border-radius: (30 / @vw);
  background-color: white;
  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.component-big {
  width: (210 * 1.3 * 1.5 / @vw);
  height: (210 * 1.3 * 1.5 / @vw);
}
</style>
