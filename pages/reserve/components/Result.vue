<script>
import { mapState } from "vuex";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  computed: mapState(["degree", "course", "user"]),
};
</script>

<template>
  <div class="container mb-20 text-center sm:mb-24">
    <i class="bi bi-check-circle text-4xl font-bold text-primary"> </i>
    <p class="mb-8 mt-5 text-xl text-primary">
      已完成預約，以下是您的預約資訊:
    </p>
    <div
      class="mx-auto mb-6 max-w-[540px] overflow-hidden rounded border border-primary text-start"
    >
      <div class="bg-primary py-4 pl-5 text-white">預約資訊</div>
      <ul class="py-5 pl-5 text-primary">
        <li class="mb-5">
          您預約的是
          <span class="ml-2 text-xl text-secondary">
            {{ course }}課程-{{ degree }}
          </span>
        </li>
        <li class="mb-2">上課預約報到日：{{ user.date }}</li>
        <li class="mb-2">預約人：{{ user.name }}</li>
        <li class="mb-2">年齡：{{ user.age }}</li>
        <li class="mb-2">電子信箱：{{ user.email }}</li>
        <li>手機號碼：{{ user.tel }}</li>
      </ul>
    </div>
    <div class="mx-auto max-w-[350px] text-primary">
      <p class="mb-2 text-xl">上課注意事項</p>
      <p class="mb-8 text-start">
        第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水
        .穿著運動服、乾淨室內運動鞋。 如欲更改體驗時間請提前通知我們喔！
      </p>
      <BaseButton
        padding="py-2"
        bg="bg-primary"
        :click="() => $router.push('/')"
      >
        返回首頁
      </BaseButton>
    </div>
  </div>
</template>
