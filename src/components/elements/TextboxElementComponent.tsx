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
    textboxElement: FragmentType<typeof TextboxComponentNodeFragment>
}) => {
    const node = useFragment(TextboxComponentNodeFragment, props.textboxElement)
    
    return (
        <>
            <Label>{node.Label}</Label>
            <Input
                type='text'
                autoComplete={node.AutoComplete ? 'on' : 'off'}
            />
        </>
    )
}

export default TextboxElementComponent