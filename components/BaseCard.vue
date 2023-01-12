<script>
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
  },
  methods: {
    handleTargetCourse() {
      this.$store.dispatch("getCourse", this.data.title);
      if (this.isHome) this.$router.push("/reserve");
    },
  },
};
</script>

<template>
  <div
    class="group mb-6 cursor-pointer overflow-hidden rounded-2xl border-secondary duration-200 hover:-translate-y-2 hover:shadow-xl sm:flex lg:mb-0 lg:block lg:w-[350px]"
    :class="
      $store.state.course === data.title && !isHome ? 'border-4' : 'border'
    "
    @click="handleTargetCourse"
  >
    <div class="h-[240px] w-full overflow-hidden sm:h-[260px] lg:h-[240px]">
      <img
        :src="require(`@/assets/images/${data.img}.jpg`)"
        class="h-full w-full duration-200 group-hover:scale-125"
        alt="yoga"
      />
    </div>
    <div class="p-6 text-center sm:text-start lg:text-center">
      <ul class="pb-6 text-secondary lg:pb-10">
        <li class="mb-2 text-xl">
          <h2>{{ data.title }}</h2>
        </li>
        <li class="mb-2 text-xl">{{ data.price }}</li>
        <li class="text-start">{{ data.content }}</li>
      </ul>
      <BaseButton padding="py-2" bg="bg-secondary"> 選擇課程 </BaseButton>
    </div>
  </div>
</template>
