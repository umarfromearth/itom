import ClickTrigger from "@/triggers/types/click";
import { State } from "../utils/state/state";
import ChangeStateAction from "@/actions/change-state";

export default class Button {
    static name = "button";

    constructor(text) {
        this.text = "click me";

        this.name = Array(10)
            .fill(null)
            .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 1 + 96))
            .join("");

        this.activeState = "default";

        this.states = {
            global: new State(this.name, {
                ".% button": { width: "100px", height: "100px" },
            }),

            default: new State(this.name, {
                ".% button": { width: "200px", height: "200px" },
            }),

            ticked: new State(this.name, {
                ".% button": { width: "300px", height: "300px" },
            }),
        };

        this.supportedTriggers = [ClickTrigger];
        this.supportedActions = [ChangeStateAction]
    }

    css() {
        return (
            this.states.global.compile() + this.states[this.activeState].compile()
        );
    }
}
