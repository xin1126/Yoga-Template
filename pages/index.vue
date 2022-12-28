<script>
import Banner from './home/Banner.vue'
import Effect from './home/Effect.vue'

export default {
  name: 'IndexPage',
  components: {
    Banner,
    Effect,
  },
  layout: 'BaseLayout'
}
</script>

<template>
  <div>
    <Banner class="md:mb-10 mb-8" />
    <Effect class="md:mb-16 mb-12" />
  </div>
</template>
