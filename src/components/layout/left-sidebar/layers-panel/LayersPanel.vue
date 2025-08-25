<script setup>
import { useLayersStore } from '@/stores/global/layersStore';

const layersStore = useLayersStore();


</script>

<template>
    <div class="layers-panel">
        <p>this is layers panel</p>

        <div v-for="layer in layersStore.layers">
            <ul class="layers">
                <li class="layer" @click="layersStore.selected = layer"
                    :class="{ selected: layersStore.selected == layer }">
                    {{ layer.name }}
                </li>
            </ul>
        </div>
    </div>

</template>

<style scope>
.layers-panel {
    overflow: auto;
    height: 100%;
    width: 100%;
    background: orange;
}

.layers {}

.layer {
    display: block;
    background: green;
}

.layer.selected {
    background: blue;
}

/* 
.layer:hover {
    background: hsl(120, 100%, 35%);
} */
</style>