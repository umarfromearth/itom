<script setup>
const { element: button } = defineProps(["element"]);
console.log(button.properties.size.width)
</script>

<template>
    <button :class="button.name">{{ button.text }}</button>
</template>
