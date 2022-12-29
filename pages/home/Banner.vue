<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "IndexPage",
  components: {
    BaseButton,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div
    :style="{
      'background-image': `url(${require('@/assets/images/header.jpeg')})`,
    }"
    class="mt-[-50px] flex h-[calc(100vh_-_86px)] w-full items-center bg-cover bg-bottom md:mt-0"
  >
    <div class="container md:pl-[110px]">
      <p class="text-dark">健身輕時尚</p>
      <h1 class="py-2 text-3xl text-dark md:text-4xl">DOYOGA，做你的瑜珈</h1>
      <p class="mb-4 text-xl text-dark md:text-2xl">
        多給自己一點時間享受靜謐，傾聽內心的聲音。
      </p>
      <BaseButton padding="py-2 px-4" bg="bg-light" class="mr-2">
        立即預約
      </BaseButton>
      <BaseButton padding="py-2 px-4" bg="bg-secondary"> 課程介紹 </BaseButton>
    </div>
  </div>
</template>
