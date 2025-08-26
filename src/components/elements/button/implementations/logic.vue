<script setup>
import { useLayersStore } from '@/stores/global/layersStore';
import { ref } from 'vue';

const { layer: button } = defineProps(["layer"])

const operation = ref("change-state");
const element = ref(button);
const state = ref("default");

const layersStore = useLayersStore();

import { ChangeState } from '../button';

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
            element:
            <select name="" id="" v-model="element">
                <option :value="layer" v-for="layer in layersStore.layers">{{ layer.name }}</option>
            </select>
        </div>

        <div>
            state:
            <select name="" id="" v-model="state">
                <option :value="state" v-for="state in Object.keys(layersStore.selected.states)">{{ state }}</option>
            </select>
        </div>

        <div>
            <button
                @click="button.actions.click.push(new ChangeState({ operation, element, state })); console.log(button)">add</button>
        </div>
    </div>
</template>
