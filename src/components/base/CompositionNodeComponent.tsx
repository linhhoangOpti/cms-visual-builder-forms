import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import TextboxElementComponent from '../elements/TextboxElementComponent'
import TextareaElementComponent from '../elements/TextareaElementComponent'
import SelectionElementComponent from '../elements/SelectionElementComponent'
import SubmitElementComponent from '../elements/SubmitElementComponent'
import ParagraphElementComponent from '../elements/ParagraphElementComponent'
import { DependencyManager } from '@/dependency/DependencyManager'

import { create } from 'zustand'

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

    const [visible, onChange] = props.dependencyManager?.registerComponent((props.compositionComponentNode as any).key, (component as any).Conditions) ?? [true, () => {}]
    
    switch (component?.__typename) {
        case "OptiFormsTextboxElement":
            return <TextboxElementComponent textboxElement={component} formState={props.formState} onChange={onChange} visible={visible} />
        case "OptiFormsTextareaElement":
            return <TextareaElementComponent textareElement={component} formState={props.formState}/>
        case "OptiFormsSelectionElement":
            return <SelectionElementComponent selectionElement={component} formState={props.formState}/>
        case "OptiFormsSubmitElement":
            return <SubmitElementComponent submitElement={component} formState={props.formState}/>
        case "ParagraphElement":
            return <ParagraphElementComponent paragraphElement={component} />
        default:
            console.log(`Unknown component type: ${component?.__typename}`);
            return <>NotImplementedException</>
    }
}

export default CompositionComponentNodeComponent