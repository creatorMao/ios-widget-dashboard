<template>
  <component
    :is="childrenComponents[groupIndex].componentName"
    :headerData="childrenComponents[groupIndex].headerData"
    :extData="childrenComponents[groupIndex].extData"
  >
  </component>
</template>

<script>
export default {
  name: 'DashboardGroup',
  props: ['childrenComponents'],
  data() {
    return {
      groupIndex: 0
    }
  },
  components: {},
  mounted() {},
  destroyed() {},
  methods: {
    changeGroupIndex: function (firstFlag) {
      if (this.groupIndex + 1 > this.childrenComponents.length - 1) {
        this.groupIndex = 0
      } else {
        if (!firstFlag) {
          this.groupIndex += 1
        }
      }
    },
    refresh: function (firstFlag, updateInfo) {
      this.changeGroupIndex(firstFlag)

      this.$nextTick(() => {
        this.$children.forEach((item) => {
          if (item.refresh) {
            item.refresh(firstFlag, updateInfo)
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
