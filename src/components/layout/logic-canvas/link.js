import { watch } from "vue";

export class Link {

    constructor() {
        this.blank = true;
    }

    start(node) {
        this.sx = node.getBoundingClientRect().x;
        this.sy = node.getBoundingClientRect().y;

    }

    move(event) {
        if (this.blank) {
            this.ex = event.clientX;
            this.ey = event.clientY;
        }
    }

    end(node) {
        this.ex = node.getBoundingClientRect().x;
        this.ey = node.getBoundingClientRect().y;

        this.blank = false;
    }
}