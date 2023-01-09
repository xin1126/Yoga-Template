<script>
export default {
  data() {
    return {
      environment: [
        {
          title: "A、B 團體課教室",
          content:
            "教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛",
          img: "class-1",
        },
        {
          title: "C、D 個人訓練室",
          content: "開放時間：每週一至週五 09:00~17:00",
          img: "yoga-5",
        },
        {
          title: "淋浴間",
          content: "開放時間：每週一至週日 09:00~21:30",
          img: "class-2",
        },
        {
          title: "器材出租",
          content: "有租借需求請至櫃檯登記",
          img: "yoga-7",
        },
        {
          title: "交誼廳",
          content: "開放時間：每週一至週五 09:00~21:30",
          img: "class-3",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container mb-10 sm:mb-16">
    <h2 class="mt-12 mb-6 text-center text-3xl text-primary sm:mt-16 sm:mb-8">
      瑜珈空間
    </h2>
    <div class="md:flex">
      <div
        class="mr-7 mb-8 grid w-full gap-6 sm:min-w-[450px] sm:grid-cols-2 md:mb-0 xl:min-w-[730px]"
      >
        <div
          v-for="(item, index) in environment"
          :key="item.title"
          class="relative h-[350px] sm:h-[210px] xl:h-[350px]"
          :class="{ 'sm:col-span-2': index === 0 }"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          <img
            class="h-full w-full rounded-xl"
            :src="require(`@/assets/images/${item.img}.jpg`)"
            alt="environment"
          />
          <div class="absolute bottom-0 p-6 text-white">
            <h2 class="mb-1 text-2xl">{{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        class="h-fit rounded-xl bg-light p-8 text-primary"
      >
        <h2 class="mb-4 text-xl">DOYOGA 提供：</h2>
        <ul>
          <li class="mb-1">四間教室：A、B 團體課教室、C、D 個人訓練室。</li>
          <li class="mb-1">
            瑜珈墊、輔具：每次課後會進行殺菌清潔，乾淨免擔心。
          </li>
          <li class="mb-1">男女置物櫃、淋浴間：分別設置在館內A、B 區。</li>
          <li class="mb-3">
            舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。
          </li>
          <li>
            <a href="#" class="flex items-center">
              立即預約
              <span class="material-icons"> trending_flat </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
