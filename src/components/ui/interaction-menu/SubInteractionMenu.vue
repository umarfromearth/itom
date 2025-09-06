<script setup>
import { userInteractionsStore } from "@/stores/global/interactionsStore";
import { reactive, ref, watch } from "vue";

import ClickTrigger from "@/triggers/types/click";

import ChangeStateAction from "@/actions/change-state";
import SubInteraction from "@/interaction/sub-interaction";

const interactionsStore = userInteractionsStore();

// const interaction = reactive({ trigger: null, action: null });

// when looking for nested properties we need getter function
watch(
    () => interactionsStore.selectedInteractionPath,
    function () {
        if (
            interactionsStore.selectedInteractionPath.interaction.subInteractions
                .length == 0
        ) {
            interactionsStore.selectedInteractionPath.interaction.selectedSubInteraction =
                new SubInteraction(new ClickTrigger(), new ChangeStateAction());

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
        <!-- <div class="layer-info">
            Add interaction for <p>{{ interactionsStore.selectedInteractionPath.triggerHappensOn.name }}</p>
            <p>{{ interaction.action.newState }}</p>
            <div>
                <label for="">trigger: </label>
                <select name="" id="">
                    <option value="">click</option>
                </select>
            </div>

            <div>
                <label for="">action: </label>
                <select name="" id="">
                    <option value="">change state</option>
                </select>
            </div>

            <div v-if="interaction.action.constructor == ChangeStateAction">
                <label for="">state: </label>
                <select name="" id="" v-model="interaction.action.newState">
                    <option :value="state"
                        v-for="state in Object.keys(interactionsStore.selectedInteractionPath.actionHappensOn.states)">
                        {{
                            state }}</option>
                </select>
            </div>

            <div>
                <button @click="interactionsStore.selectedInteractionPath = null">close</button>
            </div>
        </div> -->
    </div>
</template>

<style scoped>
.interaction-menu {
    width: 300px;
    height: 350px;
    background: rgb(255, 174, 255);
}
</style>
