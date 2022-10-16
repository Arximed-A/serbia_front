<template>
  <button class="button" @click="closeApp">Закрыть</button>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Button",
  data() {
    return {
      tg: window.Telegram.WebApp,
    };
  },
  methods: {
    closeApp() {
      this.tg.close();
    },
  },
  computed: {
    // ...mapState({
    //   tg: (state) => state.tg,
    // }),
  },
};
</script>
<style lang="scss">
.button {
  width: 100%;
  border-radius: 1px;
  display: block;
  padding: 10px 15px;
  background: var(--tg-theme-button-color);
  color: var(--tg-theme-button-text-color);
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
