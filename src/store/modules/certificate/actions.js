const axios = require("axios");

export default {
  async loadCertificates(context) {
    const list = await axios.get("https://api.github.com/repos/amimaro/certificates/contents/");
    context.commit("SET_CERTIFICATES", list.data);
  }
};
