<script setup>
import { ElementsPanel } from './panel';
import { useLayersStore } from '@/stores/global/layersStore';

const elementsPanel = new ElementsPanel();
const layersStore = useLayersStore();

import Button from '@/components/elements/button/button';
import ToggleButton from "@/components/elements/toggle-button/toggle-button";

elementsPanel.register(Button);
// elementsPanel.register(ToggleButton);


</script>

<template>
    <div class="elements-panel">
        <div v-for="Element of elementsPanel.registry">
            <button class="element" @click="layersStore.layers.push(new Element())">
                add {{ Element.name }}
            </button>
        </div>
    </div>

</template>

<style scoped>
.elements-panel {
    background: red;
    height: 100%;
}

.element {
    width: 100px;
    height: 54px;
}
</style>