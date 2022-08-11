<template>
  <div :class="`component component-${size || 'default'}`">
    <slot name="default" :headerData="headerData" :extData="extData"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  props: ['size', 'interval', 'headerData', 'extData'],
  data() {
    return {
      timer: null
    }
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
  position: relative;
  box-sizing: border-box;
  margin: (15 / @vw);
  border-radius: (25 / @vw);
  background-color: white;
  overflow: hidden;
  word-break: break-all;
  .container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: (20 / @vw);
    overflow: hidden;
    .content {
      z-index: 2;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1em;
    }
  }
}

@size-small: 160;
@size-default: 200;
@size-big: 250;

.component-small {
  width: (@size-small / @vw);
  height: (@size-small / @vw);
  font-size: ((@size-small / 10) / @vw);
}
.component-small-long {
  width: ((@size-small*2) / @vw);
  height: (@size-small / @vw);
  font-size: ((@size-small / 10) / @vw);
}

.component-default {
  width: (@size-default / @vw);
  height: (@size-default / @vw);
  font-size: ((@size-default / 10) / @vw);
}
.component-default-long {
  width: ((@size-default*2) / @vw);
  height: (@size-default / @vw);
  font-size: ((@size-default / 10) / @vw);
}

.component-big {
  width: (@size-big / @vw);
  height: (@size-big / @vw);
  font-size: ((@size-big / 10) / @vw);
}
.component-big-long {
  width: ((@size-big*2) / @vw);
  height: (@size-big / @vw);
  font-size: ((@size-big / 10) / @vw);
}
</style>