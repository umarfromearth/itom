export default class ChangeStateAction {
    constructor(happensOn) {
        this.happensOn = happensOn;
        this.newState = "default";
    }

    compile() {
        let compiled = [];
        for (let [selector, declerations] of Object.entries(this.happensOn.states[this.newState].rulesets)) {
            compiled.push(selector.replace(".%", '') + "{" + this.happensOn.states[this.newState].compileDeclerations(declerations) + "}")
        }
        return compiled;
    }
}