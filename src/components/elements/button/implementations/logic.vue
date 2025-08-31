<script setup>
import { useLinksStore } from '@/stores/global/linksStore';

const { layer: button } = defineProps(["layer"])

const linksStore = useLinksStore();

class Link {

    constructor() {
        this.blank = true;
    }

    start(block, node) {
        this.sx = node.getBoundingClientRect().x;
        this.sy = node.getBoundingClientRect().y;
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
        this.ex = node.getBoundingClientRect().x;
        this.ey = node.getBoundingClientRect().y;
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
    const snap = 20;
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
                    link.sx = event.target.closest('.root').querySelector(".node").getBoundingClientRect().x
                    link.sy = event.target.closest('.root').querySelector(".node").getBoundingClientRect().y
                }

                if (link.e == button) {
                    link.ex = event.target.closest('.root').querySelector(".node").getBoundingClientRect().x
                    link.ey = event.target.closest('.root').querySelector(".node").getBoundingClientRect().y
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
        <div class="node" @mousedown="startLink" @mouseup="endLink"></div>
    </div>
</template>

<style scoped>
.root {
    position: absolute;

    display: flex;
    align-items: center;
}

.logic-block {
    width: 100px;
    height: 100px;
    background: green;
    border: none;
}

.node {
    width: 15px;
    height: 15px;
    background-color: black;
    border-radius: 100%;
    position: absolute;
    right: -7.5px;
}
</style>
