<template>
  <div id="app">
    <div id="header">
    </div>
    <router-view/>
    <div id="footer">
      <p>2018 amimaro</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "app",
  props: {},
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
body {
  background-color: black;
}
#app {
  width: 100%;
  height: 100%;
  font-family: monospace;
  position: absolute;
  display: flex;
  flex-direction: column;
}
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin: 0;
  }
}
.list {
  display: flex;
  flex-direction: row;
}
.center {
  justify-content: center;
  align-items: center;
}
@media (max-width: 600px) {
  #app {
    position: relative;
  }
  .list {
    flex-direction: column;
  }
}
.list-item {
  padding: 5px 10px 5px 10px;
}
a {
  color: white;
  outline: 0;
}
</style>
