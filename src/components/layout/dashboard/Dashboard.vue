<script setup>
import ElementsPanel from '@/components/layout/element-panel/ElementsPanel.vue';
import EditingCanvas from '@/components/layout/editing-canvas/EditingCanvas.vue';
</script>

<template>
    <div class="container">
        <ElementsPanel />
        <EditingCanvas />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>