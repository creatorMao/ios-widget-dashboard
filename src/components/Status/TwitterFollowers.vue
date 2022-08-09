<template>
  <div class="container">
    <Header :headerData="headerConfig"></Header>
    <div class="content">
      <div>
        <span class="value">{{ status.FOLLOWERS_COUNT_TEXT }}</span>
        <span class="change-direction">{{ changeText }}</span>
      </div>
      <div class="update-time">{{ status.IMP_TIME }}</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'

export default {
  name: 'TwitterFollowers',
  props: ['headerData', 'extData'],
  components: { Header },
  data() {
    return {
      headerConfig: {
        title: '关注者',
        iconUrl: 'https://s3.bmp.ovh/imgs/2022/04/04/8bdbff42330cef61.png'
      },
      status: {
        FOLLOWERS_COUNT: '1', // TODO DELETE
        FOLLOWERS_COUNT_TEXT: '111',
        FOLLOWERS_COUNT_CHANGE: '11',
        IMP_TIME: '2022-08-10 10:10:10'
      }
    }
  },
  computed: {
    changeText: function () {
      const change = this.status.FOLLOWERS_COUNT_CHANGE
      const changeIcon = parseInt(change) > 0 ? '↑' : '↓'
      let changeText = ''
      const changeAbs = Math.abs(change)
      if (changeAbs !== 0) {
        changeText = changeIcon + changeAbs
      }
      return changeText
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
          this.status = res
        },
        (res) => {}
      )
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  color: #1d9bf0;
  .value {
    font-size: 2.5em;
  }
  .change-direction {
    font-size: 1em;
  }
  .update-time {
    margin-top: 1.8em;
    font-size: 0.7em;
  }
}
</style>
