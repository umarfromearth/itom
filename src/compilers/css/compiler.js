import { onMounted, ref, watch } from "vue";
import { useLayersStore } from "@/stores/global/layersStore";


export function useCSSComplier() {
    const layersStore = useLayersStore();
    const css = ref("");
    watch(layersStore.layers, () => {
        css.value = "";
        for (let layer of layersStore.layers) {
            let ruleset = "";
            for (let prop in layer.properties) {
                if (prop == "size") {
                    ruleset = `.${layer.name}{width: ${layer.properties.size.width}px; height: ${layer.properties.size.height}px; }`
                }
            }
            css.value += ruleset;
        }
    })
    return css;
}