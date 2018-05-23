<template>
  <div id="home">
      <div class="">
        <h1>Amir Zahlan</h1>
      </div>
      <div class="brand">
        <div class="brand-item">
          <icon class="space-left" name="brands/linkedin" scale="2"></icon>
        </div>
        <div class="brand-item">
          <icon class="space-left" name="brands/github" scale="2"></icon>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style lang="scss">
#home {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.brand {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-around;
}
.brand-item {
  padding-right: 10px;
  padding-left: 10px;
}

</style>
