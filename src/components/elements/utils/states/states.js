import { State } from "../state/state";
import { Ruleset } from "../ruleset/ruleset";

export class States {
    constructor(states) {
        console.log(states)
        this.states = new Map(states);
    }
}