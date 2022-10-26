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
      tg: null,
      show: "невидно",
      main: null,
    };
  },
  methods: {
    showMainButton() {
      if (this.main?.isVisible) {
        this.main?.hide();
        this.show = "невидно";
      } else {
        this.main?.show();
        this.show = "видно";
      }
    },
  },
  beforeUpdate() {},
  mounted() {
    this.main = this.tg?.MainButton;
  },
  beforeCreate() {
    this.tg = window.Telegram.WebApp;
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
