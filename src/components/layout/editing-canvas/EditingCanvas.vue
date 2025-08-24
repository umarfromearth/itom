<script setup>
import { EditingCanvas } from './canvas';
import { useLayersStore } from '@/stores/global/layersStore';

const editingCanvas = new EditingCanvas();
const layersStore = useLayersStore();

import CanvasButton from "@/components/elements/button/implementations/canvas.vue"
import Button from '@/components/elements/button/button';

import { onMounted, watch } from 'vue';
editingCanvas.register(Button, CanvasButton);

function focus(event) {
    if (event.target.classList.contains("editing-canvas")) {
        layersStore.selected = null;
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
        <template v-for="layer in layersStore.layers">
            <component :is="editingCanvas.implementations.get(layer.constructor)" :layer="layer"
                @click="layersStore.selected = layer" />
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