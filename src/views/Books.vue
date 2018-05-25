<template>
<div id="books" class="has-text-centered">
  <h1 class="title">Readed Books</h1>
  <div class="columns is-multiline is-mobile">
    <div class="column is-one-quarter" v-for="(book, index) in books" v-bind:key="index">
      <a :href="book.link" :title="book.title" target="_blank">
        <img :src="book.image" alt="book" class="list-item">
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import Info from "@/components/Info";

export default {
  name: "books",
  components: {
    Info
  },
  computed: {
    ...mapGetters("book", ["books"])
  }
};
</script>

<style lang="scss">
#books {
  padding-bottom: 5%;
}
</style>
