<script setup>
import { useLinksStore } from '@/stores/global/linksStore';
import { computed, useTemplateRef } from 'vue';

const linksStore = useLinksStore();

const svg = useTemplateRef("svg");

const d = ((link) => {
    let x = svg.value.getBoundingClientRect().x;
    let y = svg.value.getBoundingClientRect().y;
    return ' M ' + (link.sx - x) + ' ' + (link.sy - y) + ' L ' + (link.ex - x) + ' ' + (link.ey - y)
})
</script>

<template>
    <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
        <path v-for="link in linksStore.links" :d="d(link)" stroke="black" stroke-width="3" />
    </svg>
</template>