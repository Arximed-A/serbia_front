<template>
  <button class="button" @click="toggleMainButton">{{ text }}</button>
  <div>{{ status }}</div>
</template>
<script>
import { mapState } from "vuex";

// const data = window.Telegram.WebApp;

export default {
  name: "Button",
  tg: null,
  props: {
    text: String,
  },
  data() {
    return {
      status: "невидно",
    };
  },
  methods: {
    toggleMainButton() {
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
