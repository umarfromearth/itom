<script setup>
import { useLinksStore } from '@/stores/global/linksStore';

const { layer: button } = defineProps(["layer"])

const linksStore = useLinksStore();

class Link {

    constructor() {
        this.blank = true;
    }

    start(block, node) {
        this.sx = (node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2);
        this.sy = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.s = block;
    }

    move(event) {
        if (this.blank) {
            this.ex = event.clientX;
            this.ey = event.clientY;
        }
    }

    end(block, node) {
        this.e = block;
        this.ex = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
        this.ey = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.blank = false;
    }
}


function startLink(event) {
    linksStore.links.push(new Link());
    linksStore.links.at(-1).start(button, event.target);
}

function endLink(event) {
    linksStore.links.at(-1).end(button, event.target)
    console.log(linksStore.links)
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

            // let filtered = linksStore.links.filter((link) => link.)

            for (let link of linksStore.links) {
                if (link.s == button) {
                    const node = event.target.closest('.root').querySelector(".node");
                    link.sx = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
                    link.sy = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
                }

                if (link.e == button) {
                    const node = event.target.closest('.root').querySelector(".node");

                    link.ex = node.getBoundingClientRect().x + node.getBoundingClientRect().width / 2;
                    link.ey = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
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
        <div class="node top"></div>
        <div class="node bottom"></div>
        <div class="node right" @mousedown="startLink" @mouseup="endLink"></div>
        <div class="node left"></div>
    </div>
</template>

<style scoped>
.root {
    position: absolute;

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
