<template>
  <div>Добрый день {{ name }} {{ secondName }}</div>
  <div>тут информация о нашей деятельности</div>
</template>

<script>
// import { mapState } from "vuex";

export default {
  name: "HomeBot",
  data() {
    return {
      tg: window.Telegram.WebApp,
      name: null,
      secondName: null,
    };
  },
  components: {
    // ...mapState({
    //   tg: (state) => state.tg,
    // }),
  },
  methods: {},
  computed: {},
  mounted() {
    this.secondName = this.tg?.initDataUnsafe?.user?.last_name;
    this.name = this.tg?.initDataUnsafe?.user?.first_name;
    this.tg?.MainButton?.show();
  },
};
</script>

<style></style>
