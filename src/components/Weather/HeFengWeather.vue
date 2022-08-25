<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="left">
          <div>{{ extData.cityName }}</div>
          <div>
            <span class="current-temp temp">{{ currentTemp }}</span>
          </div>
        </div>
        <div class="right">
          <i :class="currentWeatherIcon"></i>
          <div>{{ currentWeatherText }}</div>
        </div>
      </div>
      <div class="bottom">
        <div class="future-text">{{ futureWeatherText }}</div>
        <div class="today-info">
          <span>
            最高<span class="temp">{{ todayMaxTemp }}</span>
          </span>
          <span>
            最低<span class="temp">{{ todayMinTemp }}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/utils/request.js'
import 'qweather-icons/font/qweather-icons.css'
export default {
  name: 'DashboardHeFengWeather',
  props: ['extData'],
  data() {
    return {
      currentTemp: 0,
      currentWeatherIcon: '',
      currentWeatherText: '',
      todayMinTemp: 0,
      todayMaxTemp: 0,
      hourWeatherList: []
    }
  },
  computed: {
    params() {
      return {
        key: this.extData.key,
        location: this.extData.location
      }
    },
    futureWeatherText() {
      let text = '最近半天不下雨'
      this.hourWeatherList.some((hour, index) => {
        if (hour.text.indexOf('雨') !== -1) {
          text = `${hour.hour}点，${hour.text}`
          return true
        } else {
          return false
        }
      })
      return text
    }
  },
  mounted() {},
  methods: {
    refresh() {
      this.getCurrentWeatherInfo()
      this.get3dWeatherInfo()
      this.get24hourWeatherInfo()
    },
    getCurrentWeatherInfo() {
      request({
        url: 'https://devapi.qweather.com/v7/weather/now',
        config: {
          params: this.params
        }
      }).then((result) => {
        const { temp, icon, text } = result.now
        this.currentTemp = temp
        this.currentWeatherIcon = 'qi-' + icon
        this.currentWeatherText = text
      })
    },
    get3dWeatherInfo() {
      request({
        url: 'https://devapi.qweather.com/v7/weather/3d',
        config: {
          params: this.params
        }
      }).then((result) => {
        this.todayMinTemp = result.daily[0].tempMin
        this.todayMaxTemp = result.daily[0].tempMax
      })
    },
    get24hourWeatherInfo() {
      request({
        url: 'https://devapi.qweather.com/v7/weather/24h',
        config: {
          params: this.params
        }
      }).then((result) => {
        this.hourWeatherList = result.hourly.map((hour) => {
          const item = {}
          item.hour = this.$dayjs(hour.fxTime).format('h')
          item.text = hour.text
          return item
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  background-color: rgb(73, 146, 176);
  color: white;
  .content {
    justify-content: space-between;
    align-items: flex-start;
    .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .current-temp {
        font-size: 3em;
      }
      .right {
        font-size: 1em;
      }
    }
    .bottom {
      .future-text {
        font-size: 1em;
      }
      .today-info {
        margin-top: 0.2em;
        font-size: 0.9em;
        & > span {
          & > span {
            margin-left: 0.2em;
          }
          margin-right: 0.5em;
        }
      }
    }
    .temp {
      position: relative;
      &::after {
        content: '°';
        position: absolute;
        top: 0;
      }
    }
  }
}
</style>
