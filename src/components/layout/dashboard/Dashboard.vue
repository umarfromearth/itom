<script setup>
import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar.vue';
import EditingCanvas from '@/components/layout/editing-canvas/EditingCanvas.vue';
import RightSidebar from '@/components/layout/right-sidebar/RightSidebar.vue';
import LogicCanvas from '../logic-canvas/LogicCanvas.vue';
</script>

<template>
    <div class="container">
        <LeftSidebar />
        <!-- <EditingCanvas /> -->
        <LogicCanvas />
        <RightSidebar />
    </div>
</template>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
    display: flex;
}
</style>