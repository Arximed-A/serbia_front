<template>
  <button class="button" @click="callback">{{ text }}</button>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: String,
    callback: Function,
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
