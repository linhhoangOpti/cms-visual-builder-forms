import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { isRequiredValidator } from '@/helpers/validatorHelper'

export const TextboxComponentNodeFragment = graphql(/* GraphQL */ `
fragment textboxElement on OptiFormsTextboxElement {
  Label
  Tooltip
  Placeholder
  AutoComplete
  PredefinedValue
  Validators
  Conditions {
    DependsOnField
    ComparisonOperator
    ComparisonValue
  }
  SatisfiedAction
  ConditionCombination
}
`)

const TextboxElementComponent = (props: {
    textboxElement: FragmentType<typeof TextboxComponentNodeFragment>,
    formState?: any,
    visible: boolean,
    onChange?: (value: any) => void
}) => {
    const node = useFragment(TextboxComponentNodeFragment, props.textboxElement)

    return (
        props.visible &&
        <div>
            <Label>{node.Label} <span className='form-element-required'>{isRequiredValidator(node.Validators) ? "*" : ""}</span></Label>
            <Input
                type='text'
                autoComplete={node.AutoComplete ? 'on' : 'off'}
                placeholder={node.Placeholder ?? ''}
                onChange={(e) => {
                    props.formState[node.Label!] = e.target.value;
                    props.onChange?.(e.target.value);
                }}
            />
        </div>
    )
}

export default TextboxElementComponent