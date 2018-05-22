<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: gray;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
