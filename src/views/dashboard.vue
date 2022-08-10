<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <BaseComponent
        v-for="item in componentList"
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
  created() {},

  data() {
    return {
      componentList: [
        {
          id: '1',
          componentName: 'CountDown',
          extData: {
            title: '域名到期',
            date: '2024-03-08'
          }
        },
        {
          id: '3',
          componentName: 'CountDown',
          extData: {
            title: '下一次学费还款',
            dayList: ['01', '19', '22']
          }
        },
        {
          id: '9',
          componentName: 'CountDown',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '8',
          componentName: 'TikTokDownloadStatus',
          interval: 1000 * 5,
          extData: {
            api: ''
          }
        },
        {
          id: '7',
          componentName: 'TwitterFollowers',
          interval: 1000 * 5,
          extData: {
            api: ''
          }
        },
        {
          id: '81',
          componentName: 'GitHubRepoStars',
          interval: 1000 * 60 * 60,
          extData: {
            repoFullName: ''
          }
        }
      ]
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
  background: url('@/assets/dashboard-bg1.jpg');
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
