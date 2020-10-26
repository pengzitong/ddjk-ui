<template>
  <div class="ddjk-layout">
    <div class="ddjk-header" :style="{ height: _headerHeight }">
      <slot name="header">
        Header
      </slot>
    </div>
    <div class="ddjk-content">
      <slot name="content">
        Content
      </slot>
    </div>
    <div class="ddjk-footer" :style="{ height: _footerHeight }">
      <slot name="footer">
        Footer
      </slot>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Layout',
  props: {
    headerHeight: {
      type: Number,
      default: 50
    },
    footerHeight: {
      type: Number,
      default: 50
    }
  },
  computed: {
    _headerHeight() {
      return this.headerHeight + 'px'
    },
    _footerHeight() {
      return this.footerHeight + 'px'
    }
  }
}
</script>

<style scoped lang="scss">
.ddjk-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  .ddjk-content {
    flex: 1;
    overflow-y: auto;
  }
}
</style>
