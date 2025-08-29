export class Ruleset {
    constructor(selector, declerations) {
        this.selector = selector;
        this.declerations = declerations;
    }

    compile() {
        let compiled = `.${this.selector}{`
        for (let decleration of this.declerations) {
            compiled += decleration.compile();
        }
        return compiled + "}";
    }
}