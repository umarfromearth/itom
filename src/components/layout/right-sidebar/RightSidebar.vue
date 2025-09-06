<script setup>
import { ref } from "vue";
import PropertiesPanel from "./properties-panel/PropertiesPanel.vue";
import InteractionPanel from "./interaction-panel/InteractionPanel.vue";

const tabs = { PropertiesPanel, InteractionPanel }
const activeTab = ref("PropertiesPanel");

</script>

<template>
    <div class="right-sidebar">
        <div>
            <button @click="activeTab = 'PropertiesPanel'">properties</button>
            <button @click="activeTab = 'InteractionPanel'">interaction</button>
        </div>

        <div class="active-panel">
            <component :is="tabs[activeTab]" />
        </div>
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