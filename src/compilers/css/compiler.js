import { onMounted, ref, watch } from "vue";
import { useElementsStore } from "@/stores/global/elementsStore";


export function useCSSComplier() {
    const elementsStore = useElementsStore();
    const css = ref("");
    watch(elementsStore.elements, () => {
        css.value = "";
        for (let element of elementsStore.elements) {
            let ruleset = "";
            for (let prop in element.properties) {
                if (prop == "size") {
                    ruleset = `.${element.name}{width: ${element.properties.size.width}px; height: ${element.properties.size.height}px; }`
                }
            }
            css.value += ruleset;
        }
    })
    return css;
}