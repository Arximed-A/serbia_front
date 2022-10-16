<template>
  <main class="page">
    <Header />
    <router-view />
    <Button />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Button from "./components/Button.vue";
export default {
  name: "app",
  components: { Header, Button },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: sans-serif;
}
.page {
  padding: 5px;
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
