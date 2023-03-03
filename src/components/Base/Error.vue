<template>
  <div class="container">
    <Header :headerData="{ title: '组件异常' }"></Header>
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

  methods: {}
}
</script>

<style lang="scss" scoped></style>
