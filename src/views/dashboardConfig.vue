<template>
  <div>
    <pre>
      {{ JSON.stringify(dashboardConfig, null, '\t') }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DashboardDashboardConfig',

  data() {
    return {}
  },
  computed: {
    ...mapState(['dashboardConfig'])
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped></style>
