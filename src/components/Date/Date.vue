<template>
  <BaseComponent>
    <div class="date">
      <div class="date">周日</div>
      <div>18-46</div>
      <div>2022-08-07</div>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'

export default {
  name: 'DashboardDate',
  components: {
    BaseComponent
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.date {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
