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
        {{ this.$dayjs(status.IMP_TIME).format('MM-DD HH:mm') }}
      </span>
    </Footer>
  </div>
</template>

<script>
import Header from '@/components/Base/Header.vue'
import Footer from '@/components/Base/Footer.vue'
import twitterIcon from '@/assets/twitter.png'
import { request } from '@/utils/request.js'

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
        IMP_TIME: '08-16 10:10:10'
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
  created() {},
  mounted() {},
  methods: {
    refresh: function (firstFlag) {
      request(this.extData.requestInfo, firstFlag).then((result) => {
        this.status = result
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  text-align: center;
  color: #1d9bf0;
  .value {
    font-size: 2.6em;
  }
  .change-direction {
    font-size: 1em;
  }
}
</style>
