<template>
  <div id="home">
      <div class="name">
        <h1>Amir Zahlan</h1>
      </div>
      <div class="brand">
        <div class="brand-item">
          <a href="https://www.linkedin.com/in/amir-zahlan-2143806b/" target="_blank">
            <icon name="brands/linkedin" scale="2"></icon>
          </a>
        </div>
        <div class="brand-item">
          <a href="https://github.com/amimaro" target="_blank">
            <icon name="brands/github" scale="2"></icon>
          </a>
        </div>
        <div class="brand-item">
          <router-link to="/certificates">
            <icon name="certificate" scale="2"></icon>
          </router-link>
        </div>
        <div class="brand-item">
          <router-link to="/projects">
            <icon name="folder-open" scale="2"></icon>
          </router-link>
        </div>
        <div class="brand-item">
          <router-link to="/books">
            <icon name="book" scale="2"></icon>
          </router-link>
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
  color: white;
  a {
    color: white;
  }
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
