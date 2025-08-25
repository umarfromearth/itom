<script setup>
import { useLayersStore } from '@/stores/global/layersStore';
const layersStore = useLayersStore();

</script>

<template>
    <div class="properties-panel">
        <div v-if="layersStore.selected">
            <div>
                <label for="">width: </label>
                <input type="number" placeholder="width"
                    v-model="layersStore.selected.states.default.properties.size.width">
            </div>


            <div>
                <label for="">height: </label>
                <input type="number" placeholder="height"
                    v-model="layersStore.selected.states.default.properties.size.height">
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