import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

// 引入全部
import * as rules from "vee-validate/dist/rules";

// 引入部分規則
import { required, email } from "vee-validate/dist/rules";
for (const [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation,
  });
}

extend("isPhone", (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  return phoneNumber.test(value) ? true : "電話號碼格式錯誤";
});

extend("required", {
  ...required,
  message: "此欄位必填",
});

extend("email", {
  ...email,
  message: "信箱格式錯誤",
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
