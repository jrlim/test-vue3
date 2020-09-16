<template>
  <div>
    <h2>CounterNew</h2>
    <h2>{{ msg }}</h2>
    <button class="myButton" @click="increment">Increment</button>
    <button class="myButton" @click="double">Double</button>

    <h3>Number is: {{ state.count }}</h3>
    <h4>{{ state.status }}</h4>
  </div>
</template>

<script>
import { watch, onMounted } from "@vue/composition-api";
import counter from "../compositions/counter";

export default {
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup() {
    const { state, increment, double, welcomeMessage } = counter();
    // LIFECYCLE HOOKS
    watch(() => console.log(state.count));

    onMounted(() => welcomeMessage());

    return {
      state,
      increment,
      double
    };
  }
  // setup() {
  //   const state = reactive({
  //     count: 0,
  //     status: "",
  //     doubleValue: computed(() => state.count * 2),
  //     squareValue: computed(() => state.count * state.count)
  //   });

  //   // MATH OPERATIONS
  //   function increment() {
  //     state.count++;
  //     state.status = "Incremented";
  //   }

  //   function double() {
  //     state.count *= 2;
  //     state.status = "Doubled";
  //   }

  //   // STATUS OPERATIONS
  //   function welcomeMessage() {
  //     state.status = "Counter Loaded";
  //   }

  //   // LIFECYCLE HOOKS
  //   watch(() => console.log(state.count));

  //   onMounted(() => welcomeMessage());

  //   return {
  //     state,
  //     increment,
  //     double
  //   };
  // }
};
</script>

<style scoped></style>
