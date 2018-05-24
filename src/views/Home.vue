<template>
  <div id="home">
      <Name/>
      <Options/>
      <Contact ref="contact"/>
  </div>
</template>

<script>
import Name from "@/components/Name";
import Contact from "@/components/Contact";
import Options from "@/components/Options";

export default {
  name: "home",
  components: {
    Name,
    Contact,
    Options
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
