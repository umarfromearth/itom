<script setup>
import { ElementsPanel } from './panel';
import { useElementsStore } from '@/stores/global/elementsStore';

const elementsPanel = new ElementsPanel();
const elementsStore = useElementsStore();

import ElementsPanelButton from "@/components/elements/button/implementation/panel.vue"
import Button from '@/components/elements/button/button';
elementsPanel.register(Button, ElementsPanelButton);


</script>

<template>
    <div class="elements-panel">

        <div v-for="Component in elementsPanel.implementations.keys()">
            <component :is="elementsPanel.implementations.get(Component)" @click="() => {
                elementsStore.elements.push(new Component()); console.log(elements)
            }" />
        </div>
    </div>

</template>

<style scoped>
.elements-panel {
    background: red;
    width: 15%;
    height: 100%;
}
</style>