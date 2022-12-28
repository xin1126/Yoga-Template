<script>
import Banner from './home/Banner.vue'
import Effect from './home/Effect.vue'
import Teacher from './home/Teacher.vue'

export default {
  name: 'IndexPage',
  components: {
    Banner,
    Effect,
    Teacher
  },
  layout: 'BaseLayout'
}
</script>

<template>
  <div>
    <Banner class="md:mb-10 mb-8" />
    <Effect class="md:mb-16 mb-12" />
    <Teacher class="md:mb-16 mb-12" />
  </div>
</template>
