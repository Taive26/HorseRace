  
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    author: "",
  },
  mutations: {
    nameEntered(state, input) {
      state.author = input;
    },
  },
  actions: {},
  modules: {},
});
