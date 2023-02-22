<template>
  <div class="container">
    <Header :headerData="{ title: '组件异常' }"></Header>
    <div class="content">{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'DashError',
  props: ['msg'],
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
