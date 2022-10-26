<template>
  <button class="button" @click="dd">{{ text }}</button>
</template>
<script>
import { mapState } from "vuex";

const tg = window.Telegram.WebApp;

tg.MainButton.show();

export default {
  name: "Button",
  props: {
    text: String,
  },
  data() {
    return {};
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
