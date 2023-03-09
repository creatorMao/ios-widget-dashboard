<template>
  <div class="container">
    <Header :headerData="{ title: '组件异常' }">
      <template #right>
        <img class="img" @click="refreshManual" src="@/assets/refresh.png" />
      </template>
    </Header>
    <div class="content">{{ msg }}</div>
    <Footer>
      <span>{{ updateTime }}</span>
    </Footer>
  </div>
</template>

<script>
export default {
  name: 'DashError',
  props: ['msg', 'updateTime'],
  data() {
    return {}
  },

  mounted() {},

  methods: {
    refreshManual: function () {
      this.$parent.restartTimer(true)
    }
  }
}
</script>

<style lang="less" scoped>
.img {
  cursor: pointer;
}
</style>
