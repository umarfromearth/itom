<script setup>
const { layer: button } = defineProps(["layer"]);

import { onMounted } from 'vue';

onMounted(() => {
    const css = `
    
.${button.name} button {
    width: 100%;
    height: 100%;
}

`
    const style = document.createElement('style');
    style.innerText = css;
    document.head.append(style);
})
</script>

<template>
    <div :class="button.name" class="root properties-panel">
        <button>{{ button.text }}</button>
    </div>
</template>
