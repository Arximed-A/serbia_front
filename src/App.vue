<template>
  <main class="page">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
    <Button text="Главная кнопка" v-bind:callback="toggleMainButton" />
    <Button text="Закрыть окно" v-bind:callback="closeApp" />
    <div>{{ status }}</div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";

import Telegram from "./telegram.js";
const { tg, mainButton } = Telegram();

export default {
  components: { Header, Button },
  data() {
    return {
      tg: null,
      status: "невидно",
      name: "",
    };
  },
  methods: {
    toggleMainButton() {
      if (mainButton.isVisible) {
        mainButton.hide();
        this.status = "невидно";
      } else {
        mainButton.show();
        this.status = "видно";
      }
    },
    closeApp() {
      tg.close();
    },
  },
  mounted() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  color: var(--tg-theme-text-color);
}
.page {
  padding: 5px;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1 1 auto;
}
</style>
