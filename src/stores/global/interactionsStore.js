import { defineStore } from "pinia";
import { reactive } from "vue";

export const userInteractionsStore = defineStore('links-store', function () {
    const interactions = reactive([]);

    const selected = null;


    return {
        interactions,
        selected,
    }
})