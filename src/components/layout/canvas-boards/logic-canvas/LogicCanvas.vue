<script setup>
import { watch } from 'vue';

import { useLayersStore } from '@/stores/global/layersStore';
import { userInteractionsStore } from '@/stores/global/interactionsStore';

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

import InteractionMenu from '@/components/ui/interaction-menu/SubInteractionMenu.vue';
import InteractionPathsBoard from '@/components/layout/canvas-boards/logic-canvas/interaction-paths-board/InteractionPathsBoard.vue';

const interactionsStore = userInteractionsStore();
const layersStore = useLayersStore();

let style = document.createElement("style");

// watch(interactionsStore.interactionPaths, function () {
//     let css = '';
//     for (let link of interactionsStore.interactionPaths) {
//         for (let action of link.actions) {
//             let state = link.s.states[action.to];
//             for (let [selector, declerations] of Object.entries(state.rulesets)) {
//                 css +=
//                     `
//                     ${state.normalizeSelector(link.s.name, selector)}:hover{
//                         ${state.compileDeclerations(declerations)}
//                     }
//                 `
//             }
//         }
//     }
//     style.innerText = css;
//     document.head.append(style)
// })

</script>

<template>
    <div class="logic-canvas">
        <div class="editor">
            <InteractionPathsBoard />
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" :layer="layer" />
            <InteractionMenu v-if="interactionsStore.selectedInteractionPath" />
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