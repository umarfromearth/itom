<script setup>
import { ElementsPanel } from './panel';
const elementsPanel = new ElementsPanel();

import ButtonPanel from "@/components/elements/button/implementation/renders/panel.vue"
import Button from '@/components/elements/button/implementation/button';
elementsPanel.register(Button, ButtonPanel);

const elements = [];

</script>

<template>
    <p>this is elements panel</p>

    <div v-for="Component in elementsPanel.implementations.keys()">
        <component :is="elementsPanel.implementations.get(Component)" @click="() => {
            elements.push(new Component()); console.log(elements)
        }" />
    </div>

</template>