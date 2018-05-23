<template>
  <div id="app">
    <div id="header">
    </div>
    <router-view/>
    <div id="footer">
      <p>2018 amimaro</p>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  font-family: monospace;
  display: flex;
  flex-direction: column;
}
#footer {
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    margin: 0;
  }
}
</style>
