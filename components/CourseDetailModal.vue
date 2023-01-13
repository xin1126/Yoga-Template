<script>
export default {
  props: {
    modalStatus: {
      type: Boolean,
      default: false,
    },
    detail: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<template>
  <div
    v-if="modalStatus"
    class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50"
    @click.stop.self.prevent="$emit('update:modalStatus', false)"
  >
    <div
      class="w-[90%] items-center justify-center rounded-xl bg-secondary px-4 py-8 md:flex md:w-auto md:px-8 md:py-16 xl:px-14"
    >
      <img
        class="mx-auto mb-4 h-[165px] w-[165px] rounded-xl md:mr-7 md:mb-0 md:h-[420px] md:w-[265px] xl:w-[420px]"
        :src="require(`@/assets/images/${detail.img}.jpg`)"
        alt="yoga"
      />
      <div class="text-white sm:max-w-[350px]">
        <h2 class="mb-2 text-3xl">{{ detail.title }}</h2>
        <p class="mb-4">
          {{ detail.teacher }}
          <span class="ml-2 rounded-2xl bg-primary py-1 px-4 text-sm">
            60 min
          </span>
        </p>
        <p>
          使用掛布懸掛在半空，進行哈達瑜珈體位法練習藉由地心引力的重力原理，鍛鍊核心肌群，舒緩脊椎壓力。
        </p>
        <p class="mb-4">
          課堂裡老師會視同學狀況安排教導倒立動作，對於不敢嘗試倒立的同學來說，藉由掛布的支持與保護，加上老師細心指導，讓同學能更快掌握。
        </p>
        <BaseButton
          padding="px-4 py-2"
          bg="bg-light"
          :click="() => $router.push('reserve')"
        >
          立即預約
        </BaseButton>
      </div>
    </div>
  </div>
</template>
