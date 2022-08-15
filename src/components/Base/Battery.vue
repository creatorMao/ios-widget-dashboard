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
      let { charging, level } = battery

      battery.addEventListener('chargingchange', () => {
        console.log('充电状态改变')
        charging = battery.charging
      })

      battery.addEventListener('levelchange', () => {
        console.log('电量改变')
        level = battery.level
      })

      this.batteryInfo = {
        charging,
        level
      }
    })
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.battery {
  position: relative;
  width: 30px;
  height: 16px;
  background-color: #fff;
  font-size: 10px;
  text-align: center;
  line-height: 16px;
  &::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 3px;
    width: 3px;
    height: 9px;
    background-color: #fff;
  }
}
</style>
