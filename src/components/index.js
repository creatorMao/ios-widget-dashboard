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
import Header from '@/components/Base/Header.vue'
import Footer from '@/components/Base/Footer.vue'
import DemoComponent from '@/components/DemoComponent.vue'

const componentList = [
  BaseComponent,
  Group,
  Battery,
  CountDown,
  CommemorationDate,
  Time,
  DownloadInfo,
  CommonCount,
  LineChart,
  SwitchButton,
  GitHubRepoStars,
  GitHubRepoCloneTraffic,
  TwitterFollowers,
  TikTokDownloadStatus,
  HeFengWeather,
  Header,
  Footer,
  DemoComponent
]

export default {
  install(Vue) {
    componentList.forEach((item) => {
      Vue.component(item.name, item)
    })
  }
}
