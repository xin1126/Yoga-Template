<script>
export default {
  props: {
    rounded: {
      type: String,
      default: "",
    },
    padding: {
      type: String,
      required: true,
    },
    border: {
      type: Boolean,
      default: false,
    },
    bg: {
      type: String,
      default: "",
    },
    click: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<template>
  <button
    type="button"
    :class="[
      rounded === 'xl' ? 'rounded-xl' : 'rounded',
      border
        ? 'border border-primary !text-primary hover:bg-secondary hover:!text-white'
        : 'hover:opacity-80',
      bg === 'bg-light' ? 'text-dark' : 'text-white',
      !padding.includes('px') && 'block, w-full',
      bg,
      padding,
    ]"
    class="whitespace-nowrap duration-200"
    @click="click"
  >
    <slot />
  </button>
</template>
