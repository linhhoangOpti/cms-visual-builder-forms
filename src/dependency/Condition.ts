export class Condition {

    DependsOnField: string
    ComparisonOperator: string
    ComparisonValue: string

    constructor(dependsOnField: string, comparisonOperator: string, comparisonValue: string) {
        this.DependsOnField = dependsOnField
        this.ComparisonOperator = comparisonOperator
        this.ComparisonValue = comparisonValue
    }
}