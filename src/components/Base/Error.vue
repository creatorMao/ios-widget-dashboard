<template>
  <div class="container">
    <div class="header">组件异常</div>
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
