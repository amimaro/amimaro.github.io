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
  },
  methods: {
    ...mapActions("project", ["loadProjects"]),
    ...mapActions("certificate", ["loadCertificates"])
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  font-family: monospace;
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
  justify-content: center;
  align-content: space-around;
}
@media (max-width: 600px) {
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: space-around;
  }
}
.list-item {
  padding: 5px 10px 5px 10px;
}
</style>
