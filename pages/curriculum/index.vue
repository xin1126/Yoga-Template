<script>
import Schedule from "./components/Schedule.vue";
import Process from "./components/Process.vue";

export default {
  components: {
    Schedule,
    Process,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <Schedule />
    <Process />
  </div>
</template>
