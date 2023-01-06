<script>
import LimitedCourse from "./components/LimitedCourse.vue";
import Search from "./components/Search.vue";
import Course from "./components/Course.vue";

export default {
  components: {
    LimitedCourse,
    Search,
    Course,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <LimitedCourse />
    <Search />
    <Course />
  </div>
</template>
