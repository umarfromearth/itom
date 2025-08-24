<script setup>
import { ElementsPanel } from './panel';
import { useElementsStore } from '@/stores/global/elementsStore';

const elementsPanel = new ElementsPanel();
const elementsStore = useElementsStore();

import Button from '@/components/elements/button/button';
elementsPanel.register(Button);


</script>

<template>
    <div class="elements-panel">
        <div v-for="Element of elementsPanel.registry">
            <button class="element" @click="elementsStore.elements.push(new Element())">
                add {{ Element.name }}
            </button>
        </div>
    </div>

</template>

<style scoped>
.elements-panel {
    background: red;
    width: 15%;
    height: 100%;
}

.element {
    width: 100px;
    height: 54px;
}
</style>