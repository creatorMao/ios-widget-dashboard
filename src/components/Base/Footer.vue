<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DashboardFooter',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  font-size: 0.7em;
}
</style>
