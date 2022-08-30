<template>
  <div class="container">
    <Header
      :headerData="{
        title
      }"
    ></Header>
    <div
      class="mask"
      v-if="pendingList.length === 1"
      :style="{ height: `${this.pendingList[0].progress}%` }"
    ></div>
    <div v-if="pendingList.length > 1" class="pending-count">
      {{ pendingList.length }}
    </div>
    <div
      v-if="pendingList.length === 0 && this.downloadList.length > 0"
      class="pending-count"
    >
      {{ downloadList.length }}
    </div>
    <div class="content">
      <div v-if="!haveTaskFlag" class="no-download">
        <div>暂无任务</div>
      </div>
      <div v-if="pendingList.length === 1">
        <div class="rate">{{ this.pendingList[0].progress }}%</div>
        <div class="speed">{{ this.pendingList[0].downloadSpeed }}</div>
      </div>
      <div v-if="pendingList.length === 0 && haveTaskFlag" class="pendingMore">
        <div class="container">
          <div
            v-for="item in downloadList.slice(0, 3)"
            :key="item.taskId"
            class="task-item"
          >
            <div class="task-info">
              <div class="task-name ellipsis">
                {{ item.taskName }}
              </div>
              <div class="task-downloadSpeed ellipsis">
                {{ item.downloadSpeed }}
              </div>
            </div>
            <div class="progress">
              <div
                class="progress-charts"
                :style="`width:${item.progress}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="pendingList.length > 1" class="pendingMore">
        <div class="container">
          <div
            v-for="item in pendingList.slice(0, 3)"
            :key="item.taskId"
            class="task-item"
          >
            <div class="task-info">
              <div class="task-name ellipsis">
                {{ item.taskName }}
              </div>
              <div class="task-downloadSpeed ellipsis">
                {{ item.downloadSpeed }}
              </div>
            </div>
            <div class="progress">
              <div
                class="progress-charts"
                :style="`width:${item.progress}%`"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import { request } from '@/utils/request.js'
import { getPropertyValue } from '@/utils/objectHelper.js'
import { formatDownloadSpeed } from '@/utils/unitHelper.js'

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
    pendingList: function () {
      return this.downloadList.filter((item) => {
        return item.progress !== 100
      })
    },
    title: function () {
      if (this.pendingList.length === 1) {
        return this.pendingList[0].taskName || this.headerData.title
      } else if (this.pendingList.length > 1) {
        return '正在下载'
      } else if (
        this.pendingList.length === 0 &&
        this.downloadList.length > 0
      ) {
        return '已下载'
      }
      return this.headerData.title
    }
  },
  mounted() {},
  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      request(this.extData.requestInfo, firstFlag).then((res) => {
        const {
          taskList,
          taskId,
          taskName,
          progress,
          completedLength,
          totalLength,
          uploadSpeed,
          downloadSpeed,
          speedUnit,
          speedFormatUnit
        } = this.extData.fields

        let downloadList = res
        if (taskList) {
          downloadList = getPropertyValue(res, taskList)
        }

        downloadList.forEach((element) => {
          const total = getPropertyValue(element, totalLength)
          const complete = getPropertyValue(element, completedLength)

          const newTask = {
            taskName: getPropertyValue(element, taskName),
            taskId: getPropertyValue(element, taskId),
            downloadSpeed: formatDownloadSpeed(
              getPropertyValue(element, downloadSpeed) || 0,
              speedUnit,
              speedFormatUnit
            ),
            uploadSpeed: formatDownloadSpeed(
              getPropertyValue(element, uploadSpeed) || 0,
              speedUnit,
              speedFormatUnit
            ),
            progress: progress
              ? getPropertyValue(element, progress)
              : this.calcProgress(total, complete)
          }

          const existFlag = this.downloadList.some((item, index) => {
            if (item.taskId === newTask.taskId) {
              this.$set(this.downloadList, index, newTask)
              return true
            } else {
              return false
            }
          })

          if (!existFlag) {
            this.downloadList.push(newTask)
          }
        })
      })
    },
    calcProgress: function (totalLength, completedLength) {
      const progress = completedLength / totalLength
      return isNaN(progress) ? 0 : (progress * 100).toFixed(0)
    }
  }
}
</script>

<style lang="less" scoped>
@green: rgba(57, 220, 152, 1);

.container {
  .mask {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background: @green;
  }
  .pending-count {
    position: absolute;
    right: 0.5em;
    top: 0.1em;
    font-size: 2.7em;
    color: @green;
  }
  .content {
    .rate {
      font-size: 2.3em;
    }
    .speed {
      font-size: 0.9em;
    }
    .no-download {
      color: rgba(0, 0, 0, 0.8);
    }
    & > div {
      text-align: center;
    }
    .pendingMore {
      width: 100%;
      height: 100%;
      .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        .task-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-top: 0.5em;
          font-size: 0.9em;
          align-items: center;
          .task-info {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8em;
            .task-name {
              width: 60%;
              text-align: left;
            }
            .task-downloadSpeed {
              width: 40%;
              text-align: right;
            }
          }
          .progress {
            width: 100%;
            margin-top: 0.2em;
            .progress-charts {
              height: 0.4em;
              background-color: @green;
              border-radius: 0.2em;
            }
          }
        }
      }
    }
  }
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
