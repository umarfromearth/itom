<script setup>
const { binding } = defineProps(["binding"]);
</script>

<template>
    <svg xmlns="https://www.w3.org/2000/svg" width="500" height="500"
        :style="{ left: binding.mx + 'px', top: binding.my + 'px' }">
        <path :d="'M 0 0 L' + (binding.lx - binding.mx) + ' ' + (binding.ly - binding.my)" stroke="black"
            stroke-width="5" />
    </svg>
</template>

<style scoped>
svg {
    position: absolute;
}
</style>