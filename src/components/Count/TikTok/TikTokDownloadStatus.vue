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
        <div class="title">耗时</div>
        <div class="value">
          {{ (status.DOWNLOAD_TIME_COST / 60).toFixed(0) }}
        </div>
      </div>
    </div>
    <Footer>
      更新于:
      {{ status.IMP_TIME }}
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import Footer from '@/components/Base/Footer.vue'
import tiktokIcon from '@/assets/tiktok.png'

export default {
  name: 'DashboardTikTokDownloadStatus',
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
  created() {
    this.refresh(true)
  },
  mounted() {},
  computed: {
    updateTime: function () {
      return this.$days(this.status.IMP_TIME).format('hh-mm-ss')
    }
  },
  methods: {
    refresh: function (firstFlag) {
      const url = this.extData.api
      if (url) {
        this.$http.get(url).then(
          (result) => {
            const { data: res } = result
            // console.log(res)
            this.status = res
          },
          (res) => {
            // console.log(res)
          }
        )
      } else {
        if (firstFlag) {
          console.log('url无效')
        }
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
        font-size: 2.2em;
      }
    }
  }
}
</style>
