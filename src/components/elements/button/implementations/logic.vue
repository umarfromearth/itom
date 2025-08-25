<script setup>
import { useLayersStore } from '@/stores/global/layersStore';
import { ref } from 'vue';

const { layer: button } = defineProps(["layer"])

const operation = ref("change-state");
const operationOf = ref(button.name);
const operationFrom = ref();
const operationTo = ref();



const layersStore = useLayersStore();

</script>

<template>
    <p>click: </p>
    <div>
        <div>
            operation:
            <select name="" id="" v-model="operation">
                <option value="change-state">change state</option>
                <option value="toggle-state">toggle state</option>
            </select>
        </div>

        <div>
            of:
            <select name="" id="">
                <option value="" v-for="layer in layersStore.layers">{{ layer.name }}</option>
            </select>
        </div>

        <div>
            to:
            <select name="" id="">
                <option value="" v-for="state in Object.keys(layersStore.selected.states)">{{ state }}</option>
            </select>
        </div>
    </div>
</template>