<script setup>
import { useLinksStore } from '@/stores/global/linksStore';

const linksStore = useLinksStore();
</script>

<template>
    <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
        <path v-for="link in linksStore.links" :d="' M ' + link.sx + ' ' + link.sy + ' L ' + link.ex + ' ' + link.ey"
            stroke="black" stroke-width="3" />
    </svg>
</template>