export class LogicsPanel {
    constructor() {
        this.implementations = new Map()
    }

    register(name, render) {
        this.implementations.set(name, render);
    }
}