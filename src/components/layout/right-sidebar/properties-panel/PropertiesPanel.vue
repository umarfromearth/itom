<script setup>
import { useLayersStore } from '@/stores/global/layersStore';
import { ref } from 'vue';
const layersStore = useLayersStore();

</script>

<template>
    <div class="properties-panel">
        <div v-if="layersStore.selected">
            <div>
                <button v-for="state in Object.keys(layersStore.selected.states)"
                    @click="layersStore.selected.activeState = state">{{ state
                    }}</button>
            </div>
            <div>
                <label for="">width: </label>
                <input type="number" placeholder="width"
                    v-model="layersStore.selected.states[layersStore.selected.activeState].properties.size.width">
            </div>


            <div>
                <label for="">height: </label>
                <input type="number" placeholder="height"
                    v-model="layersStore.selected.states[layersStore.selected.activeState].properties.size.height">
            </div>
        </div>
        <div v-else>
            <p>show properties of editing canvas</p>
        </div>
    </div>
</template>


<style scoped>
.properties-panel {
    height: 100%;
    background-color: blue;
}
</style>