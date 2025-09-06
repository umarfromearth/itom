export default class Interaction {
    constructor() {
        this.subInteractions = [];
        this.selectedSubInteraction = null;
    }

    compile() {
        let compiled = '';
        for (let subInteraction of this.subInteractions) {
            compiled += subInteraction.compile();
        }
        return compiled;
    }
}