import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export const TextboxComponentNodeFragment = graphql(/* GraphQL */ `
fragment textboxElement on OptiFormsTextboxElement {
  Label
  Tooltip
  Placeholder
  AutoComplete
  PredefinedValue
  Validators
}
`)

const TextboxElementComponent = (props: {
    textboxElement: FragmentType<typeof TextboxComponentNodeFragment>,
    formState?: any
}) => {
    const node = useFragment(TextboxComponentNodeFragment, props.textboxElement)
    
    return (
        <div data-epi-block-id={node?.key} key={node?.key}>
            <Label>{node.Label}</Label>
            <Input
                type='text'
                autoComplete={node.AutoComplete ? 'on' : 'off'}
                placeholder={node.Placeholder}
                onChange={(e) => props.formState[node.Label] = e.target.value }
            />
        </div>
    )
}

export default TextboxElementComponent