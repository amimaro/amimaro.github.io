<template>
  <div id="certificates">
    <div class="list">
      <img v-for="certificate in images" :src="certificate" alt="certificate" class="list-item">
    </div>
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
