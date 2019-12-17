import Vue from 'vue';
import Vuex from 'vuex';
import { TODOS_MOCK } from '../common/constants';
import MutationTypes from './mutation-types';
import ActionTypes from './action-types';

Vue.use(Vuex);

const INITIAL_STATE = {
  isFetchInProgress: false,
  isAddModalOpen: false,
  todos: [],
  modalData: {},
};

export default new Vuex.Store({
  state: INITIAL_STATE,
  getters: {
    todosCount(state) {
      return state.todos.length;
    },
    completedTodosCount(state) {
      return state.todos.filter(({ completed }) => completed).length;
    },
  },
  mutations: {
    [MutationTypes.ADD_TODO](state, { task, title }) {
      state.todos.push({ completed: false, task, title });
    },
    [MutationTypes.CLOSE_ADD_MODAL_AND_CLEAR_DATA](state) {
      state.isAddModalOpen = false;state.modalData = {};
    },
    [MutationTypes.DELETE_TODO](state, payload) {
      state.todos.splice(payload, 1);
    },
    [MutationTypes.EDIT_TODO](state, { index, task, title }) {
      Vue.set(state.todos, index, {
        ...state.todos[index],
        task,
        title,
      });
    },
    [MutationTypes.HIDE_BLOCK_LOADER](state) {
      state.isFetchInProgress = false;
    },
    [MutationTypes.INIT](state, payload) {
      state.todos = payload;
    },
    [MutationTypes.MARK_TODO_AS_COMPLETED](state, payload) {
      Vue.set(state.todos, payload, {
        ...state.todos[payload],
        completed: true,
      });
    },
    [MutationTypes.SET_MODAL_DATA](state, payload) {
      state.modalData = payload;
    },
    [MutationTypes.SHOW_ADD_MODAL](state) {
      state.isAddModalOpen = true;
    },
    [MutationTypes.SHOW_BLOCK_LOADER](state) {
      state.isFetchInProgress = true;
    },
  },
  actions: {
    [ActionTypes.DO_ASYNC]({ commit }, { type, payload }) {
      commit(MutationTypes.SHOW_BLOCK_LOADER);
      new Promise((resolve) => {
        setTimeout(() => {
          commit(type, payload);
          resolve();
        }, 1000);
      }).then(
        () => {
          commit(MutationTypes.HIDE_BLOCK_LOADER);
        },
      ).catch(alert);
    },
    [ActionTypes.ADD_TODO]({ dispatch }, payload) {
      dispatch(ActionTypes.DO_ASYNC, {
        type: MutationTypes.ADD_TODO,
        payload,
      });
    },
    [ActionTypes.DELETE_TODO]({ dispatch }, payload) {
      dispatch(ActionTypes.DO_ASYNC, {
        type: MutationTypes.DELETE_TODO,
        payload,
      });
    },
    [ActionTypes.EDIT_TODO]({ dispatch }, payload) {
      dispatch(ActionTypes.DO_ASYNC, {
        type: MutationTypes.EDIT_TODO,
        payload,
      });
    },
    [ActionTypes.FETCH_TODOS]({ dispatch }) {
      dispatch(ActionTypes.DO_ASYNC, {
        type: MutationTypes.INIT,
        payload: TODOS_MOCK,
      });
    },
    [ActionTypes.MARK_TODO_AS_COMPLETED]({ dispatch }, payload) {
      dispatch(ActionTypes.DO_ASYNC, {
        type: MutationTypes.MARK_TODO_AS_COMPLETED,
        payload,
      });
    },
  },
})
