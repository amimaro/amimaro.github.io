<template>
  <div class="hello">
    <div class="">
      <!-- {{project.list}} -->
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.loadProjects();
  },
  methods: {
    ...mapActions("project", ["loadProjects"])
  },
  computed: {
    ...mapState(["project"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
