<template>
<div id="books" class="has-text-centered">
  <h1 class="title">Readed Books</h1>
  <div class="columns is-multiline is-mobile">
    <div class="column is-one-quarter" v-for="(book, index) in books" v-bind:key="index">
      <a :href="book.link" :title="book.title.concat(' | ', book.author)" target="_blank">
        <img :src="book.image" alt="book" class="list-item">
      </a>
    </div>
  </div>
  <p>powered by <a href="https://www.goodreads.com" target="_blank">Goodreads</a></p>
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
  padding: 0% 5% 5% 5%;
}
</style>
