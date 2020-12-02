<template>
  <button
    class="jk-button"
    :class="[
      type ? 'jk-button-' + type : ''
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'JkButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./button.scss";
  @import "../../common.scss";
</style>
