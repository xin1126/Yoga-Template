<script>
import Detail from "./components/Detail.vue";
import Recommend from "./components/Recommend.vue";

export default {
  components: {
    Detail,
    Recommend,
  },
  layout: "BaseLayout",
};
</script>

<template>
  <div>
    <Detail />
    <Recommend />
  </div>
</template>
