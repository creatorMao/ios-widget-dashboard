<template>
  <div class="container">
    <Header
      :headerData="{
        title
      }"
    ></Header>
    <!-- 有一个下载时，展示遮罩 -->
    <div
      class="mask"
      v-if="oneDownloadingFlag"
      :style="{ height: `${this.downloadingTaskList[0].progress}%` }"
    ></div>
    <!-- 有多个下载，或者有已完成记录时 -->
    <div
      v-if="overOneDownloadingFlag || (!downloadingFlag && havaCompleteFlag)"
      class="pending-count"
    >
      {{ downloadingTaskList.length || completeTaskList.length }}
    </div>
    <div class="content">
      <!-- 无正在下载，无已完成记录 -->
      <div v-if="!downloadingFlag && !havaCompleteFlag" class="no-download">
        <div>暂无任务</div>
      </div>
      <!-- 有一个正在下载 -->
      <div v-if="oneDownloadingFlag">
        <div class="rate">{{ this.downloadingTaskList[0].progress }}%</div>
        <div class="speed">{{ this.downloadingTaskList[0].downloadSpeed }}</div>
      </div>
      <!-- 无正在下载，有已完成记录 -->
      <div v-if="!downloadingFlag && havaCompleteFlag" class="pendingMore">
        <div class="container">
          <div
            v-for="item in completeTaskList.slice(0, 3)"
            :key="item.taskId"
            class="task-item"
          >
            <div class="task-info">
              <div class="task-name ellipsis">
                {{ item.taskName }}
              </div>
              <div class="task-downloadSpeed ellipsis">
                {{ item.period }}
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
      <!-- 有多个下载 -->
      <div v-if="overOneDownloadingFlag" class="pendingMore">
        <div class="container">
          <div
            v-for="item in downloadingTaskList.slice(0, 3)"
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
      downloadingTaskList: [],
      completeTaskList: []
    }
  },
  computed: {
    oneDownloadingFlag: function () {
      return this.downloadingTaskList.length === 1
    },
    overOneDownloadingFlag: function () {
      return this.downloadingTaskList.length > 1
    },
    downloadingFlag: function () {
      return this.downloadingTaskList.length > 0
    },
    havaCompleteFlag: function () {
      return this.completeTaskList.length > 0
    },
    title: function () {
      let title = ''

      if (this.downloadingTaskList.length === 1) {
        title = this.downloadingTaskList[0].taskName
      }

      if (this.downloadingTaskList.length > 1) {
        title = '正在下载'
      }

      if (
        this.downloadingTaskList.length === 0 &&
        this.completeTaskList.length > 0
      ) {
        title = '已下载'
      }

      return title || this.headerData.title
    }
  },
  mounted() {},
  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      request(this.extData.downloadingAPI.requestInfo, firstFlag)
        .then((res) => {
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
          } = this.extData.downloadingAPI.fields

          if (taskList) {
            res = getPropertyValue(res, taskList)
          }

          res = res.map((element) => {
            const total = getPropertyValue(element, totalLength)
            const complete = getPropertyValue(element, completedLength)

            return {
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
          })

          this.downloadingTaskList = res

          return res
        })
        .then((res) => {
          if (res.length === 0) {
            return
          }

          request(this.extData.completeAPI.requestInfo, firstFlag).then(
            (completeList) => {
              const { taskList, taskId, taskName, period } =
                this.extData.completeAPI.fields

              if (taskList) {
                completeList = getPropertyValue(completeList, taskList)
              }

              this.completeTaskList = completeList.map((element) => {
                return {
                  taskId: getPropertyValue(element, taskId),
                  taskName: getPropertyValue(element, taskName),
                  period: getPropertyValue(element, period)
                }
              })
            }
          )
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
