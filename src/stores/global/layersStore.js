import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useLayersStore = defineStore("layers-store", () => {
    const layers = reactive([]);
    const selected = ref(null);
    return {
        layers,
        selected,
    }
})
