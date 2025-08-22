<script setup>
import { EditingCanvas } from './canvas';
import { useElementsStore } from '@/stores/global/elementsStore';

const editingCanvas = new EditingCanvas();
const elementsStore = useElementsStore();

import CanvasButton from "@/components/elements/button/implementation/renders/canvas.vue"
import Button from '@/components/elements/button/implementation/button';
editingCanvas.register(Button, CanvasButton);


</script>

<template>
    <p>this is editing canvas</p>
    <p>{{ elementsStore.elements }}</p>

    <div v-for="element in elementsStore.elements">
        <component :is="editingCanvas.implementations.get(element.constructor)" @click="() => {
            elementsStore.elements.push(new Component()); console.log(elements)
        }" />
    </div>

</template>