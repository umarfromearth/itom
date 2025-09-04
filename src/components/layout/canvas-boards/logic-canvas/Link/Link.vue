<script setup>
import { useLinksStore } from '@/stores/global/linksStore';


const { startCoordinates, link } = defineProps(["start-coordinates", "link"]);
const linksStore = useLinksStore();

const d = (link) => {

    const relativeStartX = link.sx - startCoordinates.x;
    const relativeStartY = link.sy - startCoordinates.y;
    const relativeEndX = link.ex - startCoordinates.x;
    const relativeEndY = link.ey - startCoordinates.y;

    const m = `M ${relativeStartX} ${relativeStartY}`;

    const curveWidth = Math.abs(link.ex - link.sx);
    const curveHeight = Math.abs(link.ex - link.sx);

    const p1 = `${relativeStartX + curveWidth / 2} ${relativeStartY}`;
    const p2 = `${relativeEndX - curveWidth / 2} ${relativeEndY}`
    const p3 = `${relativeEndX} ${relativeEndY}`

    const c = `C ${p1} ${p2} ${p3}`

    return `${m} ${c}`;
}
</script>

<template>
    <path :d="d(link)" stroke="black" stroke-width="3" fill="none" @click="linksStore.selected = link" />
</template>


<style scoped>
/* path:hover {
    stroke: white;
} */
</style>