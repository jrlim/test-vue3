// import { ref } from "vue";
import { ref } from "@vue/composition-api";

export const useDetailCard = () => {
  const selected = ref(null);

  const openDetails = selectedToDo => {
    selected.value = selectedToDo;
  };

  const closeDetails = () => {
    selected.value = null;
  };

  const resetSelected = createdAt => {
    if (selected.value && createdAt === selected.value.createdAt) {
      selected.value = null;
    }
  };

  return {
    selected,
    openDetails,
    closeDetails,
    resetSelected
  };
};

export default {
  useDetailCard
};
