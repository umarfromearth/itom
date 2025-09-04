<script setup>
import { useLinksStore } from '@/stores/global/linksStore';

// const { triggerHappensOn, actionHappensOn } = defineProps(["trigger-happens-on", "action-happens-on"]);

const interactionsStore = useLinksStore();

</script>

<template>
    <div class="interaction-menu">
        <div class="layer-info">
            Add interaction for <p>{{ interactionsStore.selected.s.name }}</p>
        </div>
    </div>
</template>

<style scoped>
.interaction-menu {
    width: 300px;
    height: 350px;
    background: purple;
}
</style>