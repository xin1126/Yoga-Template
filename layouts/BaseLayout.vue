<template>
  <div>
    <Navbar />
    <Nuxt class="pt-[86px]" />
    <Downbar />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Downbar from "./Downbar.vue";

export default {
  components: {
    Navbar,
    Downbar,
  },
};
</script>
