<template>
  <div id="projects" class="has-text-centered">
    <h1 class="title">Projects</h1>
    <div class="columns is-multiline is-mobile">
      <div class="column is-one-third" v-for="(project, index) in projects"
      v-bind:key="index">
        <div class="box">
          <h3 class="subtitle">
            <octicon name="repo-forked" v-if="project.fork"></octicon>
            <octicon name="repo" v-else></octicon>
            {{project.name}}
          </h3>
          <p>{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Info from "@/components/Info";

export default {
  name: "projects",
  components: {
    Info
  },
  computed: {
    ...mapGetters("project", ["projects"])
  }
};
</script>

<style lang="scss">
#projects {
  padding: 0% 5% 5% 5%;
  .box {
    background-color: black;
    border:1px solid white;
  }
}
</style>
