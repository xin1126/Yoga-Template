<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<template>
  <div class="fixed z-20 w-full drop-shadow-lg">
    <div class="relative z-20 bg-light">
      <div class="container flex items-center justify-between">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="w-[96px] cursor-pointer py-7"
          @click="$router.push('/')"
        />
        <ul class="hidden text-dark md:flex">
          <li class="mr-8">
            <NuxtLink
              to="/courseIntroduction"
              class="duration-500 hover:text-secondary"
            >
              課程介紹
            </NuxtLink>
          </li>
          <li class="mr-8">
            <NuxtLink
              to="/environment"
              class="duration-500 hover:text-secondary"
            >
              瑜珈空間
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/curriculum"
              class="duration-500 hover:text-secondary"
            >
              當月課表
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden md:flex">
          <BaseButton
            class="mr-4"
            :click="() => $router.push('/reserve')"
            :border="true"
            padding="py-2 px-4"
            rounded="xl"
          >
            立即預約
          </BaseButton>
          <BaseButton
            :click="() => $router.push('/connection')"
            :border="true"
            padding="py-2 px-4"
            rounded="xl"
          >
            聯絡我們
          </BaseButton>
        </div>
        <div class="cursor-pointer md:hidden" @click="menu = !menu">
          <div
            class="relative left-0 mb-1 w-[33px] border-b-4 border-primary transition-all"
            :class="[menu && 'rotate-45 top-[4px]']"
          />
          <div
            class="mb-1 w-[33px] border-b-4 border-primary"
            :class="{ hidden: menu }"
          />
          <div
            class="relative mb-1 w-[33px] border-b-4 border-primary transition-all"
            :class="[menu && '-rotate-45 -top-[4px] left-[-1px]']"
          />
          <div
            class="relative w-[33px] border-b-4 border-primary transition-all"
            :class="{ hidden: menu }"
          />
        </div>
      </div>
    </div>
    <ul
      class="absolute left-0 z-10 h-auto w-full bg-primary text-center text-white transition-all"
      :class="[menu ? 'top-[85px]' : '-top-[150px]']"
    >
      <li class="mb-4 pt-6">
        <NuxtLink
          to="/courseIntroduction"
          class="duration-500 hover:text-secondary"
        >
          課程介紹
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/environment" class="duration-500 hover:text-secondary">
          瑜珈空間
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/curriculum" class="duration-500 hover:text-secondary">
          當月課表
        </NuxtLink>
      </li>
      <li class="mb-4">
        <NuxtLink to="/reserve" class="duration-500 hover:text-secondary">
          立即預約
        </NuxtLink>
      </li>
      <li class="pb-6">
        <NuxtLink to="/connection" class="duration-500 hover:text-secondary">
          聯絡我們
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
