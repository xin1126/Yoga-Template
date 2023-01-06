<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  data() {
    return {
      course: [
        {
          title: "基礎Basic",
          teacher: "授課老師：Carol Tang",
          img: "yoga-8",
          span: "xl:col-span-7",
        },
        {
          title: "艾揚格Iyengar",
          teacher: "授課老師：Kanae",
          img: "yoga-9",
          span: "xl:col-span-5",
        },
        {
          title: "哈達Hatha",
          teacher: "授課老師：Kuzuha",
          img: "yoga-10",
          span: "xl:col-span-5",
        },
        {
          title: "寰宇Universal",
          teacher: "授課老師：Kuzuha",
          img: "yoga-11",
          span: "xl:col-span-7",
        },
        {
          title: "雙人飛行Arco Yoga",
          teacher: "授課老師：Kuzuha、Kanae",
          img: "yoga-14",
          span: "xl:col-span-7",
        },
        {
          title: "阿斯坦加Ashtanga",
          teacher: "授課老師：Kanae",
          img: "yoga-15",
          span: "xl:col-span-5",
        },
        {
          title: "陰陽Yin Yang",
          teacher: "授課老師：Asa Chen",
          img: "yoga-16",
          span: "xl:col-span-5",
        },
        {
          title: "香氛Aroma Yoga",
          teacher: "授課老師：Asa Chen",
          img: "yoga-5",
          span: "xl:col-span-7",
        },
      ],
      modalStatus: false,
      detail: {},
    };
  },
  methods: {
    showCourseDetail(item) {
      this.detail = item;
      this.modalStatus = true;
    },
  },
};
</script>

<template>
  <div>
    <div class="container mb-16 xl:flex">
      <div
        class="mb-8 grid gap-7 sm:mb-10 sm:grid-cols-2 xl:mb-0 xl:mr-8 xl:grid-cols-12"
      >
        <div
          v-for="item in course"
          :key="item.title"
          class="group relative cursor-pointer"
          :class="[item.span]"
          data-aos="zoom-in"
          data-aos-duration="500"
          @click="showCourseDetail(item)"
        >
          <img
            :src="require(`@/assets/images/${item.img}.jpg`)"
            alt="yoga"
            class="h-[200px] w-full rounded-2xl duration-500 group-hover:brightness-50"
          />
          <div
            class="absolute -top-3 left-2 ml-2 rounded-2xl bg-secondary py-1 px-4 text-sm text-white"
          >
            60 min
          </div>
          <div class="absolute bottom-0 p-6 text-white">
            <h2 class="mb-1 text-2xl">{{ item.title }}</h2>
            <p>{{ item.teacher }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-center xl:justify-start">
        <div class="text-primary sm:w-[330px] xl:w-[255px]">
          <h2 class="my-2 text-xl">DOYOGA 上課須知：</h2>
          <p>請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。</p>
          <p>
            運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。
          </p>
          <p>
            運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。
          </p>
          <p>
            運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。
          </p>
          <p>
            運動過程中若感到任何不適，請馬上停止且與老師商量討論。若懷孕或特殊疾病請先告知。
          </p>
        </div>
      </div>
    </div>
    <div
      v-if="modalStatus"
      class="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50"
      @click.stop.self.prevent="modalStatus = false"
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
          <BaseButton padding="px-4 py-2" bg="bg-light"> 立即預約 </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
