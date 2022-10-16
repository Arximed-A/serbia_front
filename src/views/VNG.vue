<template></template>

<script>
export default {
  name: "HomeBot",
  data() {
    return {};
  },
  components: {},
  methods: {
    useEffect() {
      // в примере он вызывает ready как колбэк и + пробрасывает пустой массив
      // this.tg.ready();
    },
  },
  computed: {
    ...mapState({
      name: (state) => state.name,
      tg: (state) => state.tg,
    }),
  },
  mounted() {
    console.log(this.name);
  },
};
</script>

<style></style>
