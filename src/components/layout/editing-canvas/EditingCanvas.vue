<script setup>
import { EditingCanvas } from './canvas';
import { useElementsStore } from '@/stores/global/elementsStore';

const editingCanvas = new EditingCanvas();
const elementsStore = useElementsStore();

import CanvasButton from "@/components/elements/button/implementations/canvas.vue"
import Button from '@/components/elements/button/button';

import { onMounted, watch } from 'vue';
editingCanvas.register(Button, CanvasButton);

function focus(event) {
    if (event.target.classList.contains("editing-canvas")) {
        elementsStore.selected = null;
    }
}

import { useCSSComplier } from '@/compilers/css/compiler';
const css = useCSSComplier();

onMounted(() => {
    const style = document.createElement("style");
    watch(css, () => {
        style.innerText = css.value;
    })
    document.head.append(style);
})


function move(event) {
    const target = event.target;
    let clickX = event.clientX - target.getBoundingClientRect().x;
    let clickY = event.clientY - target.getBoundingClientRect().y;

    document.onmousemove = function (e) {
        target.style.left = e.clientX - clickX + "px";
        target.style.top = e.clientY - clickY + "px";

        document.onmouseup = function () {
            document.onmousemove = null;
        }
    }
}


</script>

<template>

    <div class="editing-canvas" @click="focus" @mousedown="move">
        <!-- <span v-html="html"></span> -->
        <template v-for="element in elementsStore.elements">
            <component :is="editingCanvas.implementations.get(element.constructor)" :element="element"
                @click="elementsStore.selected = element" />
        </template>
    </div>

</template>


<style scoped>
.editing-canvas {
    width: 70%;
    height: 100%;
    background: grey;

    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;
}

.editing-canvas * {
    position: absolute;
}
</style>