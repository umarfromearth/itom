
export default class Button {

    constructor(text) {
        this.text = "click me";

        this.name = this.generateRandomName();

        this.activeState = "default";

        this.states = {
            default: {
                properties: {
                    size: {
                        width: 200,
                        height: 200,
                    }
                }
            },
            ticked: {
                properties: {
                    size: {
                        width: 300,
                        height: 300,
                    }
                }
            },
            transformed: {
                properties: {
                    size: {
                        width: 700,
                        height: 500,
                    }
                }
            }
        }

    }

    generateRandomName() {
        return Array(10).fill(null).map(() => String.fromCharCode(((Math.floor(Math.random() * 26)) + 1) + 96)).join("")
    }

    css() {
        let compiled = `.${this.name}{`;
        for (let property of Object.keys(this.states[this.activeState].properties)) {
            let decleration = "";
            if (property == "size") {
                decleration = `width: ${this.states[this.activeState].properties.size.width}px; height: ${this.states[this.activeState].properties.size.height}px`;
            }
            compiled += decleration;
        }
        return compiled + "}";
    }

}