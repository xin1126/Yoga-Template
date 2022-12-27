<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  components: {
    BaseButton
  },
  data () {
    return {
      menu: false
    }
  }
}
</script>

<template>
  <div>
    <div class="bg-light z-20 relative">
      <div class="flex items-center justify-between container">
        <img src="@/assets/images/logo.png" alt="logo" class="w-[96px] py-7">
        <ul class="text-dark hidden md:flex">
          <li class="mr-8">
            <NuxtLink to="/" class="hover:text-secondary duration-500">
              課程介紹
            </NuxtLink>
          </li>
          <li class="mr-8">
            <NuxtLink to="/" class="hover:text-secondary duration-500">
              瑜珈空間
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="hover:text-secondary duration-500">
              當月課表
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden md:flex">
          <BaseButton class="mr-4" :border="true" padding="py-2 px-4" rounded="xl">
            立即預約
          </BaseButton>
          <BaseButton :border="true" padding="py-2 px-4" rounded="xl">
            聯絡我們
          </BaseButton>
        </div>
        <div class="cursor-pointer md:hidden" @click="menu = !menu">
          <div
            class="
              relative
              left-0 mb-1
              w-[33px]
              border-b-4
              border-primary
              transition-all
            "
            :class="[ menu && 'rotate-45 top-[4px]' ]"
          />
          <div
            class="mb-1 w-[33px] border-b-4 border-primary"
            :class="{ hidden: menu }"
          />
          <div
            class="mb-1 relative w-[33px] border-b-4 border-primary transition-all"
            :class="[ menu && '-rotate-45 -top-[4px] left-[-1px]' ]"
          />
          <div
            class="relative w-[33px] border-b-4 border-primary transition-all"
            :class="{ hidden: menu }"
          />
        </div>
      </div>
    </div>
    <ul
      class="absolute left-0 h-auto w-full text-white text-center bg-primary z-10 transition-all"
      :class="[menu ? 'top-[85px]' : '-top-[150px]']"
    >
      <li class="mb-4 pt-6">
        <NuxtLink to="/" class="hover:text-secondary duration-500">
          課程介紹
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/" class="hover:text-secondary duration-500">
          瑜珈空間
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/" class="hover:text-secondary duration-500">
          當月課表
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/" class="hover:text-secondary duration-500">
          立即預約
        </NuxtLink>
      </li>
      <li class="pb-6">
        <NuxtLink to="/" class="hover:text-secondary duration-500">
          聯絡我們
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
