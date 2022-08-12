<template>
  <div class="container">
    <Header
      :headerData="{
        title: '关注者 ' + changeText,
        iconUrl: twitterIcon
      }"
    ></Header>
    <div class="content">
      <div>
        <span class="value">{{ status.FOLLOWERS_COUNT_TEXT }}</span>
      </div>
    </div>
    <Footer>
      <span>
        更新于:
        {{ status.IMP_TIME }}
      </span>
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import Footer from '@/components/Base/Footer.vue'
import twitterIcon from '@/assets/twitter.png'

export default {
  name: 'TwitterFollowers',
  props: ['headerData', 'extData'],
  components: { Header, Footer },
  data() {
    return {
      twitterIcon,
      status: {
        FOLLOWERS_COUNT: '1', // TODO DELETE
        FOLLOWERS_COUNT_TEXT: '111',
        FOLLOWERS_COUNT_CHANGE: '11',
        IMP_TIME: '10:10:10'
      }
    }
  },
  computed: {
    updateTime: function () {
      return this.$days(this.status.IMP_TIME).format('hh-mm-ss')
    },
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
    this.refresh(true)
  },
  mounted() {},
  methods: {
    refresh: function (firstFlag) {
      const url = this.extData.api
      if (url) {
        this.$http.get(this.extData.api).then(
          (result) => {
            const { data: res } = result
            this.status = res
          },
          (res) => {}
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
  text-align: center;
  color: #1d9bf0;
  .value {
    font-size: 3em;
  }
  .change-direction {
    font-size: 1em;
  }
}
</style>
