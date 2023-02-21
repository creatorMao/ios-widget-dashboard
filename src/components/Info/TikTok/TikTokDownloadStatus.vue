<template>
  <div class="container">
    <Header :headerData="headerConfig"></Header>
    <div class="content">
      <div class="item">
        <div class="title">视频</div>
        <div class="value">
          {{ status.VIDEO_COUNT }}
        </div>
      </div>
      <div class="item">
        <div class="title">图片</div>
        <div class="value">{{ status.PHOTO_COUNT }}</div>
      </div>
      <div class="item">
        <div class="title">异常</div>
        <div class="value">{{ status.FAIL_TOTAL }}</div>
      </div>
      <div class="item">
        <div class="title">耗时</div>
        <div class="value">
          {{ (status.DOWNLOAD_TIME_COST / 60).toFixed(0) }}
        </div>
      </div>
    </div>
    <Footer>
      更新于:
      {{ this.$dayjs(status.IMP_TIME).format('MM-DD HH:mm') }}
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import Footer from '@/components/Base/Footer.vue'
import tiktokIcon from '@/assets/tiktok.png'
import { request } from '@/utils/request.js'

export default {
  name: 'TikTokDownloadStatus',
  components: {
    Header,
    Footer
  },
  props: ['headerData', 'extData'],
  data() {
    return {
      headerConfig: {
        title: '抖音增量下载',
        iconUrl: tiktokIcon
      },
      status: {
        PHOTO_COUNT: '12', // TODO DELETE
        VIDEO_COUNT: '11',
        DOWNLOAD_TIME_COST: '111',
        IMP_TIME: '2020-12-11'
      }
    }
  },
  created() {},
  mounted() {},
  computed: {
    updateTime: function () {
      return this.$days(this.status.IMP_TIME).format('hh-mm-ss')
    }
  },
  methods: {
    refresh: async function (firstFlag) {
      this.status = (await request(this.extData.requestInfo, firstFlag)).data.parsedContent
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  &::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 35%;
    left: -72%;
    width: 150%;
    height: 150%;
    border-radius: 50%;
    background-color: rgba(241, 219, 145, 1);
  }
  .content {
    flex-direction: row;
    justify-content: space-around;
    .item {
      font-size: 0.8em;
      text-align: center;
      .title {
        color: #6a6463;
      }
      .value {
        margin-top: 0.1em;
        font-size: 1.9em;
      }
    }
  }
}
.component-big-long {
  .container {
    .content {
      .item {
        font-size: 1em;
      }
      .value {
        font-size: 2.1em;
      }
    }
    .footer {
      font-size: 0.8em;
    }
  }
}
</style>
