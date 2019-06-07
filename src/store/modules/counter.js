const state = {
  counter: 0
};
const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " stringCounter";
  }
};
const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: (state, payload) => {
    state.counter -= payload;
  }
};
const actions = {
  incrementAsync: (context, payload) => {
    setTimeout(() => {
      context.commit("increment", payload);
    }, 1000);
  },
  decrementAsync: ({ commit }, payload) => {
    setTimeout(() => {
      commit("decrement", payload);
    }, 1000);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
