<template>
  <div class="battery">
    {{ batteryLevel }}
  </div>
</template>

<script>
export default {
  name: 'DashboardBattery',

  data() {
    return {
      batteryInfo: {
        charging: false,
        level: 0
      }
    }
  },
  computed: {
    batteryLevel: function () {
      return `${this.batteryInfo.level * 100}`
    }
  },
  created() {
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
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.battery {
  font-size: 14px;
  color: white;
}
</style>
