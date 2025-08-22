<script setup>
import { EditingCanvas } from './canvas';
import { useElementsStore } from '@/stores/global/elementsStore';

const editingCanvas = new EditingCanvas();
const elementsStore = useElementsStore();

import CanvasButton from "@/components/elements/button/implementation/canvas.vue"
import Button from '@/components/elements/button/button';
editingCanvas.register(Button, CanvasButton);


</script>

<template>

    <div class="editing-canvas">

        <div v-for="element in elementsStore.elements">
            <component :is="editingCanvas.implementations.get(element.constructor)" @click="() => {
                elementsStore.elements.push(new Component()); console.log(elements)
            }" />
        </div>
    </div>

</template>


<style scoped>
.editing-canvas {
    width: 70%;
    height: 100%;
    background: grey;

    overflow: hidden;
}
</style>