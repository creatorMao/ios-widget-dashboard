<template>
  <div class="container">
    <Header
      :headerData="{
        title
      }"
    ></Header>
    <div class="mask" :style="{ height: completeRate.text }"></div>
    <div class="content">
      <div v-if="haveTaskFlag">
        <div class="rate">{{ completeRate.text }}</div>
        <div class="speed">{{ downloadSpeed }}</div>
      </div>
      <div v-if="!haveTaskFlag" class="no-download">
        <div>暂无任务</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import { request } from '@/utils/request.js'
import { getPropertyValue } from '@/utils/objectHelper.js'

export default {
  name: 'DashboardDownloadInfo',
  components: { Header },
  props: ['extData', 'headerData'],
  data() {
    return {
      downloadList: []
    }
  },
  computed: {
    haveTaskFlag: function () {
      return this.downloadList.length > 0
    },
    title: function () {
      if (this.downloadList.length === 1) {
        return this.downloadList[0].fileName || this.headerData.title
      }
      return this.headerData.title
    },
    downloadSpeed: function () {
      if (this.downloadList.length === 1) {
        return (this.downloadList[0].downloadSpeed / 1000).toFixed(1) + 'kb/s'
      }
      return ''
    },
    completeRate() {
      const result = {
        value: 0,
        text: ''
      }

      if (this.downloadList.length === 1) {
        const rate =
          this.downloadList[0].completedLength /
          this.downloadList[0].totalLength
        result.value = isNaN(rate) ? 0 : (rate * 100).toFixed(0)
        result.text = result.value + '%'
      }

      return result
    }
  },
  mounted() {},
  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      request(this.extData.requestInfo, firstFlag).then((res) => {
        const { list, fields } = this.extData.resultStructure
        const {
          fileName,
          fileId,
          downloadSpeed,
          uploadSpeed,
          completedLength,
          totalLength
        } = fields

        const resultList = getPropertyValue(res, list)
        if (resultList.length > 0) {
          resultList.forEach((element) => {
            const newFile = {
              fileName: getPropertyValue(element, fileName),
              fileId: getPropertyValue(element, fileId),
              downloadSpeed: getPropertyValue(element, downloadSpeed),
              uploadSpeed: getPropertyValue(element, uploadSpeed),
              completedLength: getPropertyValue(element, completedLength),
              totalLength: getPropertyValue(element, totalLength)
            }

            let existFlag = false
            let i = 0
            this.downloadList.forEach((item, index) => {
              if (item.fileId === newFile.fileId) {
                existFlag = true
                i = index
              }
            })

            if (!existFlag) {
              this.downloadList.push(newFile)
            } else {
              this.$set(this.downloadList, i, newFile)
            }
          })
        } else {
          this.downloadList = []
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .mask {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: rgba(80, 120, 254, 0.8);
  }
  .content {
    .rate {
      font-size: 2.3em;
    }
    .speed {
      font-size: 0.9em;
    }
    .no-download {
      color: rgba(80, 120, 254, 1);
    }
  }
}
</style>
