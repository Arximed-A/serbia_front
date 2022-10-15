<template>
  <div class="body">
    дом
    <button @click="onClose">закрыть</button>
    <button @click="showMeMainButton">показать главную кнопку</button>
    добрый день {{ name }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeBot",
  data() {
    return {
      // name: this.tg?.initDataUnsafe?.user?.username,
      name: null,
      mainButton: null,
    };
  },
  components: {},
  methods: {
    onClose() {
      this.tg.close(); //17:23
    },
    useEffect() {
      // в примере он вызывает ready как колбэк и + пробрасывает пустой массив
      // this.tg.ready();
    },
    showMeMainButton() {
      if (this.tg.MainButton.isVisible) {
        this.tg.MainButton.show();
      } else {
        this.tg.MainButton.hide();
      }
    },
  },
  computed: {
    ...mapState({
      tg: (state) => state.tg,
    }),
  },
  mounted() {
    this.name = this.tg?.initDataUnsafe?.user?.username;
  },
};
</script>

<style>
* {
  margin: 0px;
  margin: 0px 0px;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}
.body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
