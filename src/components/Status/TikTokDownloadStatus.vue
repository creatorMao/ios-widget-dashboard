<template>
  <div class="container">
    <Header :headerData="headerConfig"></Header>
    <div class="content">
      <div>
        视频:<span class="value">{{ status.VIDEO_COUNT }}</span
        >个
      </div>
      <div>
        图片:<span class="value">{{ status.PHOTO_COUNT }}</span
        >张
      </div>
      <div>
        耗时:<span class="value"
          >{{ (status.DOWNLOAD_TIME_COST / 60).toFixed(0) }}分钟</span
        >
      </div>
      <div class="footer">
        <span class="value">{{ status.IMP_TIME }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'

export default {
  name: 'DashboardTikTokDownloadStatus',
  components: {
    Header
  },
  props: ['headerData', 'extData'],
  data() {
    return {
      headerConfig: {
        title: '抖音增量下载',
        iconUrl:
          'https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico'
      },
      status: {
        PHOTO_COUNT: '12', // TODO DELETE
        VIDEO_COUNT: '11',
        DOWNLOAD_TIME_COST: '111',
        IMP_TIME: '2020-12-11'
      }
    }
  },
  created() {
    this.refresh()
  },
  mounted() {},

  methods: {
    refresh: function () {
      this.$http.get(this.extData.api).then(
        (result) => {
          const { data: res } = result
          // console.log(res)
          this.status = res
        },
        (res) => {
          // console.log(res)
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .footer {
    margin-top: (10 / @vw);
    font-size: (20 / @vw);
  }
}
</style>
