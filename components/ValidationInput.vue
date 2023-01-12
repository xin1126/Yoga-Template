<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
    rules: {
      type: String,
      default: "required",
    },
    type: {
      type: String,
      default: "text",
    },
    width: {
      type: String,
      default: "w-full",
    },
  },
};
</script>

<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" :name="name">
    <div class="mb-4">
      <label class="mb-2 block font-light text-secondary" :for="name">
        <slot />
      </label>
      <input
        v-if="type !== 'textarea'"
        :id="name"
        :value="value"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :class="width"
        class="rounded border border-secondary px-3 py-1 font-light placeholder:text-secondary"
        @input="$emit('input', $event.target.value)"
      />
      <textarea
        v-else
        :id="name"
        :value="value"
        :name="name"
        class="w-full rounded border border-secondary"
        rows="9"
        @input="$emit('input', $event.target.value)"
      />
      <p class="text-red-700">{{ errors[0] }}</p>
    </div>
  </ValidationProvider>
</template>
