<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: 1,
        breakpoints: {
          640: {
            slidesPerView: 0.5,
          },
          768: {
            slidesPerView: 0.6,
          },
          830: {
            slidesPerView: 0.75,
          },
          1024: {
            slidesPerView: 0.85,
          },
          1200: {
            slidesPerView: 1,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      data: [
        {
          avatar: "user-1",
          name: "Joanne",
          time: "Oct 17 2020",
          content: "服務很好、設備優良！",
        },
        {
          avatar: "user-2",
          name: "穎旻",
          time: "Oct 17 2020",
          content: "上課後身體健康很多",
        },
        {
          avatar: "user-3",
          name: "子琪",
          time: "Oct 17 2020",
          content: "上課很有趣！",
        },
        {
          avatar: "user-4",
          name: "葉子",
          tiem: "Oct 17 2020",
          content: "老師的教學很專業",
        },
        {
          avatar: "user-5",
          name: "Ray",
          time: "Oct 17 2020",
          content: "很舒壓",
        },
        {
          avatar: "user-6",
          name: "俊儀",
          time: "Oct 17 2020",
          content: "讚的！",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-light py-8 sm:py-10 lg:pb-16">
    <div class="container text-center">
      <h2 class="mb-6 text-2xl text-primary sm:mb-8">聽聽他們怎麼說</h2>
      <client-only>
        <swiper
          :options="swiperOptions"
          :pagination="{ clickable: true }"
          class="!pb-10 sm:!pb-0"
        >
          <swiper-slide
            class="grid cursor-grabbing grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-3"
          >
            <div
              v-for="item in data"
              :key="item.name"
              class="flex items-center rounded-2xl bg-white p-4 sm:max-w-[350px]"
            >
              <img
                class="mr-5 h-[60px] w-[60px] rounded-full"
                :src="require(`@/assets/images/${item.avatar}.png`)"
                alt="yoga"
              />
              <div>
                <ul class="text-start text-primary">
                  <li>{{ item.name }} {{ item.time }}</li>
                  <li class="mb-2">
                    <span v-for="star in 5" :key="star"
                      ><i class="bi bi-star-fill"></i
                    ></span>
                  </li>
                  <li>{{ item.content }}</li>
                </ul>
              </div>
            </div>
          </swiper-slide>
          <div
            slot="button-prev"
            class="swiper-button-prev !top-[95%] !left-0 !bg-none sm:hidden"
          >
            <i class="bi bi-arrow-left text-4xl text-primary"></i>
          </div>
          <div
            slot="button-next"
            class="swiper-button-next !top-[95%] !bg-none sm:hidden"
          >
            <i class="bi bi-arrow-right text-4xl text-primary"></i>
          </div>
        </swiper>
      </client-only>
    </div>
  </div>
</template>
