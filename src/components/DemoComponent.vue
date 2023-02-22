<template>
  <div class="container">
    <Header :headerData="{ title: '标题' }">
      <template #right>
        <span>插槽</span>
      </template>
    </Header>
    <div class="content">内容区域</div>
    <Footer>
      <span>更新于：2023-02-12</span>
    </Footer>
  </div>
</template>

<script>
export default {
  name: 'DemoComponent',

  data() {
    return {}
  },

  mounted() {},

  methods: {
    refresh: function (firstFlag, { updateTimeShort } = {}) {
      try {
        // 网络请求
        this.$parent.hideError()
      } catch (e) {
        this.$parent.showError(e.message)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
