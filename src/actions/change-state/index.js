export default class ChangeStateAction {
    constructor(happensOn) {
        this.happensOn = happensOn;
        this.newState = "default";
    }
}