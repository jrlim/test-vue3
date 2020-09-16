<template>
  <div>
    Todo
    <br >
    <TodoList />
  </div>
</template>

<script>
import store from "../store";
import TodoList from "./TodoList.vue";

export default {
  name: "Todo",
  components: {
    TodoList
  },
  beforeRouteEnter(to, from, next) {
    // Login 컴포넌트가 화면에 표시되기 전에 수행될 로직
    // Login 컴포넌트는 아직 생성되지 않은 시점
    console.info("TodoInject.vue ---> beforeRouteEnter");
    next();
  },
  beforeRouteLeave(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출됩니다.
    // `this` 컴포넌트 인스턴스에 접근 할 수 있습니다.
    store.dispatch("RESET_NUMBER");
    console.info("TodoInject.vue ---> beforeRouteLeave!!!");
    next();
  }
};
</script>

<style></style>
