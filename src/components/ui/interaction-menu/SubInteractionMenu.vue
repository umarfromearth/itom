<script setup>
import { userInteractionsStore } from "@/stores/global/interactionsStore";
import { reactive, ref, watch } from "vue";

import ClickTrigger from "@/triggers/types/click";

import ChangeStateAction from "@/actions/change-state";
import SubInteraction from "@/interaction/sub-interaction";

const interactionsStore = userInteractionsStore();

watch(
    () => interactionsStore.selectedInteractionPath,
    function () {
        if (
            interactionsStore.selectedInteractionPath.interaction.subInteractions
                .length == 0
        ) {
            interactionsStore.selectedInteractionPath.interaction.selectedSubInteraction =
                new SubInteraction(new ClickTrigger(interactionsStore.selectedInteractionPath.triggerHappensOn), new ChangeStateAction(interactionsStore.selectedInteractionPath.actionHappensOn));

            // add a new subinteraction
            interactionsStore.selectedInteractionPath.interaction.subInteractions.push(
                interactionsStore.selectedInteractionPath.interaction
                    .selectedSubInteraction
            );
        }

    },
    { immediate: true }
);
</script>

<template>
    <div class="interaction-menu">
        <div class="layer-info">
            Add interaction for <p>{{ interactionsStore.selectedInteractionPath.triggerHappensOn.name }}</p>
            <div>
                <label for="">trigger: </label>
                <select name="" id="">
                    <option
                        v-for="trigger in interactionsStore.selectedInteractionPath.triggerHappensOn.supportedTriggers"
                        value="">{{ trigger.name }}</option>
                </select>
            </div>

            <div>
                <label for="">action: </label>
                <select name="" id="">
                    <option v-for="action in interactionsStore.selectedInteractionPath.actionHappensOn.supportedActions"
                        value="">{{ action.name }}</option>
                </select>
            </div>

            <div
                v-if="interactionsStore.selectedInteractionPath.interaction.selectedSubInteraction.action.constructor == ChangeStateAction">

                <label for="">new state: </label>
                <select name="" id=""
                    v-model="interactionsStore.selectedInteractionPath.interaction.selectedSubInteraction.action.newState">
                    <option
                        v-for="state in Object.keys(interactionsStore.selectedInteractionPath.actionHappensOn.states)"
                        :value="state">{{ state }}</option>
                </select>
            </div>

            <div>
                <button @click="interactionsStore.selectedInteractionPath = null">close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.interaction-menu {
    width: 300px;
    height: 350px;
    background: rgb(255, 174, 255);
}
</style>
