<script>
import Banner from "./home/Banner.vue";
import Effect from "./home/Effect.vue";
import Teacher from "./home/Teacher.vue";
import Environment from "./home/Environment.vue";
import Course from "./home/Course.vue";
import Plan from "./home/Plan.vue";
import Share from "./home/Share.vue";

export default {
  name: "IndexPage",
  components: {
    Banner,
    Effect,
    Teacher,
    Environment,
    Course,
    Plan,
    Share,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <Banner class="mb-8 md:mb-10" />
    <Effect class="mb-12 md:mb-16" />
    <Teacher class="mb-12 md:mb-16" />
    <Environment class="mb-12 md:mb-14 xl:mb-16" />
    <Course />
    <Plan />
    <Share />
  </div>
</template>
