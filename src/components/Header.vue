<template>
  <header class="header">
    <RouterLink to="/" class="link">Главная</RouterLink>
    <RouterLink to="/" class="link">ВНЖ</RouterLink>
    <RouterLink to="/" class="link">Гражданство</RouterLink>
  </header>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>
<style>
.header {
  display: flex;
  height: 50px;
  align-items: center;
}
.link {
  color: var(--tg-theme-link-color);
  margin: 0px 10px 0px 0px;
}
</style>
