export default {
  namespaced: true,
  state: {
    currentPageTitle: '',
  },
  getters: {
    getCurrentPageTitle: state => state.currentPageTitle,
  },
  actions: {
    ACTIVATE_PAGE({ commit }, currentPageTitle) {
      commit('SET_CURRENT_PAGE_TITLE', currentPageTitle);
    },
  },
  mutations: {
    SET_CURRENT_PAGE_TITLE: (state, currentPageTitle) => {
      state.currentPageTitle = currentPageTitle;
    },
  },
};
