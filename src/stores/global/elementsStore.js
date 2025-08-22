import { defineStore } from "pinia";
import { reactive } from "vue";

export const useElementsStore = defineStore("elements-store", () => {
    const elements = reactive([]);
    return {
        elements,
    }
})
