<template>
  <div id="footer" class="has-text-centered">
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: "footer",
  data() {
    return {
      msg: "© 2018 amimaro"
    };
  }
};
</script>
