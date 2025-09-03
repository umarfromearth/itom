export class EditingCanvas {
    constructor() {
        this.implementations = new Map()
    }

    register(name, render) {
        this.implementations.set(name, render);
    }
}