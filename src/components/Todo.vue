<template>
  <div>
    Todo
    <br >
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoList
  }
};
</script>

<style></style>
