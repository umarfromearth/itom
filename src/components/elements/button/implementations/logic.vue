<script setup>
const { layer: button } = defineProps(["layer"])
</script>

<template>
    <div class="root">
        <button class="logic-block"></button>
        <div class="node" @mouseup="$emit('link-end', { ex: $event.clientX, ey: $event.clientY, e: button })"
            @mousedown="$emit('link-start', { sx: $event.clientX, sy: $event.clientY, s: button })"></div>
    </div>
</template>

<style scoped>
.root {
    position: absolute;

    display: flex;
    align-items: center;
}

.logic-block {
    width: 100px;
    height: 100px;
    background: green;
    border: none;
}

.node {
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 100%;
    position: absolute;
    right: -7.5px;
}
</style>
