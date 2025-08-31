<script setup>
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

import { useLayersStore } from '@/stores/global/layersStore';
import { useLinksStore } from '@/stores/global/linksStore';

const linksStore = useLinksStore();

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

const layersStore = useLayersStore();




</script>

<template>
    <div class="logic-canvas"
        @mousemove="(event) => { if (linksStore.links.length > 0) linksStore.links.at(-1).move(event) }">
        <div class="editor">

            <!-- {{ linksStore.links }} -->
            <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
                <path v-for="link in linksStore.links"
                    :d="' M ' + link.sx + ' ' + link.sy + ' L ' + link.ex + ' ' + link.ey" stroke="black" />
            </svg>
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" :layer="layer" />
        </div>

    </div>
</template>

<style scoped>
.logic-canvas {
    width: 70%;
    overflow: auto;
}

.editor {
    /* width: 2000px; */
    height: 100%;
    background: grey;
    display: flex;
    align-items: center;
    padding: 40px;
}

svg {
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
</style>