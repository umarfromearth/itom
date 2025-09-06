export default class SubInteraction {
    constructor(trigger, action) {
        this.trigger = trigger;
        this.action = action;
    }

    compile() {
        let compiled = `.${this.trigger.happensOn.name} button{ background: red;}\n`;
        for (let ca of this.action.compile()) {
            compiled += `.${this.trigger.happensOn.name}:has(button:active) ` + ca;
        }
        return compiled;
    }
}