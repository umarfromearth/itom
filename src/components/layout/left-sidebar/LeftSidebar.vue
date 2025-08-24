<script setup>
import ElementsPanel from "./element-panel/ElementsPanel.vue";
import LayersPanel from "./layers-panel/LayersPanel.vue";
</script>

<template>
    <div class="left-sidebar">
        <ElementsPanel />
        <LayersPanel />
    </div>
</template>

<style scoped>
.left-sidebar {
    width: 15%;
    height: 100%;
}
</style>