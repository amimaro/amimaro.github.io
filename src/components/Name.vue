<template>
  <div id="name">
    <h1 class="title">
      {{names[nameIndex]}}
    </h1>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

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
      this.name = this.names;
      setInterval(() => {
        this.nameIndex++;
        if (this.nameIndex >= this.name.length) this.nameIndex = 0;
      }, 1000);
    }
  },
  computed: {
    ...mapGetters("name", ["names"])
  }
};
</script>

<style lang="scss">
#name {
  padding-top: 2vw;
  padding-bottom: 2vw;
}
</style>
