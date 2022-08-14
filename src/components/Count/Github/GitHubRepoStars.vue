<template>
  <div class="container">
    <div class="content">
      <div class="pic">
        <img src="@/assets/github.png" alt="" />
      </div>
      <div>
        <div class="stars-count">
          {{ res.stargazers_count }}<img src="@/assets/star.png" alt="" />
        </div>
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
        stargazers_count: 0,
        full_name: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    refresh: function (firstFlag) {
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

        octokit
          .request('GET /repos/{owner}/{repo}', {
            owner: owner,
            repo: repo
          })
          .then((result) => {
            const { data: res } = result
            this.res = res
          })
      } else {
        const api = `https://api.github-star-counter.workers.dev/user/${owner}`

        this.$http.get(api).then(
          (result) => {
            const { data: res } = result
            this.res = {
              stargazers_count: res.stars,
              full_name: owner
            }
          },
          (res) => {}
        )
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
    align-items: flex-start;
    .pic {
      width: 100%;
      img {
        width: 2em;
        height: 2em;
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
      font-size: 0.9em;
    }
  }
}
</style>
