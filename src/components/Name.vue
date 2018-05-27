<template>
  <div id="name">
    <h1 class="title">
      {{name}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "name",
  data() {
    return {
      name: "Amir Zahlan"
    };
  }
};
</script>

<style lang="scss">
#name {
  padding-top: 2vw;
  padding-bottom: 2vw;
}
</style>
