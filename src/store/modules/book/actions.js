const axios = require("axios");

export default {
  async loadBooks(context) {
    const books = await axios.get(
      "https://cors.io/?https://www.goodreads.com/review/list/82314994.xml?key=j0xaqjUrY9QQd4g0gcwQ&per_page=200&page=1&v=2"
    );
    context.commit("SET_BOOKS", books.data);
  }
};
