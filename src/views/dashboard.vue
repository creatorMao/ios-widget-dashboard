<template>
  <div class="dashboard">
    <div class="dashboard-content">
      <BaseComponent
        v-for="item in componentList"
        :key="item.id"
        :size="item.size"
      >
        <component
          :is="item.componentType"
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
import TikTokDownloadStatus from '@/components/Status/TikTokDownloadStatus.vue'
import CommemorationDate from '@/components/Date/CommemorationDate.vue'
import TwitterFollowers from '@/components/Status/TwitterFollowers.vue'

export default {
  name: 'DashBoard',
  components: {
    BaseComponent,
    CountDown,
    TikTokDownloadStatus,
    CommemorationDate,
    TwitterFollowers
  },
  created() {},

  data() {
    return {
      componentList: [
        {
          id: '1',
          componentType: 'CountDown',
          extData: {
            title: '域名到期',
            subTitle: 'smart',
            date: '2024-03-08'
          }
        },
        {
          id: '2',
          componentType: 'CountDown',
          extData: {
            title: '域名到期',
            subTitle: 'creator',
            date: '2022-11-28'
          }
        },
        {
          id: '3',
          componentType: 'CountDown',
          extData: {
            title: '下一次学费还款',
            dayList: ['01', '19', '22']
          }
        },
        {
          id: '4',
          componentType: 'CountDown',
          extData: {
            title: '服务器到期',
            subTitle: '118.xxxx',
            date: '2022-09-08'
          }
        },
        {
          id: '5',
          componentType: 'TikTokDownloadStatus',
          size: 'big',
          interval: 5000,
          extData: {
            api: 'http://xxx'
          }
        },
        {
          id: '6',
          componentType: 'CommemorationDate',
          extData: {
            title: '已失业',
            date: '2022-08-01'
          }
        },
        {
          id: '7',
          componentType: 'TwitterFollowers',
          interval: 5000,
          extData: {
            api: 'http://xxx'
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
@import '@/css/base.less';

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
