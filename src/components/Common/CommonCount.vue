<template>
  <div class="container">
    <div class="content">
      <div class="title">{{ extData.title }}</div>
      <div class="footer">
        <div class="value-wrap">
          <span class="value">{{ value || currentValue || '暂无' }}</span>
          <span class="unit-text">{{ extData.unitText }}</span>
        </div>
        <div class="update-time">更新于{{ updateTimeShort || updateTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/utils/request.js'

export default {
  name: 'DashboardCommonCount',
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
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      this.updateTime = updateTimeShort

      if (this.childFlag) {
        return
      }

      request(this.extData.requestInfo, firstFlag).then((res) => {
        this.currentValue = res
      })
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
    .title {
      text-align: left;
      font-size: 0.9em;
    }
    .footer {
      text-align: right;
      .value-wrap {
        .value {
          font-size: 2.6em;
        }
        .unit-text {
          font-size: 1.2em;
        }
      }
      .update-time {
        font-size: 0.7em;
      }
    }
  }
}
</style>
