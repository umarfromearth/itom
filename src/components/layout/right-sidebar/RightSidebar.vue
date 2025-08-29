<script setup>

import PropertiesPanel from "./properties-panel/PropertiesPanel.vue";

</script>

<template>
    <div class="right-sidebar">
        <PropertiesPanel />
    </div>
</template>

<style scoped>
.right-sidebar {
    width: 15%;
    height: 100%;
    background: green;

    display: flex;
    flex-direction: column;
}

.active-panel {
    flex-grow: 1;
}
</style>