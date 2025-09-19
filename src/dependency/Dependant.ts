import { Condition } from "./Condition"

export class Dependant {
    constructor(conditions: Condition[] = [], satisfiedAction: string = '', conditionCombination: string = '', onChange: (value: any) => void, visible: boolean = true, setVisible: (key: string, visible: boolean) => void = (by) => { }) {
        this.conditions = conditions;
        this.satisfiedAction = satisfiedAction;
        this.conditionCombination = conditionCombination;
        this.onChange = onChange;
        this.visible = visible;
        this.setVisible = setVisible;
    }

    value: any;
    conditions: Condition[];
    satisfiedAction?: string;
    conditionCombination?: string;
    onChange?: (value: any) => void;
    visible: boolean = true;
    setVisible: (key: string, visible: boolean) => void = (key, visible) => { };
}
