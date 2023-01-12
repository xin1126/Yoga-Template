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
        name: "",
        email: "",
        tel: "",
        info: "",
      },
    };
  },
  methods: {
    submit() {
      const submit = this.$refs.form.validate();
      submit.then((isValid) => {
        if (isValid) {
          this.$swal("提交成功!", "", "success");
          this.user = this.$options.data().user;
          this.$refs.form.reset();
        }
      });
    },
  },
};
</script>

<template>
  <div class="container mb-20 w-full sm:w-[570px] lg:mb-[110px] xl:w-full">
    <h2 class="mt-12 mb-6 text-center text-3xl text-primary sm:mt-16 sm:mb-8">
      聯絡我們
    </h2>
    <div class="xl:flex">
      <div class="mb-10 font-normal text-primary xl:mr-7 xl:mb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d29462.416079653605!2d120.30028136976296!3d22.623867499994663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z6auY6ZuE5biC6IuT6ZuF5Y2A5YyX5L-h6KGXMjMg6JmfMiDmqJM!5e0!3m2!1szh-TW!2stw!4v1673416321843!5m2!1szh-TW!2stw"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="mb-6 h-[360px] w-full rounded-lg xl:w-[635px]"
        ></iframe>
        <h2 class="mb-2 text-xl">DOYOGA 教室位置</h2>
        <p class="mb-2">高雄市苓雅區北信街 23 號 2 樓</p>
        <p>如何前往：</p>
        <ul>
          <li class="mb-6">
            1. 搭乘捷運：紅線到正義站3 號出口，延正義路<br />方向至北信街交叉口即可。
          </li>
          <li class="mb-6">
            2. 搭乘公車：搭這些公車都可以抵達正義站<br />24B 25 33 50 76 77
            77區100
          </li>
          <li>3. 開車前往北信街32 號，教室旁有專屬停<br />車場可以使用。</li>
        </ul>
      </div>
      <div class="w-full rounded-lg bg-light p-8">
        <p class="mb-6 text-xl text-primary">意見回饋&問題詢問</p>
        <client-only>
          <ValidationObserver ref="form" tag="form">
            <ValidationInput
              v-model="user.name"
              placeholder="請輸入您的姓名"
              name="name"
              rules="required"
              >姓名</ValidationInput
            >
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
            <ValidationInput
              v-model="user.info"
              placeholder=""
              name="info"
              type="textarea"
              rules="required"
              >意見回饋</ValidationInput
            >
            <BaseButton padding="px-3 py-1" bg="bg-primary" :click="submit">
              送出
            </BaseButton>
          </ValidationObserver>
        </client-only>
      </div>
    </div>
  </div>
</template>
