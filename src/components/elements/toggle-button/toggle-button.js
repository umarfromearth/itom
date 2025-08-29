import { State } from "../utils/state/state";

export default class ToggleButton {
    static name = "toggle-button";

    constructor(text) {
        this.text = "click me";

        this.name = Array(10)
            .fill(null)
            .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 1 + 96))
            .join("");

        this.activeState = "default";

        this.states = {
            global: new State(this.name, {
                ".% input": { display: "none" },
                ".% label": { "display": "block", width: "200px", height: "200px", border: "5px solid black" },
                ".%:has(input:checked) label": { background: "orange" }
            }),

            default: new State(this.name, {
            }),
        };
    }

    css() {
        return (
            this.states.global.compile() + this.states[this.activeState].compile()
        );
    }
}
