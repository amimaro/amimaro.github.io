<template>
  <div id="certificates">
    <div class="list">
      <img v-for="(certificate, index) in images" v-bind:key="index" :src="certificate" alt="certificate" class="list-item">
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "certificates",
  props: {},
  computed: {
    ...mapGetters("certificate", ["images"])
  }
};
</script>
