<script setup>
import { onMounted } from 'vue';

const { layer: toggleButton } = defineProps(["layer"]);

onMounted(() => {
    const css = `
    
.${toggleButton.name} input {
    display: none;
}

.${toggleButton.name} {
    width: 200px;
    height: 200px;
}

.${toggleButton.name} label {
    display: block;
    width: 100%;
    height: 100%;
    border: 5px solid black;
}

.${toggleButton.name}:has(input:checked) label {
    background: orange;
}

`
    const style = document.createElement('style');
    style.innerText = css;
    document.head.append(style);
})


</script>

<template>
    <div :class="toggleButton.name" class="root properties-panel">
        <input :id="'toggle-button-' + toggleButton.name" type="checkbox">
        <label :for="'toggle-button-' + toggleButton.name"></label>
    </div>
</template>

<style scoped></style>
