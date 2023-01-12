<script>
import Process from "./components/Process.vue";
import SelectCourse from "./components/SelectCourse.vue";
import UserData from "./components/UserData.vue";
import Result from "./components/Result.vue";

export default {
  components: {
    Process,
    SelectCourse,
    UserData,
    Result,
  },
  layout: "BaseLayout",
  computed: {
    schedule() {
      return this.$store.state.schedule;
    },
    currentView() {
      if (this.schedule === 1) return SelectCourse;

      if (this.schedule === 2) return UserData;

      return Result;
    },
  },
  destroyed() {
    this.$store.commit("ResetStore");
  },
};
</script>

<template>
  <div>
    <Process />
    <component :is="currentView" />
  </div>
</template>
