<script setup>
const { layer: button } = defineProps(["layer"]);
</script>

<template>
    <button :class="button.name">{{ button.text }}</button>
</template>
