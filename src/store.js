/* eslint-disable no-param-reassign */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    number: 7,
    status: "",
    todoList: [
      {
        id: 0,
        complete: false,
        title: "asdfasdf"
      },
      {
        id: 1,
        complete: false,
        title: "dfg"
      }
    ]
  },
  actions: {
    SET_NUMBER({ commit }, payload) {
      commit("SET_NUMBER", payload);
    },
    SET_STATUS({ commit }, payload) {
      commit("SET_STATUS", payload);
    },
    RESET_NUMBER({ commit }) {
      commit("RESET_NUMBER");
    },
    INCREMENT_NUMBER({ commit }) {
      commit("INCREMENT_NUMBER");
    },
    DOUBLE_NUMBER({ commit }) {
      commit("DOUBLE_NUMBER");
    }
  },
  mutations: {
    SET_NUMBER(state, payload) {
      state.number = payload;
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    },
    RESET_NUMBER(state) {
      state.number = 0;
    },
    INCREMENT_NUMBER(state) {
      state.number++;
      state.status = "Incremented";
    },
    DOUBLE_NUMBER(state) {
      state.number *= 2;
      state.status = "Doubled";
    },
    createTodo: (state, todo) => {
      state.todoList.push({
        id: todo.id,
        complete: todo.complete,
        title: todo.title,
        createDate: new Date()
      });
    },
    editTodo: (state, todo) => {
      const index = state.todoList.findIndex(item => item.id === todo.id);
      state.todoList[index] = todo;
    },
    removeTodo: (state, id) => {
      state.todoList = state.todoList.filter(item => item.id !== id);
    }
  },
  getters: {
    number(state) {
      return state.number;
    },
    status(state) {
      return state.status;
    },
    todoList(state) {
      return state.todoList;
    }
  }
});
