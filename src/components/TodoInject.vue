<template>
  <div>
    <div>pCount: {{ pCount }}</div>
    <div><button @click="increment()">+</button></div>
  </div>
</template>

<script>
// import { inject } from "vue";
import { inject } from "@vue/composition-api";
import store from "../store";

export default {
  name: "TodoInject",
  setup() {
    const pTodList = inject("pTodoList");
    const pCount = inject("pCount");

    // MATH OPERATIONS
    function increment() {
      console.info("TodoItem.vue, increment()");
      store.dispatch("INCREMENT_NUMBER");
      // pCount++;
    }

    return {
      pTodList,
      pCount,
      increment
    };
  }
};
</script>

<style></style>
