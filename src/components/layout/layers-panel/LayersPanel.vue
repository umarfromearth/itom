<script setup>
import { ElementsPanel } from './panel';
import { useElementsStore } from '@/stores/global/elementsStore';

const elementsPanel = new ElementsPanel();
const elementsStore = useElementsStore();

import ElementsPanelButton from "@/components/elements/button/implementation/layers.vue"
import Button from '@/components/elements/button/button';
elementsPanel.register(Button, ElementsPanelButton);


</script>

<template>
    <p>this is elements panel</p>
    <p>{{ elementsStore.elements }}</p>

    <div v-for="Component in elementsPanel.implementations.keys()">
        <component :is="elementsPanel.implementations.get(Component)" @click="() => {
            elementsStore.elements.push(new Component()); console.log(elements)
        }" />
    </div>

</template>