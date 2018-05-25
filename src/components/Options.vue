<template>
  <div class="columns">
    <div class="column">
      <router-link to="/">
        <icon name="home" scale="2"></icon>
      </router-link>
    </div>
    <div class="column">
      <a href="#" v-on:click="$parent.$refs.contact.toggleEmail()">
        <icon name="envelope" scale="2"></icon>
      </a>
    </div>
    <div class="column">
      <a href="https://www.linkedin.com/in/amir-zahlan-2143806b/" target="_blank">
        <icon name="brands/linkedin" scale="2"></icon>
      </a>
    </div>
    <div class="column">
      <a href="https://github.com/amimaro" target="_blank">
        <icon name="brands/github" scale="2"></icon>
      </a>
    </div>
    <div class="column">
      <router-link to="/certificates">
        <icon name="certificate" scale="2"></icon>
      </router-link>
    </div>
    <div class="column">
      <router-link to="/projects">
        <icon name="folder-open" scale="2"></icon>
      </router-link>
    </div>
    <div class="column">
      <router-link to="/books">
        <icon name="book" scale="2"></icon>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "options"
};
</script>
