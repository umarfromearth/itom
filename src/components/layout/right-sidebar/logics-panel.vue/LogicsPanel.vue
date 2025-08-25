<script setup>
import { useLayersStore } from '@/stores/global/layersStore';
import { LogicsPanel } from './panel';

const layersStore = useLayersStore();

import ButtonLogicImplementation from "@/components/elements/button/implementations/logic.vue"
import Button from '@/components/elements/button/button';

const logicsPanel = new LogicsPanel();
logicsPanel.register(Button, ButtonLogicImplementation)
</script>

<template>

    <div class="logics-panel">
        <component :is="logicsPanel.implementations.get(layersStore.selected.constructor)"
            :layer="layersStore.selected" />
    </div>

</template>


<style scoped>
.logics-panel {
    background: pink;
    height: 100%;
}
</style>