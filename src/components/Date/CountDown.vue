<template>
  <BaseComponent>
    <div class="count-down">
      <div>距离{{ title }}还有</div>
      <div>
        <span class="days">
          {{ days }}
        </span>
      </div>
      <div>{{ expirationDate }}</div>
    </div>
  </BaseComponent>
</template>

<script>
import BaseComponent from '@/components/Base/BaseComponent.vue'

export default {
  name: 'DashboardCountDown',
  components: {
    BaseComponent
  },
  props: ['title', 'expirationDate'],
  data() {
    return {}
  },
  computed: {
    days: function () {
      return this.$dayjs(this.expirationDate).diff(this.$dayjs().format('YYYY-MM-DD'), 'week') * 7
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.component {
}
.count-down {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 13px;
  .days {
    font-size: 50px;
  }
}
</style>
