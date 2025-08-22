<script setup>
import { useElementsStore } from '@/stores/global/elementsStore';
const elementsStore = useElementsStore();

</script>

<template>
    <div class="properties-panel">
        <div v-if="elementsStore.selected">
            <div>
                <label for="">width: </label>
                <input type="number" placeholder="width" v-model="elementsStore.selected.properties.size.width">
            </div>


            <div>
                <label for="">height: </label>
                <input type="number" placeholder="height" v-model="elementsStore.selected.properties.size.height">
            </div>
        </div>
        <div v-else>
            <p>show properties of editing canvas</p>
        </div>
    </div>
</template>


<style scoped>
.properties-panel {
    width: 15%;
    height: 100%;
    background-color: blue;
}
</style>