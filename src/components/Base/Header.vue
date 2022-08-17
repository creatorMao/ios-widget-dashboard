<template>
  <div class="title" v-if="headerData.title">
    <img :src="headerData.iconUrl" alt="" v-if="headerData.iconUrl" />
    <span :style="{ color: headerData.titleColor }">{{
      headerData.title
    }}</span>
  </div>
</template>

<script>
export default {
  name: 'DashboardHeader',
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
  img {
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    margin-right: 0.5em;
  }
}
</style>
