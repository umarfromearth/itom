<script setup>
import { userInteractionsStore } from '@/stores/global/interactionsStore';
import Link from './Link/Link.vue'
import { onMounted, reactive, ref, useTemplateRef } from 'vue';

const interactionsStore = userInteractionsStore();

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
        <Link v-for="interaction in interactionsStore.interactions" :interaction="interaction"
            :start-coordinates="startCoordinates" />
    </svg>
</template>
