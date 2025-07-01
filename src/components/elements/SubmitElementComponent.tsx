import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export const SubmitElementComponentNodeFragment = graphql(/* GraphQL */ `
fragment submitElement on OptiFormsSubmitElement {
  Label
  Tooltip
}
`)

const TextboxElementComponent = (props: {
    submitElement: FragmentType<typeof SubmitElementComponentNodeFragment>
}) => {
    const node = useFragment(SubmitElementComponentNodeFragment, props.submitElement)

    return (
        <>
            <div><br /></div>
            <Button>{node.Label}</Button>
        </>
    )
}

export default TextboxElementComponent