import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import axios from 'axios'

export const SubmitElementComponentNodeFragment = graphql(/* GraphQL */ `
fragment submitElement on OptiFormsSubmitElement {
  Label
  Tooltip
}
`)

const SubmitElementComponent = (props: {
    submitElement: FragmentType<typeof SubmitElementComponentNodeFragment>,
    formState?: any,
    onSubmit: (formState: any) => void
}) => {
    const node = useFragment(SubmitElementComponentNodeFragment, props.submitElement)

    return (
        <>
            <div><br /></div>
            <Button onClick={(e) => {
                e.preventDefault();
                props.onSubmit(props.formState);
            }}>
                {node.Label}
            </Button>
        </>
    )
}

export default SubmitElementComponent