<template>
  <div class="mask" :style="{ height: `${progress}%` }"></div>
</template>

<script>
export default {
  name: 'VerticalProgress',
  props: ['progress'],
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
@green: rgba(57, 220, 152, 1);

.mask {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: @green;
}
</style>
