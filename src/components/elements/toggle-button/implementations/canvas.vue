<script setup>
const { layer: toggleButton } = defineProps(["layer"]);
</script>

<template>
    <div :id="toggleButton.name">
        <label for="toggle-button"></label>
        <input id="toggle-button" type="checkbox">
    </div>
</template>

<style scoped>
input {
    display: none;
}

div {
    width: 200px;
    height: 200px;
}

label {
    display: block;
    width: 100%;
    height: 100%;
    border: 5px solid black;
}

div:has(input:checked) label {
    background: orange;
}

div:has(input:checked) {
    /* background: green; */
    border: 10px solid green;
}
</style>
