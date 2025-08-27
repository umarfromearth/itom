
export default class ToggleButton {

    static name = "toggle-button"

    constructor(text) {
        this.text = "click me";

        this.name = Array(10).fill(null).map(() => String.fromCharCode(((Math.floor(Math.random() * 26)) + 1) + 96)).join("");

        this.activeState = "default";

        this.states = {
            default: new State({
                width: 200,
                height: 200,
            }),
            ticked: new State({
                width: 300,
                height: 300,
            }),
        }

        this.actions = {
            click: [
            ]
        }

    }

    css() {

        let compiled = `#${this.name} { ${this.states[this.activeState].compile()} }`;

        for (let action of this.actions.click) {
            compiled += action.compile();
        }

        return compiled;

    }

}

class State {
    constructor(state) {
        let { width, height } = state;
        [this.width, this.height] = [width, height];
    }

    compile() {
        return `width: ${this.width}px; height: ${this.height}px`;
    }

}

export class ChangeState {
    constructor({ button, operation, element, state }) {
        [this.button, this.operation, this.element, this.state] = [button, operation, element, state];
    }

    compile() {
        return `
            .${this.element.name}{
                animation: change-state-${this.element.name} 1ms;
                animation-fill-mode: forwards;
                animation-play-state: paused; 
            }

            .editing-canvas:has(.${this.button.name}:active) .${this.element.name}{
                animation-play-state: running;
            }
                
            @keyframes change-state-${this.element.name}{
                to{
                    ${this.element.states[this.state].compile()}
                }
            }
        `
    }
}