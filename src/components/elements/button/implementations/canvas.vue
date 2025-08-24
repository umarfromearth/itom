<script setup>
const { element: button } = defineProps(["element"]);
</script>

<template>
    <button :class="button.name">{{ button.text }}</button>
</template>
