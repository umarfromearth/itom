<script setup>
import { reactive, ref } from 'vue';
import Binding from './Binding.vue';
import { useLayersStore } from '@/stores/global/layersStore';

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

const links = reactive([]);

const layersStore = useLayersStore();

// class Link {

//     constructor() {
//         this.blank = true;
//     }

//     start(event) {
//         this.sx = event.clientX;
//         this.sy = event.clientY;
//         this.s = event.target;
//     }

//     move(event) {
//         if (this.blank) {
//             this.ex = event.clientX;
//             this.ey = event.clientY;
//         }
//     }

//     end(event) {
//         this.e = event.target;
//         this.blank = false;

//     }
// }


// function start(event) {
//     links.push(new Link())
//     links.at(-1).start(event)
// }

// function move(event) {
//     if (links.length > 0)
//         links.at(-1).move(event);
// }

// function create(event) {
//     links.at(-1).end(event)

//     console.log(links)
// }

function move(event) {
    const snap = 20;
    let target = event.target.closest(".node");

    if (target) {
        let clickX = event.clientX - target.getBoundingClientRect().x;
        let clickY = event.clientY - target.getBoundingClientRect().y;

        document.onmousemove = function (e) {
            target.style.left = ((e.clientX - clickX)) - ((e.clientX - clickX) % snap) + "px";
            target.style.top = ((e.clientY - clickY)) - ((e.clientY - clickY) % snap) + "px";

            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }
    }
}

</script>

<template>
    <div class="logic-canvas" @mousedown="move">
        <div class="editor">
            <svg xmlns='https://www.w3.org/2000/svg' v-for="link in links" :width="link.ex - link.sx"
                :height="link.ey - link.sy" :style="{ left: link.sx + 'px', top: link.sy + 'px' }">
                <path :d="'M 0 0 ' + 'L ' + (link.ex - link.sx) + ' ' + (link.ey - link.sy)" stroke="black" />
            </svg>
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" />
        </div>

    </div>
</template>

<style scoped>
.logic-canvas {
    width: 70%;
    overflow: auto;
}

.editor {
    /* width: 2000px; */
    height: 100%;
    background: grey;
    display: flex;
    align-items: center;
    padding: 40px;
}

svg {
    position: absolute;
    left: 0;
    top: 0;
}
</style>