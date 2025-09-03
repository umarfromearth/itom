<script setup>
import { useLinksStore } from '@/stores/global/linksStore';


const { svg, link } = defineProps(["svg", "link"]);
const linksStore = useLinksStore();

const d = (link) => {
    let x = svg.getBoundingClientRect().x;
    let y = svg.getBoundingClientRect().y;

    // C P1 P2 E
    return `M ${link.sx - x} ${link.sy - y} C ${(link.sx - x + (Math.abs(link.ex - link.sx)) / 2)} ${link.sy - y} ${(link.ex - x - (Math.abs(link.ex - link.sx)) / 2)} ${link.ey - y} ${link.ex - x} ${link.ey - y}`;
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