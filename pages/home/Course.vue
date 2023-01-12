<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1.5,
        loop: true,
      },
      images: [8, 9, 10, 11],
    };
  },
};
</script>

<template>
  <div class="bg-light">
    <div
      class="flex flex-col items-center px-3 py-12 sm:px-10 lg:flex-row lg:py-0 2xl:px-0"
    >
      <div
        class="flex flex-col items-end justify-center lg:mr-8 lg:w-[50%] 2xl:w-[55%]"
      >
        <div class="max-w-[445px]">
          <h2 class="mb-2 text-3xl text-primary">精心設計、課程多元</h2>
          <p class="mb-6 text-xl text-secondary">
            教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。
          </p>
          <a
            href="#"
            class="group flex w-fit items-center text-primary hover:text-secondary"
            @click="$router.push('/courseIntroduction')"
          >
            課程介紹
            <span class="material-icons duration-200 group-hover:translate-x-2">
              trending_flat
            </span>
          </a>
        </div>
      </div>
      <div class="hidden w-[45%] py-16 2xl:block">
        <client-only>
          <swiper :options="swiperOptions">
            <swiper-slide v-for="item in images" :key="item">
              <img
                class="h-[445px] w-full min-w-[445px] cursor-grabbing rounded-xl"
                :src="require(`@/assets/images/yoga-${item}.jpg`)"
                alt="yoga"
              />
            </swiper-slide>
          </swiper>
        </client-only>
      </div>
      <div class="pt-4 lg:w-[50%] lg:py-14 2xl:hidden">
        <div class="grid grid-cols-2 gap-6">
          <img
            v-for="item in images"
            :key="item"
            class="h-[165px] w-full rounded-xl"
            :src="require(`@/assets/images/yoga-${item}.jpg`)"
            alt="yoga"
          />
        </div>
      </div>
    </div>
  </div>
</template>
