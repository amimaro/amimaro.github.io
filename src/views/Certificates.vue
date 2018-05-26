<template>
  <div id="certificates" class="has-text-centered">
    <h1 class="title">Certificates</h1>
    <div class="columns">
      <div class="column" v-for="(certificate, index) in certificates"
      v-bind:key="index">
        <img :src="certificate" alt="certificate" class="list-item">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Info from "@/components/Info";

export default {
  name: "certificates",
  components: {
    Info
  },
  computed: {
    ...mapGetters("certificate", ["certificates"])
  }
};
</script>

<style lang="scss">
#certificates {
  padding: 0% 5% 5% 5%;
}
</style>
