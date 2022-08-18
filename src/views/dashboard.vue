<template>
  <div
    class="dashboard"
    :style="{ background: `url('${config.backgroundImg}')` }"
  >
    <div class="dashboard-content">
      <BaseComponent
        v-for="item in config.componentList"
        :key="item.id"
        :size="item.size"
        :interval="item.interval"
      >
        <component
          :is="item.componentName"
          :headerData="item.headerData"
          :extData="item.extData"
        ></component>
      </BaseComponent>
    </div>
    <div class="battery">
      <Battery></Battery>
    </div>
  </div>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'
import Battery from '@/components/Base/Battery.vue'
import CountDown from '@/components/Date/CountDown.vue'
import CommemorationDate from '@/components/Date/CommemorationDate.vue'
import DownloadInfo from '@/components/Common/DownloadInfo.vue'
import CommonCount from '@/components/Common/CommonCount.vue'
import LineChart from '@/components/Common/LineChart.vue'
import GitHubRepoStars from '@/components/Info/Github/GitHubRepoStars.vue'
import GitHubRepoCloneTraffic from '@/components/Info/Github/GitHubRepoCloneTraffic.vue'
import TwitterFollowers from '@/components/Info/Twitter/TwitterFollowers.vue'
import TikTokDownloadStatus from '@/components/Info/TikTok/TikTokDownloadStatus.vue'
import { config } from '@/views/dashboardConfig.js'

export default {
  name: 'DashBoard',
  components: {
    BaseComponent,
    Battery,
    DownloadInfo,
    CountDown,
    CommemorationDate,
    CommonCount,
    TikTokDownloadStatus,
    TwitterFollowers,
    GitHubRepoStars,
    GitHubRepoCloneTraffic,
    LineChart
  },
  created() {
    this.config = config
  },
  data() {
    return {
      config: {}
    }
  },
  beforeDestroy() {},

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
  background-size: cover;
  &::after,
  .dashboard-content {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
  }
  &::after {
    z-index: 0;
    backdrop-filter: blur((20 / @vw));
  }
  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: (12 / @vw);
    z-index: 1;
  }
  .battery {
    position: absolute;
    right: 3px;
    bottom: 3px;
    z-index: 3;
  }
}
</style>
