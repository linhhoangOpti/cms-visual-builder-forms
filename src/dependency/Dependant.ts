import { Condition } from "./Condition"

export class Dependant {
    constructor() {
    }

    value: any;
    label: string = '';
    conditions: Condition[] = [];
    satisfiedAction?: string;
    conditionCombination?: string;
    onChange?: (value: any) => void;
    visible: boolean = true;
    setVisible: (key: string, visible: boolean) => void = (key, visible) => { };

    onVisibleChange: (key: string, visible: boolean) => void = (key, visible) => {
        this.visible = visible;
        this.setVisible(key, visible);
    };
}
