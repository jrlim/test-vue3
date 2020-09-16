<template>
  <div class="todo-item">
    <input
      type="checkbox"
      :checked="todo.complete"
      @change="changeTodoStatus(todo.id)"
    >
    <div class="todo-item__title">{{ todo.title }}</div>
    <button @click="removeTodo(todo.id)">X</button>
    <TodoInject />
  </div>
</template>

<script>
import store from "../store";
import TodoInject from "./TodoInject.vue";

export default {
  name: "TodoItem",
  components: {
    TodoInject
  },
  props: {
    todo: {
      type: Object,
      require: true
    }
  },
  setup(props) {

    function removeTodo(id) {
      store.commit("removeTodo", id);
    }

    function changeTodoStatus(id) {
      store.commit("editTodo", {
        id,
        complete: !props.todo.complete,
        title: props.todo.title
      });
    }

    return {
      changeTodoStatus,
      removeTodo
    };
  }
};
</script>

<style>
.todo-item {
  max-width: 300px;
  margin: 6px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
