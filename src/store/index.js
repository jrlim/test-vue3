import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    loginStore: loginStore,
    menuStore: menuStore,
    codeStore: codeStore
  }
})

export default store