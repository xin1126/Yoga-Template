<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
};
</script>

<template>
  <div class="container py-12 xl:py-16">
    <h2 class="mb-6 text-center text-3xl text-primary xl:mb-8">課程介紹</h2>
    <div class="justify-center sm:flex">
      <img
        class="mb-2 max-h-[340px] w-full max-w-[540px] rounded-xl sm:mr-7 sm:mb-0"
        src="@/assets/images/yoga-4.jpeg"
        alt="yoga"
      />
      <div class="sm:min-w-[350px]">
        <h2 class="mb-2 text-3xl text-primary">本月限定課程- 空中瑜珈</h2>
        <p class="mb-4 text-secondary">
          授課老師：Carol Tang<span
            class="ml-2 rounded-2xl bg-primary py-1 px-4 text-sm text-white"
            >60 min</span
          >
        </p>
        <ul class="mb-4 text-primary">
          <li>使用掛布懸掛在半空，進行哈達瑜珈體位法練習</li>
          <li>藉由地心引力的重力原理</li>
          <li>鍛鍊核心肌群，舒緩脊椎壓力</li>
          <li>訓練身體協調性，深層放鬆身體</li>
          <li>課堂裡老師會視同學狀況安排教導倒立動作</li>
          <li>對於不敢嘗試倒立的同學來說</li>
          <li>藉由掛布的支持與保護</li>
          <li>加上老師細心指導，讓同學能更快掌握</li>
        </ul>
        <BaseButton padding="px-4 py-2" bg="bg-secondary">
          立即預約
        </BaseButton>
      </div>
    </div>
  </div>
</template>
