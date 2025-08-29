export class State {
    constructor(root, rulesets) {
        this.root = root;
        this.rulesets = rulesets;
    }


    compile() {
        let compiled = "";
        let r;
        for (let ruleset of Object.entries(this.rulesets)) {
            let selector = ruleset[0].replace("%", this.root);
            r = selector + "{"
            let d;
            for (let decleration of Object.entries(ruleset[1])) {
                d = decleration[0] + ":" + decleration[1] + ";";
                r += d;
            }
            r += "}";
            compiled += r;
        }
        return compiled;
    }

}


// rulsets, components

// rulsets = {this.components.button: {width: 100px; height: 100px}}