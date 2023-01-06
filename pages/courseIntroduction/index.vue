<script>
import LimitedCourse from "./components/LimitedCourse.vue";
import Search from "./components/Search.vue";

export default {
  components: {
    LimitedCourse,
    Search,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <LimitedCourse />
    <Search />
  </div>
</template>
