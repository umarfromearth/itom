export class ElementsPanel {
    static name = "button"
    constructor() {
        this.registry = [];
    }

    register(element) {
        this.registry.push(element);
    }
}