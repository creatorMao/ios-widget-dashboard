<template>
  <BaseComponent
    title="关注者"
    iconUrl="https://s3.bmp.ovh/imgs/2022/04/04/8bdbff42330cef61.png"
  >
    <div class="container">
      <div>
        <span>
          {{ status.FOLLOWERS_COUNT_TEXT }}
        </span>
        <span class="change">
          {{ changeText }}
        </span>
      </div>
      <div class="update-time">{{ status.IMP_TIME }}</div>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'

export default {
  name: 'TwitterFollowers',
  components: {
    BaseComponent
  },
  data() {
    return {
      status: {
        FOLLOWERS_COUNT: '11', // TODO DELETE
        FOLLOWERS_COUNT_TEXT: '11',
        FOLLOWERS_COUNT_CHANGE: '2'
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
      this.$http.get('xxx').then(
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
@import '@/css/base.less';

.container {
  font-size: (60 / @vw);
  text-align: center;
  .change {
    font-size: (25 / @vw);
  }
  .update-time {
    margin-top: (20 / @vw);
    font-size: (20 / @vw);
  }
}
</style>
