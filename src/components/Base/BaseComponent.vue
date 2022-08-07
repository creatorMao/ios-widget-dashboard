<template>
  <div :class="`component component-${size}`">
    <div class="component-contnet">
      <div class="title" v-if="title">
        <img :src="iconUrl" alt="" />
        <span :style="{ color: titleColor }">{{ title }}</span>
      </div>
      <div class="content">
        <slot name="default"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseComponent',
  props: ['title', 'titleColor', 'iconUrl', 'size'],
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
  box-sizing: border-box;
  width: (210 * 1.3 / @vw);
  height: (210 * 1.3 / @vw);
  padding: (30 / @vw);
  margin: (15 / @vw);
  border-radius: (30 / @vw);
  background-color: white;
  .component-contnet {
    display: flex;
    flex-direction: column;
    height: 100%;
    .title {
      display: flex;
      align-items: center;
      font-size: (30 / @vw);
      img {
        width: (30 / @vw);
        height: (30 / @vw);
        margin-right: (10 / @vw);
      }
    }
    .content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
.component-big {
  width: (210 * 1.3 * 1.5 / @vw);
  height: (210 * 1.3 * 1.5 / @vw);
}
</style>
