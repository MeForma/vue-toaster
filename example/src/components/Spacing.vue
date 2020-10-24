<template>
  <div :style="spacingStyle">
    <slot />
  </div>
</template>

<script>
const BASE = 8
export default {
  name: 'Spacing',
  props: {
    top: {
      type: [String, Number],
      default: 0
    },
    bottom: {
      type: [String, Number],
      default: 0
    },
    left: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: [String, Number],
      default: 0
    },
    vertical: {
      type: [String, Number],
      default: 0
    },
    horizontal: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    spacingStyle() {
      const top = Math.max(Number(this.top), Number(this.vertical)) * BASE
      const right = Math.max(Number(this.right), Number(this.horizontal)) * BASE
      const bottom = Math.max(Number(this.bottom), Number(this.vertical)) * BASE
      const left = Math.max(Number(this.left), Number(this.horizontal)) * BASE

      return `margin: ${top}px ${right}px ${bottom}px ${left}px;`
    }
  }
}
</script>
