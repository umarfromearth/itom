import { defineStore } from "pinia";
import { reactive } from "vue";

export const useLinksStore = defineStore('links-store', function () {
    const links = reactive([]);

    const relations = [
        { from: "button", to: "button", menu: "button to button menu" }
    ]

    const showMenu = null;


    return {
        links,
        relations,
        showMenu
    }
})