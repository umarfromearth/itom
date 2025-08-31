import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLinksStore = defineStore('links-store', function () {
    const links = reactive([]);
    return {
        links
    }
})