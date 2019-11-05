import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: state => {
      return state.counter;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    },
  },
  mutations: {
    increment: state => state.counter++,
    decrement: (state, payload) => (state.counter -= payload),
  },

  actions: {
    increment: ({ commit }) => {
      commit('increment');
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload);
    },
    asyncIncrement: ({ commit }) => {
      setTimeout(() => commit('increment'), 1000);
    },
  },
});
