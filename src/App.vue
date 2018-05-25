<template>
  <div id="app">
    <Info/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default {
  name: "app",
  props: {},
  components: {
    Info,
    Footer
  },
  mounted() {
    this.loadProjects();
    this.loadCertificates();
    this.loadBooks();
  },
  methods: {
    ...mapActions("project", ["loadProjects"]),
    ...mapActions("certificate", ["loadCertificates"]),
    ...mapActions("book", ["loadBooks"])
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  font-family: monospace;
  display: flex;
  flex-direction: column;
}
@media (max-width: 800px) {
  #app {
    position: relative;
  }
  .list {
    flex-direction: column;
  }
}
</style>
