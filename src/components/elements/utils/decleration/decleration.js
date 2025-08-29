export class Decleration {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    compile() {
        return `${this.name}: ${this.value};`
    }
}