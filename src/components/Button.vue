<template>
  <button class="button" @click="showMainButton">{{ text }}</button>
  <div>{{ show }}</div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Button",
  props: {
    text: String,
  },
  data() {
    return {
      tg: window.Telegram.WebApp,
      show: "невидно",
      boolean: false,
      main: null,
    };
  },
  methods: {
    showMainButton() {
      if (this.main?.isVisible) {
        this.tg?.MainButton?.hide();
        this.show = "невидно";
        this.boolean = false;
      } else {
        this.tg?.MainButton?.show();
        this.show = "видно";
        this.boolean = true;
      }
    },
  },
  beforeUpdate() {},
  mounted() {
    this.main = this.tg?.MainButton;
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
