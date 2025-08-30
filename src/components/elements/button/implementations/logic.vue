<script setup>
const { layer: button } = defineProps(["layer"])
</script>

<template>
    <div class="node"></div>
</template>

<style scoped>
.node {
    width: 100px;
    height: 100px;
    background: green;
    position: absolute;
}
</style>
