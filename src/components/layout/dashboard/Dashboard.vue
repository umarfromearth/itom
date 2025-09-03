<script setup>
import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar.vue';
import CanvasBoards from '@/components/layout/canvas-boards/CanvasBoards.vue';
import RightSidebar from '@/components/layout/right-sidebar/RightSidebar.vue';
</script>

<template>
    <div class="container">
        <LeftSidebar />
        <CanvasBoards />
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