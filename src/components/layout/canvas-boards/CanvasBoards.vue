<script setup>
import { ref } from 'vue';
import EditingCanvas from './editing-canvas/EditingCanvas.vue';
import LogicCanvas from './logic-canvas/LogicCanvas.vue';

const modes = {
    "editing": EditingCanvas,
    "logic": LogicCanvas
};

const activeMode = ref("editing");
</script>

<template>
    <div class="canvas-boards">
        <div class="active-canvas">
            <component :is="modes[activeMode]" />
        </div>
        <div class="modes-switcher">
            <button @click="activeMode = 'editing'">editing</button>
            <button @click="activeMode = 'logic'">logic</button>
        </div>
    </div>

</template>

<style scoped>
.modes-switcher {
    position: absolute;
    top: 0;
}

.canvas-boards {
    width: 70%;
    height: 100%;
    background: grey;
}

.active-canvas {
    width: 100%;
    height: 100%;
}
</style>