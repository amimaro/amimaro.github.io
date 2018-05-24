<template>
  <div id="certificates">
    <h1>This is a certificates page</h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Certificates",
  props: {},
  computed: {
    ...mapGetters("certificate", ["images"])
  }
};
</script>
