<template>
  <div id="home">
      <div class="name">
        <h1>Amir Zahlan</h1>
      </div>
      <div class="list">
        <div class="list-item">
          <a href="https://www.linkedin.com/in/amir-zahlan-2143806b/" target="_blank">
            <icon name="brands/linkedin" scale="2"></icon>
          </a>
        </div>
        <div class="list-item">
          <a href="https://github.com/amimaro" target="_blank">
            <icon name="brands/github" scale="2"></icon>
          </a>
        </div>
        <div class="list-item">
          <a href="#" v-on:click="toggleEmail()">
            <icon name="envelope" scale="2"></icon>
          </a>
        </div>
        <div class="list-item">
          <router-link to="/certificates">
            <icon name="certificate" scale="2"></icon>
          </router-link>
        </div>
        <div class="list-item">
          <router-link to="/projects">
            <icon name="folder-open" scale="2"></icon>
          </router-link>
        </div>
        <div class="list-item">
          <router-link to="/books">
            <icon name="book" scale="2"></icon>
          </router-link>
        </div>
      </div>
      <div class="contact">
        <h2 v-if="emailVisibility">amir.zahlan@gmail.com</h2>
      </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {},
  data() {
    return {
      emailVisibility: false
    };
  },
  methods: {
    toggleEmail: function() {
      this.emailVisibility = !this.emailVisibility;
    }
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
  a {
    color: white;
    outline: 0;
  }
}
</style>
