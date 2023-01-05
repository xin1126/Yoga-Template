<template>
  <div>
    <Navbar />
    <Nuxt class="pt-[86px]" />
    <Downbar />
    <AsideCommunity class="hidden lg:block" />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Downbar from "./Downbar.vue";
import AsideCommunity from "./AsideCommunity.vue";

export default {
  components: {
    Navbar,
    Downbar,
    AsideCommunity,
  },
};
</script>
