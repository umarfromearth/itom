<script setup>
import { onMounted, reactive, ref, useTemplateRef } from 'vue';
import { useLayersStore } from '@/stores/global/layersStore';

import ButtonLogic from '@/components/elements/button/implementations/logic.vue';

const links = reactive([]);

const layersStore = useLayersStore();


class Link {

    constructor() {
        this.blank = true;
    }

    start(event) {
        this.sx = event.sx - svg.value.getBoundingClientRect().x;
        this.sy = event.sy - svg.value.getBoundingClientRect().y;
        this.s = event.s;
    }

    move(event) {
        if (this.blank) {
            this.ex = event.clientX - svg.value.getBoundingClientRect().x;
            this.ey = event.clientY - svg.value.getBoundingClientRect().y;
        }
    }

    end(event) {
        this.e = event.e;
        this.blank = false;
    }
}

const svg = useTemplateRef("svg");
onMounted(() => {
    console.log(svg.value)
})


function linkStart(event) {
    links.push(new Link())
    links.at(-1).start(event)
}

function linkMove(event) {
    if (links.length > 0)
        links.at(-1).move(event);
}

function linkEnd(event) {
    links.at(-1).end(event)

    console.log(links)
}



</script>

<template>
    <div class="logic-canvas" @mousemove="linkMove">
        <div class="editor">
            <svg xmlns='https://www.w3.org/2000/svg' ref="svg">
                <path v-for="link in links" :d="' M ' + link.sx + ' ' + link.sy + ' L ' + link.ex + ' ' + link.ey"
                    stroke="black" />
            </svg>
            <component v-for="layer in layersStore.layers" :is="ButtonLogic" @link-start="linkStart" :layer="layer"
                @link-end="linkEnd" />
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
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
</style>