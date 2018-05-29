export default {
  certificates: state => {
    return state.list
      .filter(element => {
        if (element.name.indexOf("README") >= 0) return false;
        return true;
      })
      .map(element => {
        return element.download_url;
      })
      .reverse();
  }
};
