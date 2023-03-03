<template>
  <div :class="`component component-${size || 'default'}`">
    <slot
      v-if="!sonComponenetState.errorFlag"
      name="default"
      :headerData="headerData"
      :extData="extData"
    ></slot>
    <Error
      v-show="sonComponenetState.errorFlag"
      :msg="sonComponenetState.msg"
      :updateTime="sonComponenetState.updateTime.updateTimeLong"
    ></Error>
  </div>
</template>

<script>
import Error from '@/components/Base/Error.vue'

export default {
  name: 'BaseComponent',
  props: ['size', 'interval', 'headerData', 'extData'],
  components: {
    Error
  },
  data() {
    return {
      timer: null,
      sonComponenetState: {
        errorFlag: false,
        msg: '',
        updateTime: {}
      }
    }
  },
  mounted() {
    this.refresh(true)
  },
  created() {
    const interval = this.interval
    if (interval) {
      this.timer = setInterval(() => {
        this.refresh(false)
      }, interval)
    } else {
      // 未设置定时器，则每小时刷新一次
      this.timer = setInterval(() => {
        this.refresh(false)
      }, 1000 * 60 * 60)
    }
  },
  methods: {
    getUpdateTime: function () {
      const updateTime = this.$dayjs()
      return {
        updateTime,
        updateTimeLong: updateTime.format('YYYY-MM-DD HH:mm:ss'),
        updateTimeShort: updateTime.format('HH:mm:ss')
      }
    },
    refresh: function (firstFlag) {
      const { checkFlag, checkMsg } = this.check()
      if (!checkFlag) {
        if (firstFlag) {
          console.log(checkMsg)
        }
        return
      }

      this.$children.forEach((item) => {
        if (item.refresh) {
          item.refresh(firstFlag, this.getUpdateTime())
        }
      })
    },
    check() {
      if (
        this.extData &&
        this.extData.requestInfo &&
        !this.extData.requestInfo.url
      ) {
        return {
          checkFlag: false,
          checkMsg: 'url未设置'
        }
      }
      return {
        checkFlag: true
      }
    },
    showError: function (msg) {
      this.sonComponenetState.errorFlag = true
      this.sonComponenetState.msg = msg
      this.sonComponenetState.updateTime = this.getUpdateTime()
    },
    hideError: function () {
      this.sonComponenetState.errorFlag = false
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer)
  }
}
</script>

<style lang="less">
@margin: 24;
@size-small: 165;
@size-default: 195;
@size-big: 230;

.component {
  position: relative;
  box-sizing: border-box;
  margin: ((@margin / 2) / @vw);
  border-radius: (25 / @vw);
  background-color: white;
  overflow: hidden;
  word-break: break-all;
  & > .container {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: (20 / @vw);
    overflow: hidden;
    .title,
    .content,
    .footer {
      z-index: 2;
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      font-size: 1em;
    }
  }
}

.component-small {
  width: (@size-small / @vw);
  height: (@size-small / @vw);
  font-size: ((@size-small / 10) / @vw);
}
.component-small-long {
  width: (((@size-small*2) + @margin) / @vw);
  height: (@size-small / @vw);
  font-size: ((@size-small / 10) / @vw);
}

.component-default {
  width: (@size-default / @vw);
  height: (@size-default / @vw);
  font-size: ((@size-default / 10) / @vw);
}
.component-default-long {
  width: (((@size-default*2+ @margin)) / @vw);
  height: (@size-default / @vw);
  font-size: ((@size-default / 10) / @vw);
}

.component-big {
  width: (@size-big / @vw);
  height: (@size-big / @vw);
  font-size: ((@size-big / 10) / @vw);
}
.component-big-long {
  width: (((@size-big*2) + @margin) / @vw);
  height: (@size-big / @vw);
  font-size: ((@size-big / 10) / @vw);
}
</style>
