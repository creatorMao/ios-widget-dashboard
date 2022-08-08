<template>
  <div class="title" v-if="headerData.title">
    <img :src="headerData.iconUrl" alt="" />
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
@import '@/css/base.less';
.title {
  display: flex;
  align-items: center;
  font-size: (30 / @vw);
  img {
    width: (30 / @vw);
    height: (30 / @vw);
    margin-right: (10 / @vw);
  }
}
</style>
