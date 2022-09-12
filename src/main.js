import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import axios from 'axios'
import { Octokit } from '@octokit/core'
import * as echarts from 'echarts'
import './css/variable.less'
import './css/common.less'
// 组件
import BaseComponent from '@/components/Base/BaseComponent.vue'
import Group from '@/components/Base/Group.vue'
import Battery from '@/components/Base/Battery.vue'
import CountDown from '@/components/Date/CountDown.vue'
import CommemorationDate from '@/components/Date/CommemorationDate.vue'
import Time from '@/components/Date/Time.vue'
import DownloadInfo from '@/components/Common/DownloadInfo.vue'
import CommonCount from '@/components/Common/CommonCount.vue'
import LineChart from '@/components/Common/LineChart.vue'
import SwitchButton from '@/components/Common/SwitchButton.vue'
import GitHubRepoStars from '@/components/Info/Github/GitHubRepoStars.vue'
import GitHubRepoCloneTraffic from '@/components/Info/Github/GitHubRepoCloneTraffic.vue'
import TwitterFollowers from '@/components/Info/Twitter/TwitterFollowers.vue'
import TikTokDownloadStatus from '@/components/Info/TikTok/TikTokDownloadStatus.vue'
import HeFengWeather from '@/components/Weather/HeFengWeather.vue'
Vue.component('BaseComponent', BaseComponent)
Vue.component('Group', Group)
Vue.component('Battery', Battery)
Vue.component('CountDown', CountDown)
Vue.component('CommemorationDate', CommemorationDate)
Vue.component('Time', Time)
Vue.component('DownloadInfo', DownloadInfo)
Vue.component('CommonCount', CommonCount)
Vue.component('LineChart', LineChart)
Vue.component('SwitchButton', SwitchButton)
Vue.component('GitHubRepoStars', GitHubRepoStars)
Vue.component('GitHubRepoCloneTraffic', GitHubRepoCloneTraffic)
Vue.component('TwitterFollowers', TwitterFollowers)
Vue.component('TikTokDownloadStatus', TikTokDownloadStatus)
Vue.component('HeFengWeather', HeFengWeather)

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$Octokit = Octokit

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
