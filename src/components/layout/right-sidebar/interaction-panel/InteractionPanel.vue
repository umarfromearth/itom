<script setup>
import { userInteractionsStore } from '@/stores/global/interactionsStore';

const interactionsStore = userInteractionsStore();

</script>

<template>

    <div class="interaction-panel">

        {{ interactionsStore.selectedInteractionPath.triggerHappensOn.name }}

        <div v-for="subinteraction in interactionsStore.selectedInteractionPath.interaction.subInteractions">
            <p>{{ subinteraction }}</p>
        </div>
    </div>

</template>


<style scoped>
.interaction-panel {
    background: pink;
    height: 100%;
}
</style>