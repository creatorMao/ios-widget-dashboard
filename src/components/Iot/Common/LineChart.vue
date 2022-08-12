<template>
  <div class="container">
    <div class="content">
      <div class="header">
        <span>{{ extData.title }}({{ extData.unitText }})</span>
      </div>
      <div class="chart">
        <div ref="chart-content"></div>
      </div>
      <div class="footer">
        <div class="item">
          <div class="value">{{ nowValue }}</div>
          <div>Now</div>
        </div>
        <div class="item">
          <div class="value">{{ maxValue }}</div>
          <div>Max</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardTemperature',
  props: ['extData'],
  data() {
    return {
      echartsData: []
    }
  },
  created() {
    this.refresh(true)
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  computed: {
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
      this.echartsObj.setOption({
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          formatter: function (params) {
            params = params[0]
            const date = new Date(params.name)
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            )
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
            data: this.echartsData
          }
        ]
      })
      window.addEventListener('resize', () => {
        this.echartsObj.resize()
      })
    },
    addEchartsData: function (dataItem) {
      if (this.echartsData.length === (this.extData.maxLength || 25)) {
        this.echartsData = this.echartsData.slice(1)
      }
      this.echartsData.push(dataItem)
    },
    refresh: function (firstFlag) {
      const url = this.extData.api

      if (url) {
        // 真实接口数据
        this.$http.get(url).then(
          (result) => {
            const { data: res } = result
            this.addEchartsData({
              value: [this.$dayjs().format('YYYY-MM-DD HH:mm:ss'), res.value]
            })
          },
          (res) => {}
        )
      } else {
        // 模拟数据
        if (firstFlag) {
          console.log('url无效，正在模拟数据...')
        }

        this.addEchartsData({
          value: [
            this.$dayjs().format('YYYY-MM-DD HH:mm:ss'),
            Math.random() * 10
          ]
        })
      }

      if (this.echartsObj) {
        this.echartsObj.setOption({
          series: [
            {
              data: this.echartsData
            }
          ]
        })
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
