<template>
<div id="books">
  <h1>Books I Read</h1>
  <div class="row wrap center">
    <div class="list center a" v-for="(book, index) in books" v-bind:key="index">
      <a :href="book.link" :title="book.title" target="_blank">
        <img :src="book.image" alt="book" class="list-item">
      </a>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from "vuex";
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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding-bottom: 5%;
}
img {
    width: 70%;
}
</style>
