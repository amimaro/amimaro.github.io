import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Certificates from "./views/Certificates.vue";
import Books from "./views/Books.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates
    },
    {
      path: "/books",
      name: "books",
      component: Books
    }
  ]
});
