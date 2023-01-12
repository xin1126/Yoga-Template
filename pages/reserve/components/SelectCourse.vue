<script>
import { mapState } from "vuex";
import BaseCard from "@/components/BaseCard.vue";
import BaseButton from "@/components/BaseButton.vue";
import planData from "@/lib/planData.js";

export default {
  components: {
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      planData,
      degreeData: [
        {
          title: "基礎 Basic",
          name: "基礎課程",
          content: [
            "・入體位法動作解說",
            "・瑜珈基礎動作、順位",
            "・適合任何階段練習者",
          ],
        },
        {
          title: "中階 Intermediate",
          name: "艾揚格、哈達、寰宇",
          content: [
            "・刺激身體七個層次為核心",
            "・結合流暢體位法練習、呼吸、觀想",
            "・適合半年以上練習者",
          ],
        },
        {
          title: "高階 Advanced",
          name: "阿斯坦加、陰陽",
          content: [
            "・充分打開身體每個部位",
            "・顯著提升力量與柔軟度",
            "・適合一年以上練習者",
          ],
        },
      ],
    };
  },
  computed: mapState(["degree", "course"]),
};
</script>

<template>
  <div class="container mb-20 sm:mb-24">
    <div class="mb-8 justify-center gap-7 lg:flex">
      <BaseCard v-for="data in planData" :key="data.title" :data="data" />
    </div>
    <div v-show="course" class="mb-10 bg-primary">
      <h2 class="pt-10 pb-8 text-center text-3xl text-white">選擇課程階級</h2>
      <ul
        class="flex flex-col items-center justify-center gap-5 px-3 pb-16 text-white lg:flex-row"
      >
        <li
          v-for="item in degreeData"
          :key="item.title"
          class="w-full cursor-pointer rounded-xl border-4 border-transparent bg-secondary p-6 hover:border-white sm:w-[330px]"
          :class="item.title.includes(degree) && '!border-white'"
          @click="$store.dispatch('getDegree', item.title.substr(0, 2))"
        >
          <h2 class="mb-2 flex items-center justify-between text-2xl">
            {{ item.title }}
            <i
              class="bi bi-check-circle text-3xl opacity-50"
              :class="item.title.includes(degree) && 'opacity-100'"
            >
            </i>
          </h2>
          <div class="mb-4 flex items-center">
            <span class="mr-2">{{ item.name }}</span>
            <span class="ml-2 rounded-2xl bg-primary py-1 px-4 text-sm">
              60 min
            </span>
          </div>
          <ul>
            <li v-for="list in item.content" :key="list">{{ list }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-show="degree" class="mb-10 text-center text-primary">
      <p class="mb-1">您選擇的是</p>
      <span class="border-b border-primary text-xl">
        {{ course }}課程-{{ degree }}
      </span>
    </div>
    <div class="mx-auto max-w-[445px] text-primary">
      <h2 class="mb-4 text-center text-3xl">預約須知</h2>
      <ul class="mb-8">
        <li>1. 如果有特殊體質、特殊狀況，請主動告知。</li>
        <li>
          2. 取消預約或時間異動請於預約日前一天晚間 21:00
          前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。
        </li>
        <li>
          3. 為維護上課品質，請遵守 DOYOGA
          各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。
        </li>
        <li>
          4. DOYOGA
          保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。
        </li>
      </ul>
      <div v-show="degree" class="text-center">
        <BaseButton
          padding="py-2 px-[135px]"
          bg="bg-secondary"
          :click="() => $store.dispatch('getSchedule', 2)"
        >
          繼續預約
        </BaseButton>
      </div>
    </div>
  </div>
</template>
