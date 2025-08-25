<script setup>
import { ref } from "vue";
import ElementsPanel from "./element-panel/ElementsPanel.vue";
import LayersPanel from "./layers-panel/LayersPanel.vue";

const tabs = { ElementsPanel, LayersPanel }
const activeTab = ref("ElementsPanel");
</script>

<template>
    <div class="left-sidebar">
        <div>
            <button @click="activeTab = 'ElementsPanel'">elements</button>
            <button @click="activeTab = 'LayersPanel'">layers</button>
        </div>

        <div class="active-panel">
            <component :is="tabs[activeTab]" />
        </div>

    </div>
</template>

<style scoped>
.left-sidebar {
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