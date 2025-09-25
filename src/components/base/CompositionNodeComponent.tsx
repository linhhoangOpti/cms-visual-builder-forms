import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import TextboxElementComponent from '../elements/TextboxElementComponent'
import TextareaElementComponent from '../elements/TextareaElementComponent'
import SelectionElementComponent from '../elements/SelectionElementComponent'
import SubmitElementComponent from '../elements/SubmitElementComponent'
import ParagraphElementComponent from '../elements/ParagraphElementComponent'
import { DependencyManager } from '@/dependency/DependencyManager'

import { create } from 'zustand'
import axios from 'axios'

export const CompositionComponentNodeFragment = graphql(/* GraphQL */ `
fragment compositionComponentNode on CompositionComponentNode {
    key
    component {
        _metadata {
            types
        }
      	...textboxElement
        ...textareaElement
        ...selectionElement
        ...submitElement
        ...paragraphElement
    }
}
`)

const CompositionComponentNodeComponent = (props: {
    compositionComponentNode: FragmentType<typeof CompositionComponentNodeFragment>,
    formState?: any,
    dependencyManager?: DependencyManager
}) => {
    const compositionComponentNode = useFragment(CompositionComponentNodeFragment, props.compositionComponentNode)
    const component = compositionComponentNode.component
    const dependant = component as any;

    const [visible, onChange] = props.dependencyManager?.registerComponent(
        (props.compositionComponentNode as any).key,
        dependant.Conditions,
        dependant.SatisfiedAction,
        dependant.ConditionCombination,
        dependant.Label
    ) || [true, () => {}];

    const onSubmit = (formState: any) => {
        
        const filtered = props.dependencyManager?.filterInactiveElements(formState) || formState;
        console.log(filtered);

        axios.post((window as any).submitUrl, filtered)
        .then(response => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });

    };

    switch (component?.__typename) {
        case "OptiFormsTextboxElement":
            return <TextboxElementComponent textboxElement={component} formState={props.formState} onChange={onChange} visible={visible} />
        case "OptiFormsTextareaElement":
            return <TextareaElementComponent textareElement={component} formState={props.formState} onChange={onChange} visible={visible} />
        case "OptiFormsSelectionElement":
            return <SelectionElementComponent selectionElement={component} formState={props.formState} onChange={onChange} visible={visible}/>
        case "OptiFormsSubmitElement":
            return <SubmitElementComponent submitElement={component} formState={props.formState} onSubmit={onSubmit}/>
        case "ParagraphElement":
            return <ParagraphElementComponent paragraphElement={component} />
        default:
            console.log(`Unknown component type: ${component?.__typename}`);
            return <>NotImplementedException</>
    }
}

export default CompositionComponentNodeComponent