import { createSSRApp } from "vue";
import App from "./App.vue";
import "vant/lib/index.css";
import "@/static/global.scss";
import { createPinia } from "pinia";
import i18n from "@/language";
const pinia = createPinia();
export function createApp() {
  const app = createSSRApp(App);
  app.use(i18n);
  app.use(pinia);
  return {
    app,
  };
}
