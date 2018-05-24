const axios = require("axios");

export default {
  async loadBooks(context) {
    const list = await axios.get(
      "https://cors.io/?https://www.goodreads.com/review/list/82314994.xml?key=j0xaqjUrY9QQd4g0gcwQ&v=2"
    );
    console.log(list.data)
    context.commit("SET_BOOKS", list.data);
  }
};
