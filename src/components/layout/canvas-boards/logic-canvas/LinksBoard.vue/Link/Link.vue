<script setup>
import { userInteractionsStore } from '@/stores/global/interactionsStore';

const { startCoordinates, interaction } = defineProps(["start-coordinates", "interaction"]);
const interactionsStore = userInteractionsStore();


const d = (interaction) => {

    const relativeStartX = interaction.startCoords.x - startCoordinates.x;
    const relativeStartY = interaction.startCoords.y - startCoordinates.y;
    const relativeEndX = interaction.endCoords.x - startCoordinates.x;
    const relativeEndY = interaction.endCoords.y - startCoordinates.y;

    const m = `M ${relativeStartX} ${relativeStartY}`;

    const curveWidth = Math.abs(interaction.endCoords.x - interaction.startCoords.x);
    const curveHeight = Math.abs(interaction.endCoords.x - interaction.startCoords.x);

    const p1 = `${relativeStartX + curveWidth / 2} ${relativeStartY}`;
    const p2 = `${relativeEndX - curveWidth / 2} ${relativeEndY}`
    const p3 = `${relativeEndX} ${relativeEndY}`

    const c = `C ${p1} ${p2} ${p3}`

    return `${m} ${c}`;
}
</script>

<template>
    <path :d="d(interaction)" stroke="black" stroke-width="3" fill="none"
        @click="interactionsStore.selected = interaction" />
</template>


<style scoped>
/* path:hover {
    stroke: white;
} */
</style>