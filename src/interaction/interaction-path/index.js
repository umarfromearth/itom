import Interaction from "..";

export default class InteractionPath {

    constructor() {
        this.blank = true;

        this.triggerHappensOn = null;
        this.actionHappensOn = null;

        this.startCoords = { x: null, y: null };
        this.endCoords = { x: null, y: null };

        this.interaction = new Interaction();
    }

    startPath(layer, node) {
        const boundingClientRect = node.getBoundingClientRect();
        const nodeCenterX = boundingClientRect.x + node.getBoundingClientRect().width / 2;
        const nodeCenterY = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.startCoords = { x: nodeCenterX, y: nodeCenterY };

        // interaction starting layer
        this.triggerHappensOn = layer;

        document.onmousemove = (event) => {
            this.movePath(event);
        }
    }

    movePath(event) {
        if (this.blank)
            this.endCoords = { x: event.clientX, y: event.clientY }
    }

    endPath(layer, node) {
        const boundingClientRect = node.getBoundingClientRect();
        const nodeCenterX = boundingClientRect.x + node.getBoundingClientRect().width / 2;
        const nodeCenterY = node.getBoundingClientRect().y + node.getBoundingClientRect().height / 2;
        this.endCoords = { x: nodeCenterX, y: nodeCenterY };

        // interaction ending layer
        this.actionHappensOn = layer;

        this.blank = false;

        document.onmousemove = null;
    }

}