import { Condition } from "./Condition";
import { Dependant } from "./Dependant";
import { create } from 'zustand'

interface VisibleState {
    visibility: Map<string, boolean>;
    setVisible: (key: string, visible: boolean) => void
}

const useBearStore = create<VisibleState>()((set) => ({
    visibility: new Map<string, boolean>(),
    setVisible: (key, visible) => set((state) => {
        state.visibility.set(key, visible);
        return { visibility: new Map(state.visibility) };
    })
}))

export class DependencyManager {
    dependants: Map<string, Dependant> = new Map<string, Dependant>()

    registerComponent(key: string, conditions: Condition[] = [], satisfiedAction: string = '', conditionCombination: string = ''): [boolean, (value: any) => void] {
        const onChange = (value: any) => {
            this.onComponentChange(key, value)
        };

        const { visibility, setVisible } = useBearStore()

        const dependant = new Dependant(conditions, satisfiedAction, conditionCombination, onChange, true, setVisible);
        this.dependants.set(key, dependant);

        return [visibility.get(key) ?? true, onChange];
    }

    onComponentChange(key: string, value: any) {

        const dependant = this.dependants.get(key);
        if (dependant) {
            dependant.value = value;
        }

        // run checks for all dependants
        this.dependants.forEach((dependant, key) => {
            if (dependant.conditions.length == 0) {
                return;
            }

            let allMet = true;
            let anyMet = false;

            for (const condition of dependant.conditions) {
                const dependee = this.dependants.get(condition.DependsOnField);
                if (this._isConditionMet(condition, dependee?.value)) {
                    anyMet = true;
                }
                else {
                    allMet = false;
                }
            }
            if (dependant.conditionCombination === "All") {
                if (dependant.satisfiedAction === "Show") {
                    dependant.setVisible(key, allMet);
                } else {
                    dependant.setVisible(key, allMet);
                }
            } else{
                if (dependant.satisfiedAction === "Show") {
                    dependant.setVisible(key, anyMet);
                } else {
                    dependant.setVisible(key, anyMet);
                }
            }
        });
    }

    _isConditionMet(condition: Condition, value: any): boolean {
        switch (condition.ComparisonOperator) {
            case "MatchRegularExpression":
                const regex = new RegExp(condition.ComparisonValue);
                return regex.test(value);
            case "Equals":
                return value === condition.ComparisonValue;
            case "NotEquals":
                return value !== condition.ComparisonValue;
            case "Contains":
                return typeof value === 'string' && value.includes(condition.ComparisonValue);
            case "NotContains":
                return typeof value === 'string' && !value.includes(condition.ComparisonValue);
            case "StartsWith":
                return typeof value === 'string' && value.startsWith(condition.ComparisonValue);
            case "EndsWith":
                return typeof value === 'string' && value.endsWith(condition.ComparisonValue);

            default:
                return false;
        }
    }
}