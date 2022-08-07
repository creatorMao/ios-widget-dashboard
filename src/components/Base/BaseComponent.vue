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
  width: (210 * 1.3 / @vw);
  height: (210 * 1.3 / @vw);
  padding: (15 / @vw);
  margin: (15 / @vw);
  border-radius: (30 / @vw);
  background-color: white;
}
</style>
