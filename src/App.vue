<template>
  <main class="page">
    <Header />
    <div class="wrapper">
      <router-view />
    </div>
    <Button text="Закрыть окно" />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
export default {
  components: { Header, Button },
  data() {
    return {
      tg: window.Telegram.WebApp,
    };
  },
  methods: {},
  mounted() {
    this.tg.ready();
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
}
.page {
  padding: 5px;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.wrapper {
  flex: 1 1 auto;
}
</style>
