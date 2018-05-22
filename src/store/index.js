import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import project from "./modules/project/index";

export default new Vuex.Store({
  modules: {
    project: project
  }
});
