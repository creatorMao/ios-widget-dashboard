<template>
  <div class="component">
    <slot name="default"></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',

  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
@import '@/css/base.less';

.component {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: (197 / @vw);
  height: (197 / @vw);
  padding: (10 / @vw);
  margin: (10 / @vw);
  border-radius: (25 / @vw);
  background-color: white;
}
</style>
