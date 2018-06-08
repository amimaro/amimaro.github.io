<template>
  <div id="certificates" class="has-text-centered">
    <h1 class="title">Certificates</h1>
    <div class="columns is-multiline is-mobile">
      <div class="column is-half" v-for="(certificate, index) in certificates"
      v-bind:key="index">
        <img :src="certificate" alt="certificate">
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
