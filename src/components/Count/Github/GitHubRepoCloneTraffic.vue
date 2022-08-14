<template>
  <CommonCount
    :childFlag="true"
    :value="value"
    :extData="{
      ...extData,
      title: this.title
    }"
  ></CommonCount>
</template>

<script>
import CommonCount from '@/components/Count/Common/CommonCount.vue'
export default {
  name: 'DashboardGithubRepoStars',
  props: ['extData'],
  components: {
    CommonCount
  },
  data() {
    return {
      value: 0,
      title: '近14天项目clone数'
    }
  },
  created() {
    this.refresh(true)
  },
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

      const octokit = new this.$Octokit({
        auth: personalAccessToken
      })

      octokit
        .request('GET /repos/{owner}/{repo}/traffic/clones', {
          owner: owner,
          repo: repo
        })
        .then((result) => {
          const { data: res } = result
          this.value = res.uniques
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
