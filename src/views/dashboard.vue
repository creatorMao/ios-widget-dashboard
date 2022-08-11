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
  </div>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'
import CountDown from '@/components/Date/CountDown.vue'
import CommemorationDate from '@/components/Date/CommemorationDate.vue'
import TwitterFollowers from '@/components/Info/Twitter/TwitterFollowers.vue'
import TikTokDownloadStatus from '@/components/Info/TikTok/TikTokDownloadStatus.vue'
import GitHubRepoStars from '@/components/Info/Github/GitHubRepoStars.vue'
import { config } from '@/views/dashboardConfig.js'

export default {
  name: 'DashBoard',
  components: {
    BaseComponent,
    CountDown,
    CommemorationDate,
    TikTokDownloadStatus,
    TwitterFollowers,
    GitHubRepoStars
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
    box-sizing: border-box;
    padding: (20 / @vw);
    z-index: 1;
  }
}
</style>
