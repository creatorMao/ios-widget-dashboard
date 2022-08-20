<template>
  <div class="battery" v-if="supportFlag">
    {{ `${batteryInfo.charging ? '+' : ''}${batteryLevel}` }}
  </div>
</template>

<script>
export default {
  name: 'DashboardBattery',

  data() {
    return {
      supportFlag: false,
      batteryInfo: {
        charging: false,
        level: 0
      }
    }
  },
  computed: {
    batteryLevel: function () {
      return `${(this.batteryInfo.level * 100).toFixed(0)}`
    }
  },
  created() {},
  mounted() {
    if (window.navigator.getBattery) {
      this.supportFlag = true
      window.navigator.getBattery().then((battery) => {
        const { charging, level } = battery

        this.batteryInfo = {
          charging,
          level
        }

        battery.addEventListener('chargingchange', () => {
          console.log('充电状态改变')
          this.batteryInfo.charging = battery.charging
        })

        battery.addEventListener('levelchange', () => {
          console.log('电量改变')
          this.batteryInfo.level = battery.level
        })
      })
    } else {
      console.log('当前页面/浏览器，因为浏览器权限策略，不支持获取电池信息')
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.battery {
  font-size: 14px;
  color: white;
}
</style>
