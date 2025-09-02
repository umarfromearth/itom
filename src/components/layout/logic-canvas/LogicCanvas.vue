<script setup>
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

import { useLayersStore } from '@/stores/global/layersStore';
import { useLinksStore } from '@/stores/global/linksStore';

const linksStore = useLinksStore();

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

const layersStore = useLayersStore();

import LinksBoard from './LinksBoard.vue/LinksBoard.vue';




</script>

<template>
    <div class="logic-canvas"
        @mousemove="(event) => { if (linksStore.links.length > 0) linksStore.links.at(-1).move(event) }">
        <div class="editor">

            <!-- {{ linksStore.links }} -->
            <!-- <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
                <path v-for="link in linksStore.links"
                    :d="' M ' + link.sx + ' ' + link.sy + ' L ' + link.ex + ' ' + link.ey" stroke="black" />
            </svg> -->
            {{ linksStore.links }}
            <LinksBoard />
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" :layer="layer" />
            <!-- <div class="menu" v-if="linksStore.selected">
                <div>
                    <label for="">trigger: </label>
                    <select name="" id="">
                        <option value="">click</option>
                    </select>
                </div>
                <div>
                    <label for="">action: </label>
                    <select name="" id="">
                        <option value="">change state</option>
                    </select>
                </div>
                <div>
                    <label for="">to:</label>
                    <select name="" id="">
                        <option value="" v-for="state in linksStore.selected.e.states"></option>
                    </select>
                </div>
                <button @click="linksStore.selected = null"> close</button>
            </div> -->
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

.menu {
    width: 500px;
    height: 500px;
    background: aqua;
    position: absolute;
}
</style>