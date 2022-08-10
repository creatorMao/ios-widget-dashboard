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
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '域名到期',
            date: '2024-03-08'
          }
        },
        {
          id: '3',
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '下一次学费还款',
            dayList: ['01', '19', '22']
          }
        },
        {
          id: '9',
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '8',
          componentName: 'TikTokDownloadStatus',
          interval: 5000,
          extData: {
            api: 'http:xxx'
          }
        },
        {
          id: '7',
          componentName: 'TwitterFollowers',
          interval: 5000,
          extData: {
            api: 'http:xxx'
          }
        },

        {
          id: '10',
          componentName: 'CountDown',
          size: 'default-long',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '11',
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '12',
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '13',
          componentName: 'CountDown',
          size: 'small',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '14',
          componentName: 'CountDown',
          size: 'small-long',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
          }
        },
        {
          id: '15',
          componentName: 'CountDown',
          size: 'big',
          extData: {
            title: '域名到期',
            date: '2022-11-28'
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
