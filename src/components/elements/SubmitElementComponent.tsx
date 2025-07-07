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
    formState?: any
}) => {
    const node = useFragment(SubmitElementComponentNodeFragment, props.submitElement)

    return (
        <>
            <div><br /></div>
            <Button onClick={(e) => {
                console.log(props.formState)
                axios.post(window.submitUrl || 'https://localhost:7207/api/formsubmission', props.formState)
                .then(response => {
                    alert('Form submitted successfully!');
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                });
            }}>
                {node.Label}
            </Button>
        </>
    )
}

export default SubmitElementComponent