<script setup>
import { onMounted, reactive, ref, useTemplateRef, watch } from 'vue';

import { useLayersStore } from '@/stores/global/layersStore';
import { useLinksStore } from '@/stores/global/linksStore';

const linksStore = useLinksStore();

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

const layersStore = useLayersStore();

import LinksBoard from './LinksBoard.vue/LinksBoard.vue';

const newState = ref("default");

watch(linksStore.links, function () {
    let css = '';
    for (let link of linksStore.links) {
        for (let action of link.actions) {
            console.log(action)
            if (link.self == true) {
                css += `
                .${link.s.name}:active{
                    background: red;
                }
                `
            }
        }
    }
    console.log(css)
})


</script>

<template>
    <div class="logic-canvas"
        @mousemove="(event) => { if (linksStore.links.length > 0) linksStore.links.at(-1).move(event) }">
        <div class="editor">
            <LinksBoard />
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" :layer="layer" />
            <div class="menu" v-if="linksStore.selected">
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
                    <select name="" id="" v-model="newState">
                        <option :value="state" v-for="state in Object.keys(linksStore.selected.e.states)">{{ state }}
                        </option>
                    </select>
                </div>
                <button
                    @click="linksStore.selected.actions.push({ trigger: 'click', action: 'change state', to: newState })">add</button>
                <button @click="linksStore.selected = null"> close</button>
            </div>
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