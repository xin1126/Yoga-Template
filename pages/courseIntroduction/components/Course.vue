<script>
import CourseDetailModal from "@/components/CourseDetailModal.vue";

export default {
  components: {
    CourseDetailModal,
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
    <CourseDetailModal :modal-status.sync="modalStatus" :detail="detail" />
  </div>
</template>
