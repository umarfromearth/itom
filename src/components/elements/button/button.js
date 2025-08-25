
export default class Button {

    constructor(text) {
        this.text = "click me";

        this.name = this.generateRandomName();

        this.states = {
            default: {
                properties: {
                    size: {
                        width: 200,
                        height: 200,
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
        for (let property of Object.keys(this.states.default.properties)) {
            let decleration = "";
            if (property == "size") {
                decleration = `width: ${this.states["default"].properties.size.width}px; height: ${this.states["default"].properties.size.height}px`;
            }
            compiled += decleration;
        }
        return compiled + "}";
    }

}