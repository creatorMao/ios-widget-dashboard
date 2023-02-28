<template>
  <div class="container">
    <Header :headerData="{ title: '订阅' }">
      <template #right>还有{{ resetDay }}天重置</template>
    </Header>
    <div class="content">
      <div>
        已使用<span>{{ uesdProgress }}%</span>
      </div>
      <div>
        <span>{{ usedFormat }}/{{ allFormat }}GB</span>
      </div>
    </div>
    <VerticalProgress :progress="uesdProgress"></VerticalProgress>
    <Footer>更新于:{{ updateTimeShort }}</Footer>
  </div>
</template>

<script>
import { request } from '@/utils/request.js'
import { formatByte } from '@/utils/unitHelper.js'
export default {
  name: 'SSRSubscribeInfo',
  props: ['extData', 'headerData'],
  data() {
    return {
      used: 0,
      all: 0,
      resetDay: 0,
      expiredDate: undefined,
      updateTimeShort: ''
    }
  },

  mounted() {},
  computed: {
    usedFormat: function () {
      return formatByte(this.used, 'b', 'GB', false)
    },
    allFormat: function () {
      return formatByte(this.all, 'b', 'GB', false)
    },
    uesdProgress: function () {
      return this.all ? ((this.used / this.all) * 100).toFixed(0) : 0
    }
  },
  methods: {
    refresh: async function (firstFlag, { updateTimeShort }) {
      try {
        const { data } = await request(this.extData.requestInfo, firstFlag)
        this.used = data.u + data.d
        this.all = data.transfer_enable
        this.expiredDate = data.expired_at
        this.resetDay = data.reset_day
        this.updateTimeShort = updateTimeShort
        this.$parent.hideError()
      } catch (e) {
        this.$parent.showError(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
