import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useElementsStore = defineStore("elements-store", () => {
    const elements = reactive([]);
    const selected = ref(null);
    return {
        elements,
        selected,
    }
})
