<template>
  <div>
    дом
    <button @click="onClose">закрыть</button>
  </div>
</template>

<script>
export default {
  name: "HomeBot",
  data() {
    return {
      tg: window.Telegram.WebApp,
    };
  },
  components: {},
  methods: {
    onClose() {
      this.tg.close(); //17:23
    },
    useEffect() {
      // в примере он вызывает ready как колбэк и + пробрасывает пустой массив
      this.tg.ready();
    },
  },
};
</script>
<style>
* {
  margin: 0px;
  margin: 0px 0px;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
