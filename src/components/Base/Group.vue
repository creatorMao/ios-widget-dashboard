<template>
  <component
    :is="childrenComponents[groupIndex].componentName"
    :headerData="childrenComponents[groupIndex].headerData"
    :extData="childrenComponents[groupIndex].extData"
  >
  </component>
</template>

<script>
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

export default {
  name: 'DashboardGroup',
  props: ['childrenComponents'],
  data() {
    return {
      groupIndex: 0
    }
  },
  components: {
    BaseComponent,
    Group,
    Battery,
    DownloadInfo,
    CountDown,
    CommemorationDate,
    Time,
    CommonCount,
    SwitchButton,
    TikTokDownloadStatus,
    TwitterFollowers,
    GitHubRepoStars,
    GitHubRepoCloneTraffic,
    LineChart,
    HeFengWeather
  },
  mounted() {},
  destroyed() {},
  methods: {
    changeGroupIndex: function (firstFlag) {
      if (this.groupIndex + 1 > this.childrenComponents.length - 1) {
        this.groupIndex = 0
      } else {
        if (!firstFlag) {
          this.groupIndex += 1
        }
      }
    },
    refresh: function (firstFlag, updateInfo) {
      this.changeGroupIndex(firstFlag)

      this.$nextTick(() => {
        this.$children.forEach((item) => {
          if (item.refresh) {
            item.refresh(firstFlag, updateInfo)
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
