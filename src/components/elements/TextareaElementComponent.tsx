import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'
import { isRequiredValidator } from '@/helpers/validatorHelper'

export const TextareaComponentNodeFragment = graphql(/* GraphQL */ `
fragment textareaElement on OptiFormsTextareaElement {
  Label
  Tooltip
  Placeholder
  AutoComplete
  PredefinedValue
  Validators
}
`)

const TextareaElementComponent = (props: {
    textareElement: FragmentType<typeof TextareaComponentNodeFragment>,
    formState?: any
}) => {
    const node = useFragment(TextareaComponentNodeFragment, props.textareElement)
    
    return (
        <>
            <Label>{node.Label} <span className='form-element-required'>{isRequiredValidator(node.Validators) ? "*" : ""}</span></Label>
            <Textarea
                autoComplete={node.AutoComplete ? 'on' : 'off'}
                placeholder={node.Placeholder ?? ''}
                onChange={(e) => props.formState[node.Label!] = e.target.value}
            />
        </>
    )
}

export default TextareaElementComponent