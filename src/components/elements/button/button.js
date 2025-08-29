import { Decleration } from "../utils/decleration/decleration";
import { Ruleset } from "../utils/ruleset/ruleset";
import { State } from "../utils/state/state";

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
            "global":
                new State(this.name, { ".% button": { "width": "100px", "height": "100px" } }),

            "default":
                new State(this.name, { ".% button": { "width": "200px", "height": "200px" } })
        };

    }



    css() {
        return this.states.global.compile() + this.states[this.activeState].compile();
    }
}



// class State {
//     constructor(state) {
//         let { width, height } = state;
//         [this.width, this.height] = [width, height];
//     }

//     compile() {
//         return `width: ${this.width}px; height: ${this.height}px;`;
//     }

// }

// export class ChangeState {
//     constructor({ button, operation, element, state }) {
//         [this.button, this.operation, this.element, this.state] = [button, operation, element, state];
//     }

//     compile() {
//         return `
//             .${this.element.name}{
//                 animation: change-state-${this.element.name} 1ms;
//                 animation-fill-mode: forwards;
//                 animation-play-state: paused;
//             }

//             .editing-canvas:has(.${this.button.name}:active) .${this.element.name}{
//                 animation-play-state: running;
//             }

//             @keyframes change-state-${this.element.name}{
//                 to{
//                     ${this.element.states[this.state].compile()}
//                 }
//             }
//         `
//     }
// }
