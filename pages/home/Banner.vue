<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'IndexPage',
  components: {
    BaseButton
  },
  layout: 'BaseLayout'
}
</script>

<template>
  <div class="bg-[url('@/assets/images/header.jpeg')] h-[calc(100vh_-_86px)] w-full bg-cover bg-bottom flex items-center">
    <div class="container md:pl-[110px]">
      <p class="text-dark">
        健身輕時尚
      </p>
      <h1 class="md:text-4xl text-3xl text-dark py-2">
        DOYOGA，做你的瑜珈
      </h1>
      <p class="md:text-2xl text-xl text-dark mb-4">
        多給自己一點時間享受靜謐，傾聽內心的聲音。
      </p>
      <BaseButton padding="py-2 px-4" bg="bg-light" class="mr-2">
        立即預約
      </BaseButton>
      <BaseButton padding="py-2 px-4" bg="bg-secondary">
        課程介紹
      </BaseButton>
    </div>
  </div>
</template>
