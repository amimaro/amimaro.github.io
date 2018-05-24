export default {
  images: state => {
    return state.list
      .filter((element, id) => {
        if (id === 0) return false;
        return true;
      })
      .map(element => {
        return element.download_url;
      });
  }
};
