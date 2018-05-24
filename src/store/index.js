import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import project from "./modules/project/index";
import certificate from "./modules/certificate/index";
import book from "./modules/book/index";

export default new Vuex.Store({
  modules: {
    project: project,
    certificate: certificate,
    book: book
  }
});
