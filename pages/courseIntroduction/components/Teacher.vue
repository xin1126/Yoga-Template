<script>
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: "auto",
        noSwiping: false,
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            noSwiping: true,
          },
        },
      },
      teacher: [
        {
          name: "Carol Tang",
          experience: "10年",
          content:
            "“因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。 我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能， 並將瑜珈自然的融入自己的生活中。”",
          list: [
            "・協會認證艾揚格瑜珈老師",
            "・2010 年完成四年的艾揚格師資培訓",
            "・2020 取得艾揚格瑜珈高階認證",
          ],
          avatar: "teacher-1",
        },
        {
          name: "Kanae 老師",
          experience: "3年",
          content:
            "“希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。”",
          list: [
            "・美國瑜珈聯盟RYT200 小時師資認證",
            "・自然呼吸瑜珈會館開授倒立研習",
            "・簡善琳瑜珈會館開授倒立研習",
          ],
          avatar: "teacher-2",
        },
        {
          name: "Kanae",
          experience: "3年",
          content:
            "“希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。”",
          list: [
            "・美國瑜珈聯盟 RYT200 小時師資認證",
            "・自然呼吸瑜珈會館開授倒立研習",
            "・簡善琳瑜珈會館開授倒立研習",
          ],
          avatar: "teacher-3",
        },
        {
          name: "Kuzuha",
          experience: "10年",
          content:
            "“因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。 我希望能跟學生們分享瑜珈的好，讓大家能藉由瑜珈看見自己的內在與潛能， 並將瑜珈自然的融入自己的生活中。”",
          list: [
            "・美國瑜珈聯盟 RYT200 小時師資認證",
            "・AshtangsTTC50小時認證",
          ],
          avatar: "teacher-4",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container pr-0">
    <h2 class="my-8 text-center text-3xl text-primary xl:my-10">師資介紹</h2>
    <div class="mb-20 xl:mb-28">
      <client-only>
        <swiper
          :options="swiperOptions"
          class="swiper-no-swiping !pr-3 sm:!p-0"
        >
          <swiper-slide
            v-for="(item, index) in teacher"
            :key="item.name"
            class="mb-6 flex min-h-[465px] max-w-[330px] cursor-grabbing items-end sm:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              class="h-[420px] rounded-2xl p-6 text-white"
              :class="index % 2 ? 'bg-primary' : 'bg-secondary'"
            >
              <img
                class="border- mx-auto mt-[-65px] mb-2 h-[95px] w-[95px] rounded-full border-4"
                :class="index % 2 ? 'border-secondary' : 'border-primary'"
                :src="require(`@/assets/images/${item.avatar}.png`)"
                alt="teacher"
              />
              <h2 class="mb-2 text-center text-xl">{{ item.name }} 老師</h2>
              <p class="mb-4 text-center">教學經歷 {{ item.experience }}</p>
              <p class="mb-4">{{ item.content }}</p>
              <ul>
                <li v-for="list in item.list" :key="list">{{ list }}</li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
  </div>
</template>

<style scoped>
:deep .swiper-wrapper {
  @apply flex-col sm:flex-row items-center;
}
</style>
