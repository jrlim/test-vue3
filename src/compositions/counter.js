import { reactive, computed, watch, onMounted } from "@vue/composition-api";

export default function counter() {
  const state = reactive({
    count: 0,
    status: "",
    doubleValue: computed(() => state.count * 2),
    squareValue: computed(() => state.count * state.count)
  });

  // MATH OPERATIONS
  function increment() {
    state.count++;
    state.status = "Incremented";
  }

  function double() {
    state.count *= 2;
    state.status = "Doubled";
  }

  // STATUS OPERATIONS
  function welcomeMessage() {
    state.status = "Counter Loaded";
  }

  // LIFECYCLE HOOKS
  watch(() => console.log(state.count));

  onMounted(() => welcomeMessage());

  return {
    state,
    increment,
    double,
    welcomeMessage
  };
}
