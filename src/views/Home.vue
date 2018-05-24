<template>
  <div id="home">
      <Info/>
  </div>
</template>

<script>
import Info from "@/components/Info";

export default {
  name: "home",
  components: {
    Info
  }
};
</script>

<style lang="scss">
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
</style>
