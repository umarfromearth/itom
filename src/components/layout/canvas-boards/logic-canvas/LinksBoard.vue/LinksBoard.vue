<script setup>
import { useLinksStore } from '@/stores/global/linksStore';
import Link from './Link/Link.vue'
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

const linksStore = useLinksStore();

const linksBoard = useTemplateRef("links-board");

const startCoordinates = reactive({});

onMounted(() => {
    const boundingClientRect = linksBoard.value.getBoundingClientRect();
    startCoordinates.x = boundingClientRect.x;
    startCoordinates.y = boundingClientRect.y;
})

</script>

<template>
    <svg xmlns='https://www.w3.org/2000/svg' ref="links-board" class="links-board">
        <Link v-for="link in linksStore.links" :link="link" :start-coordinates="startCoordinates" />
    </svg>
</template>
