import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Textarea } from '../ui/textarea'
import { Label } from '../ui/label'

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
            <div >
                <br />
            </div>
            <Textarea
                autoComplete={node.AutoComplete ? 'on' : 'off'}
                placeholder={node.Placeholder ?? ''}
                onChange={(e) => props.formState[node.Label!] = e.target.value}
            />
        </>
    )
}

export default TextareaElementComponent