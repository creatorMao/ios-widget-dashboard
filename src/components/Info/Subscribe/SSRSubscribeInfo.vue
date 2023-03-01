<template>
  <div class="container">
    <Header :headerData="{ title: '订阅' }">
      <template #right>{{ resetDayFormat }}后重置</template>
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
import { formatByte, formatDay } from '@/utils/unitHelper.js'
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
      return formatByte(this.used, 'B', 'GB', false)
    },
    allFormat: function () {
      return formatByte(this.all, 'B', 'GB', false)
    },
    uesdProgress: function () {
      return this.all ? ((this.used / this.all) * 100).toFixed(0) : 0
    },
    resetDayFormat: function () {
      return formatDay(this.resetDay).dayText
    }
  },
  methods: {
    refresh: async function (firstFlag, { updateTimeShort }) {
      try {
        const { data } = await this.$request(
          this.extData.requestInfo,
          firstFlag
        )
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
