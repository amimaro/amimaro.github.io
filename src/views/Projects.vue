<template>
  <div id="projects" class="has-text-centered">
    <h1 class="title">Projects</h1>
    <div class="columns">
      <div class="column" v-for="(project, index) in projects"
      v-bind:key="index">
        {{project}}
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
}
</style>
