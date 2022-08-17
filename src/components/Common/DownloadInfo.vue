<template>
  <div class="container">
    <div class="content"></div>
  </div>
</template>

<script>
import { request } from '@/utils/request.js'

export default {
  name: 'DashboardDownloadInfo',
  props: ['extData'],
  data() {
    return {}
  },

  mounted() {},

  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      request(this.extData.requestInfo, firstFlag).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
