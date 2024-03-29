<template>
  <div class="container">
    <Header
      :headerData="{ title: `${extData.title}(${extData.unitText})` }"
    ></Header>
    <div class="content">
      <div class="chart">
        <div ref="chart-content"></div>
      </div>
      <div class="footer">
        <div class="item">
          <div class="value" :style="{ color: color }">{{ nowValue }}</div>
          <div>Now</div>
        </div>
        <div class="item">
          <div class="value" :style="{ color: color }">{{ maxValue }}</div>
          <div>Max</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineChart',
  props: ['extData'],
  data() {
    return {
      echartsData: []
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  computed: {
    color: function () {
      return this.extData.color || '#5470c6'
    },
    nowValue: function () {
      const length = this.echartsData.length
      return length > 0 ? this.echartsData[length - 1].value[1].toFixed(1) : 0
    },
    maxValue: function () {
      let max = 0
      this.echartsData.forEach((item) => {
        const temp = item.value[1]
        if (temp > max) {
          max = temp
        }
      })
      return max.toFixed(1)
    }
  },
  methods: {
    initChart: function () {
      this.echartsObj = this.$echarts.init(this.$refs['chart-content'])

      const echartSetting = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            return `${params.value[1].toFixed(1)}`
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            showSymbol: false,
            color: this.color,
            data: this.echartsData
          }
        ]
      }

      const { yAxis = {} } = this.extData.echartsSetting || {}
      const { min: yMin, max: yMax } = yAxis
      if (yMin) {
        echartSetting.yAxis.min = yMin
      }
      if (yMax) {
        echartSetting.yAxis.max = yMax
      }

      this.echartsObj.setOption(echartSetting)

      window.addEventListener('resize', () => {
        this.echartsObj.resize()
      })
    },
    addEchartsData: function (dataItem) {
      if (this.echartsData.length === (this.extData.maxLength || 20)) {
        this.echartsData = this.echartsData.slice(1)
      }
      this.echartsData.push(dataItem)

      if (this.echartsObj) {
        this.echartsObj.setOption({
          series: [
            {
              data: this.echartsData
            }
          ]
        })
      }
    },
    refresh: async function (firstFlag) {
      try {
        const res =
          (await this.$request(this.extData.requestInfo, firstFlag)) || 0
        this.currentValue = res
        this.addEchartsData({
          value: [this.$dayjs().format('YYYY-MM-DD HH:mm:ss'), res]
        })

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
    .header {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-left: 1em;
      margin-top: 0.2em;
      font-size: 0.9em;
    }
    .chart {
      width: 100%;
      flex: 1;
      & > div {
        width: 100%;
        height: 100%;
      }
    }
    .footer {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > div {
          font-size: 0.7em;
        }
        .value {
          font-size: 1.4em;
          color: #5470c6;
        }
      }
    }
  }
}
</style>
