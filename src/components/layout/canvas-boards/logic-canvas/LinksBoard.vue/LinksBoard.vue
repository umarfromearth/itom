<script setup>
import { useLinksStore } from '@/stores/global/linksStore';
import Link from '../Link/Link.vue'
import { useTemplateRef } from 'vue';

const linksStore = useLinksStore();
const svg = useTemplateRef("svg");

</script>

<template>
    <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
        <Link v-for="link in linksStore.links" :link="link" :svg="svg" />
    </svg>
</template>
