<template>
  <div>
    дом
    <button @click="onClose">закрыть</button>
    добрый день {{ name }}
    ghj,tk
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeBot",
  data() {
    return {
      // name: this.tg?.initDataUnsafe?.user?.username,
      name: this.tg?.version,
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
  },
  computed: {
    ...mapState({
      tg: (state) => state.tg,
    }),
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
.body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
</style>
