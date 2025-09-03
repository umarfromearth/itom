<script setup>
import { useLinksStore } from '@/stores/global/linksStore';
import { ref } from 'vue';

const { layer: button } = defineProps(["layer"])

const self = ref(null);

const linksStore = useLinksStore();

class Link {

    constructor() {
        this.blank = true;
        this.startNode = "";
        this.endNode = "";
        this.self = false;

        this.actions = [];
    }

    start(block, node, start) {
        this.sx = (node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2);
        this.sy = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.s = block;
        this.startNode = start;
    }

    move(event) {
        if (this.blank) {
            this.ex = event.clientX;
            this.ey = event.clientY;
        }

    }

    end(block, node, end) {
        this.e = block;
        this.ex = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
        this.ey = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.blank = false;
        this.endNode = end;
    }

}

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

function startLink(event, startNode) {
    linksStore.links.push(new Link());
    linksStore.links.at(-1).start(button, event.target, startNode);
}

function endLink(event, endNode) {
    linksStore.links.at(-1).end(button, event.target, endNode)
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

            for (let link of linksStore.links) {
                if (!link.self) {

                    if (link.s == button) {
                        const node = event.target.closest('.root').querySelector('.' + link.startNode);
                        link.sx = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
                        link.sy = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
                    }

                    if (link.e == button) {
                        const node = event.target.closest('.root').querySelector('.' + link.endNode);

                        link.ex = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
                        link.ey = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
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
        <div class="self" @click="selfLink"></div>
        <div class="node top" @mousedown="startLink($event, 'top')" @mouseup="endLink($event, 'top')"></div>
        <div class="node bottom" @mousedown="startLink($event, 'bottom')" @mouseup="endLink($event, 'bottom')"></div>
        <div class="node right" @mousedown="startLink($event, 'right')" @mouseup="endLink($event, 'right')"></div>
        <div class="node left" @mousedown="startLink($event, 'left')" @mouseup="endLink($event, 'left')"></div>
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
