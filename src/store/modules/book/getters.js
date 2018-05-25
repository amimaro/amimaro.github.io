export default {
  books: state => {
    return state.data.map(element => {
      return {
        title: element.book.title,
        link: element.book.link,
        image: element.book.image_url,
        author: element.book.authors.author.name
      };
    });
  }
};
