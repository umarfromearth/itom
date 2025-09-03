export class State {
    constructor(root, rulesets) {
        this.root = root;
        this.rulesets = rulesets;
    }

    compile() {
        return this.compileRulesets(this.rulesets)
    }

    compileRulesets(rulsets) {
        let compiled = '';
        for (let [selector, declerations] of Object.entries(rulsets)) {
            compiled += this.compileRuleset(selector, declerations)
        }
        return compiled;
    }

    compileRuleset(selector, declerations) {
        return this.normalizeSelector(this.root, selector) + " {" + this.compileDeclerations(declerations) + "\n}\n\n";
    }

    normalizeSelector(root, selector) {
        return selector.replace("%", root);
    }

    compileDeclerations(declerations) {
        let compiled = '';
        for (let [name, value] of Object.entries(declerations)) {
            compiled += this.compileDecleration(name, value);
        }
        return compiled;
    }

    compileDecleration(name, value) {
        return `\n\t${name}: ${value};`;
    }

}
