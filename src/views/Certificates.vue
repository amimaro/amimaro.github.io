<template>
  <div id="certificates">
    <Info/>
    <h1>Certificates</h1>
    <div class="list center">
      <img v-for="(certificate, index) in images"
      v-bind:key="index" :src="certificate" alt="certificate" class="list-item">
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
    ...mapGetters("certificate", ["images"])
  }
};
</script>

<style lang="scss">
#certificates {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding-bottom: 5%;
}
img {
  width: 70%;
}
</style>
