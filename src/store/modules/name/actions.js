export default {
  async loadNames(context) {
    context.commit("SET_NAMES", context.state.list);
  }
};
