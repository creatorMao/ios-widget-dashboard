<template>
  <div class="container">
    <Header :headerData="headerConfig">
      <template v-slot:right>
        <span>进度:</span>
        <span>{{ status.CURRENT }}</span>
        <span>/</span>
        <span>{{ status.TOTAL }}</span>
      </template>
    </Header>
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
import Footer from '@/components/Base/Footer.vue'
import tiktokIcon from '@/assets/tiktok.png'
import { request } from '@/utils/request.js'

export default {
  name: 'TikTokDownloadStatus',
  components: {
    Footer
  },
  props: ['headerData', 'extData'],
  data() {
    return {
      headerConfig: {
        title: '抖音下载',
        iconUrl: tiktokIcon
      },
      status: {
        PHOTO_COUNT: '',
        VIDEO_COUNT: '',
        FAIL_TOTAL: '',
        DOWNLOAD_TIME_COST: '',
        CURRENT: '',
        TOTAL: '',
        IMP_TIME: ''
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
      try {
        this.status = (
          await request(this.extData.requestInfo, firstFlag)
        ).data.parsedContent

        this.$parent.hideError()
      } catch (e) {
        this.$parent.showError(e.message)
      }
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
