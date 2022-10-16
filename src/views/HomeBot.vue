<template>
  Добрый день имя {{ name }}
  <div>фамилия{{ secondName }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeBot",
  data() {
    return {
      tg: window.Telegram.WebApp,
      name: this.tg?.initDataUnsafe?.user?.first_name,
      secondName: null,
    };
  },
  components: {
    // ...mapState({
    // 	tg: state => state.tg
    // })
  },
  methods: {},
  computed: {},
  mounted() {
    this.secondName = this.tg?.initDataUnsafe?.user?.last_name;
  },
};
</script>

<style></style>
