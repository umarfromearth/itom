<script setup>
import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar.vue';
import EditingCanvas from '@/components/layout/editing-canvas/EditingCanvas.vue';
import PropertiesPanel from "@/components/layout/right-sidebar/properties-panel/PropertiesPanel.vue"
</script>

<template>
    <div class="container">
        <LeftSidebar />
        <EditingCanvas />
        <PropertiesPanel />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>