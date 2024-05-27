import Axios from "axios";

const state = {
  articles: [],
  totalResults: 0,
  isLoading: false,
};

const getters = {
  allArticles: (state) => state.articles,
  totalResults: (state) => state.totalResults,
  isLoading: (state) => state.isLoading,
};

const actions = {
  async fetchNews({ commit }) {
    commit("setLoading", true);
    try {
      const response = await Axios.get(
        "https://newsapi.org/v2/everything?q=keyword&apiKey=464919f3c69c4e38b566a084d3ab60da"
      );
      commit("setArticles", response.data.articles);
      commit("setTotalResults", response.data.totalResults);
    } catch (error) {
      alert("Error fetching news:", error);
    } finally {
      commit("setLoading", false);
    }
  },
};

const mutations = {
  setArticles: (state, articles) => {
    state.articles = articles;
  },
  setTotalResults: (state, totalResults) => {
    state.totalResults = totalResults;
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
