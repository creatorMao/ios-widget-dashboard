<template>
  <div class="title" v-if="headerData.title">
    <div class="flex-row-center left">
      <img :src="headerData.iconUrl" alt="" v-if="headerData.iconUrl" />
      <span :style="{ color: headerData.titleColor }" class="ellipsis">{{
        headerData.title
      }}</span>
    </div>
    <div class="right flex-row-center">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['headerData'],
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.title {
  display: flex;
  align-items: center;
  font-size: 0.9em;
  justify-content: space-between;
  img {
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>
