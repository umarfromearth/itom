import { defineStore } from "pinia";
import { reactive } from "vue";

export const userInteractionsStore = defineStore('links-store', function () {
    const interactionPaths = reactive([]);

    const selectedInteractionPath = null;

    return {
        interactionPaths,
        selectedInteractionPath,
    }
})