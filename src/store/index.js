import { createStore } from "vuex";

export default createStore({
  state: {
    tg: window.Telegram.WebApp,
    // test: "1",
    // name: this.test,
    // name: this.tg.initDataUnsafe?.user?.first_name,
    // secondName: this.state.tg.initDataUnsafe.user.last_name,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
