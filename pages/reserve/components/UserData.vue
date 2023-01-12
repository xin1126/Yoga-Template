<script>
import ValidationInput from "@/components/ValidationInput.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  components: {
    ValidationInput,
    BaseButton,
  },
  layout: "BaseLayout",
  data() {
    return {
      form: null,
      user: {
        yoga: true,
        better: [],
        sports: "",
        date: "",
        name: "",
        age: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      const submit = this.$refs.form.validate();
      submit.then((isValid) => {
        if (isValid) {
          this.$store.dispatch("getUser", this.user);
          this.$store.dispatch("getSchedule", 3);
        }
      });
    },
  },
};
</script>

<template>
  <div class="mx-auto mb-[88px] max-w-[375px] px-3 text-dark sm:mb-[104px]">
    <p class="mb-9">
      您選擇的是
      <span class="ml-4 text-xl text-secondary"
        >{{ $store.state.course }}課程-{{ $store.state.degree }}</span
      >
    </p>
    <client-only>
      <ValidationObserver ref="form" tag="form">
        <div class="mb-8">
          <p class="mb-4">1. 是否接觸過瑜珈?</p>
          <div class="flex">
            <div class="flex items-center">
              <input
                id="yes"
                v-model="user.yoga"
                type="radio"
                :value="true"
                name="yogaRadio"
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="yes">是</label>
            </div>
            <div class="ml-8 flex items-center">
              <input
                id="no"
                v-model="user.yoga"
                type="radio"
                :value="false"
                name="yogaRadio"
                checked
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="no">否</label>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p class="mb-4">2. 想改善的生活問題?</p>
          <div class="mb-4 flex">
            <div class="mr-4 flex items-center">
              <input
                id="1"
                v-model="user.better"
                type="checkbox"
                value="肌耐力不足"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="1">肌耐力不足</label>
            </div>
            <div class="mr-4 flex items-center">
              <input
                id="2"
                v-model="user.better"
                type="checkbox"
                value="柔軟度不佳"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="2">柔軟度不佳</label>
            </div>
            <div class="flex items-center">
              <input
                id="3"
                v-model="user.better"
                type="checkbox"
                value="壓力大"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="3">壓力大</label>
            </div>
          </div>
          <div class="flex">
            <div class="mr-8 flex items-center">
              <input
                id="4"
                v-model="user.better"
                type="checkbox"
                value="姿勢不正"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="4">姿勢不正</label>
            </div>
            <div class="mr-4 flex items-center">
              <input
                id="5"
                v-model="user.better"
                type="checkbox"
                value="睡眠品質差"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="5">睡眠品質差</label>
            </div>
            <div class="flex items-center">
              <input
                id="6"
                v-model="user.better"
                type="checkbox"
                value="注意力不足"
                class="cursor-pointe h-[16px] w-[16px] accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="6">注意力不足</label>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p class="mb-4">3. 每週累積運動量約為多少?</p>
          <div class="mb-2 flex">
            <div class="flex items-center">
              <input
                id="a"
                v-model="user.sports"
                type="radio"
                value="150 分鐘以上"
                name="sportsRadio"
                checked
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="a">150 分鐘以上</label>
            </div>
            <div class="ml-8 flex items-center">
              <input
                id="b"
                v-model="user.sports"
                type="radio"
                value="75~150 分鐘"
                name="sportsRadio"
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="b">75~150 分鐘</label>
            </div>
          </div>
          <div class="flex">
            <div class="flex items-center">
              <input
                id="c"
                v-model="user.sports"
                type="radio"
                value="30~75 分鐘"
                name="sportsRadio"
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="c">30~75 分鐘</label>
            </div>
            <div class="ml-[45px] flex items-center">
              <input
                id="d"
                v-model="user.sports"
                type="radio"
                value="30 分鐘以下"
                name="sportsRadio"
                class="h-[16px] w-[16px] cursor-pointer accent-primary"
              />
              <label class="ml-1 cursor-pointer" for="d">30 分鐘以下</label>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p>4. 上課預約報到日?</p>
          <p>若還沒有確定的日期，可以等待專員與您聯絡時再做詳細的諮詢哦！</p>
          <ValidationInput
            v-model="user.date"
            placeholder="MM/DD/YYYY"
            name="date"
            type="date"
            rules="required"
            width="120px"
          />
        </div>
        <div class="mb-8">
          <p class="mb-4">5. 填寫基本資料，完成預約後會寄送通知至電子信箱?</p>
          <div class="flex">
            <ValidationInput
              v-model="user.name"
              placeholder="請輸入您的姓名"
              name="name"
              rules="required"
              class="mr-2"
              >姓名</ValidationInput
            >
            <ValidationInput
              v-model="user.age"
              placeholder="請輸入您的年齡"
              name="age"
              rules="required"
              >年齡</ValidationInput
            >
          </div>
          <ValidationInput
            v-model="user.email"
            placeholder="email@example.com"
            name="email"
            type="email"
            rules="required|email"
            >電子信箱</ValidationInput
          >
          <ValidationInput
            v-model="user.tel"
            placeholder="0912-345-678"
            name="tel"
            type="tel"
            rules="required|isPhone"
            >手機</ValidationInput
          >
        </div>
        <BaseButton padding="py-2" bg="bg-primary" :click="submit">
          送出
        </BaseButton>
      </ValidationObserver>
    </client-only>
  </div>
</template>
