<script>
import BaseCard from "@/components/BaseCard.vue";
import planData from "@/lib/planData.js";

export default {
  components: {
    BaseCard,
  },
  data() {
    return {
      planData,
    };
  },
};
</script>

<template>
  <div class="container pt-8 pb-12 text-center sm:pt-10 sm:pb-14 xl:pb-16">
    <h2 class="mb-2 text-3xl text-primary">方案選擇</h2>
    <p class="mb-8 text-xl text-secondary">DOYOGA 可以帶給你...</p>
    <div
      class="justify-center gap-7 lg:flex"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <BaseCard v-for="data in planData" :key="data.title" :data="data" />
    </div>
  </div>
</template>
