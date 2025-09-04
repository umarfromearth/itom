<script setup>
import { userInteractionsStore } from '@/stores/global/interactionsStore';
import Interaction from '@/interactions/interaction';

const { layer: button } = defineProps(["layer"])

// const self = ref(null);

const interactionsStore = userInteractionsStore();



function selfLink() {

    if (self.value == null) {
        let link = new Link();
        [link.sx, link.sy] = [0, 0];
        [link.ex, link.ey] = [0, 0];
        [link.s, link.e] = [button, button];
        link.blank = false;
        link.self = true;
        linksStore.links.push(link);
        self.value = linksStore.links.at(-1);
    }

    linksStore.selected = self.value;

}

function startInteraction(event) {
    console.log("new interaction started")
    interactionsStore.interactions.push(new Interaction());
    interactionsStore.interactions.at(-1).startPath(button, event.target);
}

function endInteraction(event) {
    console.log("new interaction ended")

    interactionsStore.interactions.at(-1).endPath(button, event.target)

    console.log(interactionsStore.interactions)
}

function move(event) {
    const snap = 1;
    let target = event.target.closest(".root");

    if (target) {
        let clickX = event.clientX - target.getBoundingClientRect().x;
        let clickY = event.clientY - target.getBoundingClientRect().y;

        document.onmousemove = function (e) {
            target.style.left = ((e.clientX - clickX)) - ((e.clientX - clickX) % snap) + "px";
            target.style.top = ((e.clientY - clickY)) - ((e.clientY - clickY) % snap) + "px";

            for (let interaction of interactionsStore.interactions) {
                if (!interaction.self) {

                    if (interaction.triggerHappensOn == button) {
                        const node = event.target.closest('.root').querySelector('.node');

                        const boundingClientRect = node.getBoundingClientRect();
                        const nodeCenterX = boundingClientRect.x + boundingClientRect.width / 2
                        const nodeCenterY = boundingClientRect.y + boundingClientRect.height / 2

                        interaction.startCoords = { x: nodeCenterX, y: nodeCenterY };

                    }

                    if (interaction.actionHappensOn == button) {
                        const node = event.target.closest('.root').querySelector('.node');

                        const boundingClientRect = node.getBoundingClientRect();
                        const nodeCenterX = boundingClientRect.x + boundingClientRect.width / 2
                        const nodeCenterY = boundingClientRect.y + boundingClientRect.height / 2

                        interaction.endCoords = { x: nodeCenterX, y: nodeCenterY };
                    }
                }
            }

            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }
    }
}


</script>

<template>
    <div class="root">
        <button class="logic-block" @mousedown="move"></button>
        <!-- <div class="self" @click="selfinteraction"    ></div> -->
        <!-- <div class="node top" @mousedown="startLink($event, 'top')" @mouseup="endLink($event, 'top')"></div> -->
        <!-- <div class="node bottom" @mousedown="startLink($event, 'bottom')" @mouseup="endLink($event, 'bottom')"></div> -->
        <div class="node right" @mousedown="startInteraction($event)" @mouseup="endInteraction($event)"></div>
        <!-- <div class="node left" @mousedown="startLink($event, 'left')" @mouseup="endLink($event, 'left')"></div> -->
    </div>
</template>

<style scoped>
.root {
    position: absolute;
}

.self {
    top: 0;
    position: absolute;
    width: 15px;
    height: 15px;
    background: red;
}

.logic-block {
    width: 100px;
    height: 100px;
    background: green;
    border: none;
}

.node.top {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
}

.node.left {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
}

.node.right {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
}

.node.bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
}


.node {
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 100%;
    position: absolute;
}

/* 
.node.top {
    top: -7.5px;
    right: -7.5px;
} */
</style>
