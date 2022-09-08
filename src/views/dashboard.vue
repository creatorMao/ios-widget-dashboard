<template>
  <div
    class="dashboard"
    :style="{ background: `url('${dashboardConfig.backgroundImg}')` }"
  >
    <div class="dashboard-content">
      <BaseComponent
        v-for="item in dashboardConfig.componentList"
        :key="item.id"
        :size="item.size"
        :interval="item.interval"
      >
        <component
          :is="item.componentName"
          :headerData="item.headerData"
          :extData="item.extData"
          :childrenComponents="item.childrenComponents"
        ></component>
      </BaseComponent>
    </div>
    <div class="battery">
      <Battery></Battery>
    </div>
  </div>
</template>

<script>
import { config } from '@/views/dashboardConfig.js'

export default {
  name: 'DashBoard',
  components: {},
  props: ['configId'],
  created() {
    this.config = config
  },
  data() {
    return {
      config: {}
    }
  },
  beforeDestroy() {},

  mounted() {},
  computed: {
    dashboardConfig() {
      let resultConfig = config[0]

      if (this.configId) {
        config.some((element) => {
          if (element.id === this.configId) {
            resultConfig = element
            return true
          } else {
            return false
          }
        })
      }

      return resultConfig
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.dashboard {
  height: 100%;
  background-size: cover;
  &::after,
  .dashboard-content {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
  }
  &::after {
    z-index: 0;
    backdrop-filter: blur((20 / @vw));
  }
  .dashboard-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: (12 / @vw);
    z-index: 1;
  }
  .battery {
    position: absolute;
    right: 3px;
    bottom: 3px;
    z-index: 3;
  }
}
</style>
