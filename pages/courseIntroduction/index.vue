<script>
import LimitedCourse from "./components/LimitedCourse.vue";
import Search from "./components/Search.vue";
import Course from "./components/Course.vue";
import Teacher from "./components/Teacher.vue";

export default {
  components: {
    LimitedCourse,
    Search,
    Course,
    Teacher,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <LimitedCourse />
    <Search />
    <Course />
    <hr class="border-b border-primary" />
    <Teacher />
  </div>
</template>
