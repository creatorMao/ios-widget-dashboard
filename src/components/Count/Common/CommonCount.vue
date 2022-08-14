<template>
  <div class="container">
    <div class="content">
      <div class="title">{{ extData.title }}</div>
      <div class="footer">
        <div class="value-wrap">
          <span class="value">{{ value || currentValue }}</span>
        </div>
        <div class="update-time">更新于{{ updateTimeShort || updateTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
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

      const api = this.extData.api

      if (api) {
        this.$http.get(api).then(
          (result) => {
            const { data: res } = result // eslint-disable-line no-unused-vars
            this.currentValue = eval(`res${this.extData.valueStructurePath}`)
          },
          (res) => {}
        )
      } else {
        if (firstFlag) {
          console.log('api为空...')
        }
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
    .title {
      text-align: left;
    }
    .footer {
      text-align: right;
      .value-wrap {
        .value {
          font-size: 3em;
        }
      }
      .update-time {
        font-size: 0.6em;
      }
    }
  }
}
</style>
