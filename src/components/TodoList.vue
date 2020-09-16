<template>
  <div class="todo-list">
    <TodoItem v-for="todo in state.todoList" :key="todo.id" :todo="todo" />
    <input v-model="title" >
    <button @click="addTodo">Add</button>
    <pre>
    {{ state.todoList }}
    </pre>
  </div>
</template>

<script>
// import { provide } from "vue";
import { reactive, ref, computed, provide } from "@vue/composition-api";
import store from "../store";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  setup() {
    const state = reactive({
      count: computed(() => store.getters.number),
      doubleValue: computed(() => state.count * 2),
      todoList: computed(() => store.getters.todoList),
      id: computed(() => {
        const { length } = store.getters.todoList;
        if (length > 0) {
          return store.getters.todoList[length - 1]?.id + 1;
        }
        return 0;
      })
    });

    provide("pTodoList", state.todoList);

    provide("pCount", state.count);

    // const store = useStore();

    // const complete = ref(true);
    const title = ref("");

    function addTodo() {
      store.commit("createTodo", {
        id: state.id.value,
        complete: true,
        title: title.value
      });
    }

    return {
      title,
      state,
      addTodo
    };
  }
};
</script>

<style></style>
