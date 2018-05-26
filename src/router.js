import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "./views/Home.vue";
import Projects from "./views/Projects.vue";
import Certificates from "./views/Certificates.vue";
import Books from "./views/Books.vue";

Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      // component: Home,
      meta: { title: "Amir Zahlan | Fullstack Developer" }
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: { title: "Projects | Amir Zahlan | Fullstack Developer" }
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates,
      meta: { title: "Certificates | Amir Zahlan | Fullstack Developer" }
    },
    {
      path: "/books",
      name: "books",
      component: Books,
      meta: { title: "Books | Amir Zahlan | Fullstack Developer" }
    }
  ]
});

Router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default Router;
