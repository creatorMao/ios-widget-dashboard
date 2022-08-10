<template>
  <div class="container">
    <div class="content">
      <div class="pic">
        <img src="@/assets/github.png" alt="" />
      </div>
      <div>
        <div class="stars-count">{{ res.stargazers_count }}</div>
        <div class="repo-name">
          {{ res.full_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardGithubRepoStars',
  props: ['extData'],
  data() {
    return {
      res: {
        stargazers_count: 41, // TODO DELETE
        full_name: 'creatorMao/TikTokDownloadTool'
      }
    }
  },
  created() {
    this.refresh()
  },
  mounted() {},
  methods: {
    refresh: function () {
      const repoFullName = this.extData.repoFullName
      if (repoFullName) {
        const url = `https://api.github.com/repos/${repoFullName}`
        this.$http.get(url).then(
          (result) => {
            const { data: res } = result
            this.res = res
            console.log(this.res)
          },
          (res) => {}
        )
      } else {
        console.log('repoFullName无效')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  color: white;
  background-color: #111111;
  .content {
    justify-content: space-between;
    align-items: flex-end;
    .pic {
      width: 2em;
      height: 2em;
      img {
        width: 100%;
      }
    }
    .stars-count {
      font-size: 2.3em;
    }
    .repo-name {
      font-size: 0.9em;
    }
  }
}
</style>
