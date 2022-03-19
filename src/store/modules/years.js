import { makeRequest } from "../../services/api.service";

const state = {
  years: {},
};

const getters = {
  allYears: (state) => state.years,
};

const actions = {
  async fetchYears({ commit }) {
    const response = await makeRequest.get("/api/v1/summary/yearsOfExperience");
    console.log("REsso-->", response);
    commit("setYears", response);
  },
};

const mutations = {
  setYears: (state, years) => {
    state.years = years;
  },
};

export default { state, getters, actions, mutations };
