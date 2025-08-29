<script setup>
const { layer: toggleButton } = defineProps(["layer"]);

// onMounted(() => {
//     const css = `
    


// .${toggleButton.name} {
//     width: 200px;
//     height: 200px;
// }


// .${toggleButton.name}:has(input:checked) label {
//     background: orange;
// }

// `
// })

</script>

<template>
    <div :class="toggleButton.name" class="root properties-panel">
        <input :id="'toggle-button-' + toggleButton.name" type="checkbox">
        <label :for="'toggle-button-' + toggleButton.name"></label>
    </div>
</template>

<style scoped></style>
