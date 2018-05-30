<template>
  <div id="name">
    <h1 class="title"></h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Typed from "typed.js";

export default {
  name: "name",
  data() {
    return {
      nameIndex: 0
    };
  },
  mounted() {
    this.updateName();
  },
  methods: {
    updateName: function() {
      const options = {
        strings: this.names,
        typeSpeed: 200,
        loop: true,
        cursorChar: "_",
        backSpeed: 50
      };
      new Typed(".title", options);
    }
  },
  computed: {
    ...mapGetters("name", ["names"])
  }
};
</script>

<style lang="scss">
.title {
  display: inline;
}
.typed-cursor {
  font-size: 2rem;
}
#name {
  padding-top: 2vw;
  padding-bottom: 2vw;
}
</style>
