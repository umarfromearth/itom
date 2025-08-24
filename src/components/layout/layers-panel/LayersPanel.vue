<script setup>
import { ElementsPanel } from './panel';
import { useLayersStore } from '@/stores/global/layersStore';

const elementsPanel = new ElementsPanel();
const layersStore = useLayersStore();

import ElementsPanelButton from "@/components/elements/button/implementation/layers.vue"
import Button from '@/components/elements/button/button';
elementsPanel.register(Button, ElementsPanelButton);


</script>

<template>
    <p>this is elements panel</p>
    <p>{{ layersStore.elements }}</p>

    <div v-for="Component in elementsPanel.implementations.keys()">
        <component :is="elementsPanel.implementations.get(Component)" @click="() => {
            layersStore.elements.push(new Component()); console.log(elements)
        }" />
    </div>

</template>