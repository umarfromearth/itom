<script setup>
const { layer: button } = defineProps(["layer"]);
</script>

<template>
    <div :class="button.name" class="root properties-panel">
        <button>{{ button.text }}</button>
    </div>
</template>
