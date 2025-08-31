<script setup>
const { layer: button } = defineProps(["layer"])

function move(event) {
    const snap = 20;
    let target = event.target.closest(".root");

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
    <div class="root">
        <button class="logic-block" @mousedown="move"></button>
        <div class="node"></div>
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
