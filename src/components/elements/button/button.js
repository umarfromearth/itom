
export default class Button {

    constructor(text) {
        this.text = "click me";

        this.name = this.generateRandomName();

        this.properties = {
            size: {
                width: 200,
                height: 200,
            }
        }
    }

    generateRandomName() {
        return Array(10).fill(null).map(() => String.fromCharCode(((Math.floor(Math.random() * 26)) + 1) + 96)).join("")
    }

}