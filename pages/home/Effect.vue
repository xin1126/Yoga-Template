<script>
export default {
  data() {
    return {
      data: [
        {
          img: 1,
          title: "整體健身",
          content:
            "每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。",
        },
        {
          img: 2,
          title: "減壓放鬆",
          content:
            "調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。",
        },
        {
          img: 3,
          title: "局部雕塑",
          content:
            "幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="mb-6 text-center md:mb-8">
      <h2 class="mb-2 text-3xl text-primary">感受身心，活在當下</h2>
      <p class="text-xl text-secondary">DOYOGA 可以帶給你...</p>
    </div>
    <ul class="md:flex">
      <li
        v-for="(item, index) in data"
        :key="item.title"
        :class="{ 'xl:mr-8 md:mr-4 md:mb-0 mb-4': item.img !== 3 }"
        class="relative"
        data-aos="fade-up"
        :data-aos-duration="1000"
        :data-aos-delay="index * 200"
      >
        <img
          class="min-h-[420px] rounded-xl md:min-h-[250px] xl:min-h-[420px]"
          :src="require(`@/assets/images/yoga-${item.img}.jpeg`)"
          alt="yoga"
        />
        <div class="absolute bottom-0 p-6 text-white">
          <h3 class="mb-1 text-xl">
            {{ item.title }}
          </h3>
          <p>{{ item.content }}</p>
        </div>
      </li>
      <li />
      <li />
    </ul>
  </div>
</template>
