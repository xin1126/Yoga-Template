<script>
export default {
  props: {
    rounded: {
      type: String,
      default: ''
    },
    padding: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: false
    },
    bg: {
      type: String,
      default: ''
    }
  }
}
</script>

<template>
  <button
    type="button"
    :class="[
      rounded === 'xl' ? 'rounded-xl' : 'rounded',
      border ? 'border border-primary !text-primary hover:bg-secondary hover:!text-white' : 'hover:opacity-80',
      bg === 'bg-light' ? 'text-dark' : 'text-white',
      bg,
      padding
    ]"
    class="duration-200 font-bold"
  >
    <slot />
  </button>
</template>
