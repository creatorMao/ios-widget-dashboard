<template>
  <div class="component">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'DashboardBaseComponent',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: white;
}
</style>
