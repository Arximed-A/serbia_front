<template>
  <main class="page">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
    <Button text="Закрыть окно" v-bind:callback="toggleMainButton" />
    <div>{{ status }}</div>
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
const data = window.Telegram.WebApp;
export default {
  components: { Header, Button },
  data() {
    return {
      tg: null,
      status: "не",
    };
  },
  methods: {
    toggleMainButton() {
      console.log(this.tg); // for test
      if (this.tg?.MainButton?.isVisible) {
        this.tg?.MainButton?.hide();
        this.status = "невидно";
      } else {
        this.tg?.MainButton?.show();
        this.status = "видно";
      }
    },
  },
  mounted() {
    this.tg = data;
  },
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
