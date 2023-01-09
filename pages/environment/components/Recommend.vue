<script>
import course from "@/lib/courseData";
import CourseDetailModal from "@/components/CourseDetailModal.vue";

export default {
  components: {
    CourseDetailModal,
  },
  data() {
    return {
      course,
      modalStatus: false,
      detail: {},
      swiperOptions: {
        spaceBetween: 30,
        slidesPerView: "auto",
      },
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
  <div class="bg-light">
    <div class="container pb-12 sm:pb-14">
      <h2 class="mb-6 pt-8 text-center text-3xl text-primary sm:mb-8 sm:pt-10">
        課程推薦
      </h2>
      <client-only>
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="item in course"
            :key="item.name"
            class="group flex max-w-[255px] cursor-pointer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div class="w-full" @click="showCourseDetail(item)">
              <div class="overflow-hidden rounded-xl">
                <img
                  :src="require(`@/assets/images/${item.img}.jpg`)"
                  alt="yoga"
                  class="mb-2 h-[195px] w-full rounded-xl duration-500 group-hover:scale-125 sm:h-[160px] xl:h-[195px]"
                />
              </div>
              <h2 class="mb-1 text-xl text-primary">{{ item.title }}</h2>
              <p class="text-primary">{{ item.teacher }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
    <CourseDetailModal :modal-status.sync="modalStatus" :detail="detail" />
  </div>
</template>
