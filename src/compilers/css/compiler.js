import { onMounted, ref, watch } from "vue";
import { useLayersStore } from "@/stores/global/layersStore";


export function useCSSComplier() {
    const layersStore = useLayersStore();
    const css = ref("");
    watch(layersStore.layers, () => {
        css.value = "";
        for (let layer of layersStore.layers) {
            css.value += layer.css();
        }
    })
    return css;
}