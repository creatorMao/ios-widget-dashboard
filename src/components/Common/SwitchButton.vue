<template>
  <div class="container">
    <div class="content">
      <div class="icon">
        <img :src="switchIcon" alt="" />
      </div>
      <div class="title">{{ extData.title }}</div>
      <div class="switch-button">
        <van-switch
          v-model="switchState"
          active-color="#FF9901"
          inactive-color="#D0D4DA"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Switch from 'vant/lib/switch'
import 'vant/lib/switch/style'
import { request } from '@/utils/request.js'
import fansActive from '@/assets/fans-active.png'
import fans from '@/assets/fans.png'
Vue.use(Switch)

export default {
  name: 'SwitchButton',
  props: ['extData'],
  computed: {
    switchIcon() {
      return this.switchState ? fansActive : fans
    }
  },
  data() {
    return {
      switchState: false
    }
  },
  mounted() {},
  methods: {
    refresh: function (firstFlag) {
      request(this.extData.requestInfo, firstFlag).then((res) => {
        this.switchState = res === 1
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .content {
    justify-content: space-evenly;
    .icon {
      img {
        width: 3em;
      }
    }
    .switch-button {
      display: flex;
      width: 100%;
      margin-top: 1em;
      justify-content: center;
      align-items: center;
      .van-switch {
        font-size: 1.5em;
      }
    }
  }
}
</style>
