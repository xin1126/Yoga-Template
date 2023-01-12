<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  computed: {
    schedule() {
      return this.$store.state.schedule;
    },
  },
};
</script>

<template>
  <div class="container mb-8">
    <h2 class="mt-12 mb-6 text-center text-3xl text-primary sm:mt-16 sm:mb-8">
      立即預約
    </h2>
    <div class="flex cursor-none justify-center">
      <BaseButton
        padding="py-3 sm:px-12 px-[20px]"
        :bg="schedule === 1 ? 'bg-primary' : 'bg-light'"
        rounded="xl"
        class="mr-4 cursor-default sm:mr-7"
      >
        選擇方案{{ $store.state.schedule }}
      </BaseButton>
      <BaseButton
        padding="py-3 sm:px-12 px-[20px]"
        :bg="schedule === 2 ? 'bg-primary' : 'bg-light'"
        rounded="xl"
        class="mr-4 cursor-default sm:mr-7"
      >
        填寫資料
      </BaseButton>
      <BaseButton
        padding="py-3 sm:px-12 px-[20px]"
        :bg="schedule === 3 ? 'bg-primary' : 'bg-light'"
        rounded="xl"
        class="cursor-default"
      >
        完成預約
      </BaseButton>
    </div>
  </div>
</template>
