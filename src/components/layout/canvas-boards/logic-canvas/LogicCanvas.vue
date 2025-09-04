<script setup>
import { watch } from 'vue';

import { useLayersStore } from '@/stores/global/layersStore';
import { useLinksStore } from '@/stores/global/linksStore';

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

import LinksBoard from './LinksBoard.vue/LinksBoard.vue';
import InteractionMenu from '@/components/ui/interaction-menu/InteractionMenu.vue';

const linksStore = useLinksStore();
const layersStore = useLayersStore();

let style = document.createElement("style");

watch(linksStore.links, function () {
    let css = '';
    for (let link of linksStore.links) {
        for (let action of link.actions) {
            let state = link.s.states[action.to];
            for (let [selector, declerations] of Object.entries(state.rulesets)) {
                css +=
                    `
                    ${state.normalizeSelector(link.s.name, selector)}:hover{
                        ${state.compileDeclerations(declerations)}
                    }
                `
            }
        }
    }
    style.innerText = css;
    document.head.append(style)
})

</script>

<template>
    <div class="logic-canvas"
        @mousemove="(event) => { if (linksStore.links.length > 0) linksStore.links.at(-1).move(event) }">
        <div class="editor">
            <LinksBoard />
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" :layer="layer" />
            <InteractionMenu v-if="linksStore.selected" />
        </div>

    </div>
</template>

<style scoped>
.logic-canvas {
    width: 100%;
    height: 100%;
}

.editor {
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