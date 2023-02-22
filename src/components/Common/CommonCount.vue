<template>
  <div class="container">
    <Header :headerData="{ title: extData.title }"></Header>
    <div class="content">
      <div class="value-wrap flex-row-xright-ybottom">
        <span class="value">{{ value || currentValue || '' }}</span>
        <span class="unit-text">{{ extData.unitText }}</span>
      </div>
    </div>
    <Footer>
      <div class="update-time">更新于{{ updateTimeShort || updateTime }}</div>
    </Footer>
  </div>
</template>

<script>
import { request } from '@/utils/request.js'

export default {
  name: 'CommonCount',
  props: ['extData', 'value', 'childFlag', 'updateTimeShort'],
  data() {
    return {
      currentValue: 0,
      updateTime: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    refresh: async function (firstFlag, { updateTimeShort } = {}) {
      this.updateTime = updateTimeShort

      if (this.childFlag) {
        return
      }

      try {
        this.currentValue = await request(this.extData.requestInfo, firstFlag)
        this.$parent.hideError()
      } catch (e) {
        this.$parent.showError(e.message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .content {
    justify-content: space-between;
    & > div {
      width: 100%;
    }
    .value-wrap {
      height: 100%;
      .value {
        font-size: 2.6em;
      }
      .unit-text {
        font-size: 1.2em;
      }
    }
  }
  .footer {
    text-align: right;
  }
}
</style>
