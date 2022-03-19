import { makeRequest } from "../../services/api.service";
import { LOGIN, LOGOUT } from "../actions.type";
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from "../mutaions.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

const getters = {
  isLoggedIn: (state) => !!state.token,
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(() => {
      console.log("State", credentials);
      makeRequest
        .post("/auth/local", credentials)
        // .then(() => {
        //   console.log();
        //   // context.commit(SET_AUTH, data.user);
        //   resolve("data");
        // })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },

  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
};

const mutations = {
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    // JwtService.saveToken(state.user.token);
  },
};

export default { state, getters, actions, mutations };
