import { Condition } from "./Condition"

export class Dependant {
    constructor() {
    }

    value: any;
    conditions: Condition[] = [];
    satisfiedAction?: string;
    conditionCombination?: string;
    onChange?: (value: any) => void;
    visible: boolean = true;
    setVisible: (key: string, visible: boolean) => void = (key, visible) => { };
}
