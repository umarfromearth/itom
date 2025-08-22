<script setup>
import { ElementsPanel } from './panel';
import { useElementsStore } from '@/stores/global/elementsStore';

const elementsPanel = new ElementsPanel();
const elementsStore = useElementsStore();

import ButtonPanel from "@/components/elements/button/implementation/renders/panel.vue"
import Button from '@/components/elements/button/implementation/button';
elementsPanel.register(Button, ButtonPanel);


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