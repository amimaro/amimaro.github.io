const axios = require("axios");

export default {
  async loadProjects(context) {
    const list = await axios.get("https://api.github.com/users/amimaro/repos");
    context.commit("SET_PROJECTS", list.data);
  }
};
