<template>
  <CommonCount
    :childFlag="true"
    :value="value"
    :extData="{
      ...extData,
      title: this.title
    }"
    :updateTimeShort="updateTimeShort"
  ></CommonCount>
</template>

<script>
import CommonCount from '@/components/Common/CommonCount.vue'
export default {
  name: 'GitHubRepoCloneTraffic',
  props: ['extData'],
  components: {
    CommonCount
  },
  data() {
    return {
      value: 0,
      title: '近14天项目clone数',
      updateTimeShort: ''
    }
  },
  created() {},
  mounted() {},
  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      this.updateTimeShort = updateTimeShort

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
          this.value = res.count
        })
    }
  }
}
</script>

<style lang="less" scoped></style>
