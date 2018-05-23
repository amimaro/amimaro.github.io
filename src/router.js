import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Certificates from "./views/Certificates.vue";
import Books from "./views/Books.vue";

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { title: "amir zahlan | fullstack developer" }
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: { title: "projects | amir zahlan | fullstack developer" }
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates,
      meta: { title: "certificates | amir zahlan | fullstack developer" }
    },
    {
      path: "/books",
      name: "books",
      component: Books,
      meta: { title: "books | amir zahlan | fullstack developer" }
    }
  ]
});

Router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default Router;
