<template>
  <div class="container">
    <Header :headerData="{ title: '最新一次自动部署' }">
    </Header>
    <div class="content">
      <div class="pic">
      </div>
      <div>
        <div class="stars-count" v-if="status === 'completed'">
          {{ conclusionMap[conclusion] || '无' }}
        </div>
        <div class="repo-name" v-if="status != 'completed'">
          {{ statusMap[status] || '无' }}
        </div>
        <div v-if="updateTime" class="time">
          更新于
          {{ updateTime }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GitHubWorkFlow',
  props: ['extData'],
  data() {
    return {
      count: 0,
      updateTimeShort: '',
      updated_at: '',
      conclusion: '',
      conclusionMap: {
        success: '成功',
        failure: '失败'
      },
      status: '',
      statusMap: {
        queued: '排队中',
        completed: '已完成',
        in_progress: '进行中'
      }
    }
  },
  computed: {
    updateTime: function () {
      if (!this.updated_at) return
      return this.$dayjs(this.updated_at).format('HH:mm:ss')
    }
  },
  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      const { owner, repo, personalAccessToken } = this.extData
      if (!owner) {
        if (firstFlag) {
          console.log('用户名为空')
        }
        return
      }

      if (repo) {
        const octokit = new this.$Octokit({
          auth: personalAccessToken
        })

        octokit.request('GET /repos/{owner}/{repo}/actions/runs', {
          owner: owner,
          repo: repo,
          time1: updateTimeShort, // 防止请求缓存
          per_page: 1,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }).then((result) => {
          if (result.data) {
            this.updateTimeShort = updateTimeShort

            const { data: res } = result
            if (res.workflow_runs && res.workflow_runs.length > 0) {
              const { conclusion = '', status = '', updated_at: time = '' } = res.workflow_runs[0]
              this.updated_at = time
              this.conclusion = conclusion
              this.status = status
            }
          } else {
            this.conclusion = ''
            this.status = ''
            this.updated_at = ''
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .content {
    justify-content: space-between;
    align-items: flex-start;

    .pic {
      width: 100%;

      img {
        width: 2em;
        height: 1em;
        float: right;
      }
    }

    .stars-count {
      font-size: 2.3em;

      img {
        width: 0.5em;
      }
    }

    .repo-name {
      font-size: 2.3em;
    }

    .time {
      font-size: 1em;
    }
  }
}
</style>
