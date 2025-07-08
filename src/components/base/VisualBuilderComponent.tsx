import React, { FC, useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import CompositionNodeComponent from './CompositionNodeComponent'
import { onContentSaved } from "@/helpers/onContentSaved";
import FormsComponent from './FormsComponent';

export const VisualBuilder = graphql(/* GraphQL */ `
query VisualBuilder($key: String, $version: String) {
  _Experience(where: {
      _metadata: { key: { eq: $key } }
      _or: { _metadata: { version: { eq: $version } } }
    }) {
    items {      
      composition {
        grids: nodes {
          ... on CompositionStructureNode {
            key
            __typename
            displayName
            nodeType
            layoutType
            component {
              	..._IComponent
            }
            nodes: nodes {
              ... on CompositionStructureNode {
                key
                __typename
                displayName
                nodeType
                layoutType
                nodes: nodes {
                  ... on CompositionStructureNode {
                    key
                    __typename
                    displayName
                    nodeType
                    layoutType
                    nodes: nodes {
                      ...compositionComponentNode
                      ... on CompositionStructureNode {
                        key
                        __typename
                        displayName
                        nodeType
                        layoutType
                        nodes: nodes {
                          ...compositionComponentNode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      _metadata {
        key
        version,        
      }
    }
  }
}

fragment _IComponent on _IComponent {
  __typename
  ...FormContainerData
}

fragment FormContainerData on OptiFormsContainerData {
    SubmitConfirmationMessage
    ResetConfirmationMessage
    SubmitUrl {
        type
        default
        hierarchical
        internal
        graph
        base
    }
    Title
    Description
    ShowSummaryMessageAfterSubmission
}
`)

interface VisualBuilderProps {
    contentKey?: string;
    version?: string;
}

const VisualBuilderComponent: FC<VisualBuilderProps> = ({ version, contentKey }) => {
    const formState: any = {};
    const variables: Record<string, unknown> = {};
    if (version) {
        variables.version = version;
    }

    if (contentKey) {
        variables.key = contentKey;
    }

    const { data, refetch } = useQuery(VisualBuilder, {
        variables: variables,
        notifyOnNetworkStatusChange: true,
    });

    useEffect(() => {
        onContentSaved(_ => {
            const contentIdArray = _.contentLink.split('_')
            if (contentIdArray.length > 1) {
                version = contentIdArray[contentIdArray.length - 1]
                variables.version = version;
            }
            refetch(variables);
        })
    }, []);

    const experiences = data?._Experience?.items;
    if (!experiences) {
        return null;
    }

    if (data?._Experience?.items?.length === 0) {
        return <FormsComponent version={version} contentKey={contentKey} />;
    }

    const experience: any = experiences[experiences.length - 1];

    if (!experience) {
        return null;
    }

    return (
        <div className="relative w-lg flex-1 vb:outline">
            <div className="relative w-lg flex-1 vb:outline">
                {experience?.composition?.grids?.map((grid: any) =>
                    <div key={grid.key} className="relative w-lg flex flex-col flex-nowrap justify-start vb:grid"
                        data-epi-block-id={grid.key}>
                        {RenderCompositionNode(grid, formState)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VisualBuilderComponent

export const RenderCompositionNode = (node: any, formState?: any): JSX.Element | null => {
    if (!node || !node.__typename) {
        return null;
    }
    const { layoutType } = node;
    if (layoutType === "form") {
        // window.submitUrl = node.component.SubmitUrl.default;
    }

    // Handle CompositionStructureNode with different nodeTypes
    if (node.__typename === "CompositionStructureNode") {
        const { key, nodeType, nodes } = node;

        // Switch based on nodeType
        switch (nodeType) {
            case "section":
                return (
                    <div key={key} className="flex flex-col vb:section" data-epi-block-id={key}>
                        {nodes?.map((childNode: any) => RenderCompositionNode(childNode, formState))}
                    </div>
                );

            case "step":
                return (
                    <div key={key} className="flex flex-col vb:step" data-epi-block-id={key}>
                        {nodes?.map((childNode: any) => RenderCompositionNode(childNode, formState))}
                    </div>
                );

            case "row":
                return (
                    <div key={key} className="flex flex-row flex-wrap justify-start vb:row gap-4" data-epi-block-id={key}>
                        {nodes?.map((childNode: any) => RenderCompositionNode(childNode, formState))}
                    </div>
                );

            case "column":
                return (
                    <div key={key} className="flex-1 flex flex-col flex-nowrap justify-start vb:col" data-epi-block-id={key}>
                        {nodes?.map((childNode: any) => RenderCompositionNode(childNode, formState))}
                    </div>
                );

            default:
                // Handle any other nodeType or fallback to generic structure
                return (
                    <div key={key} className="flex flex-col vb:generic" data-epi-block-id={key}>
                        {nodes?.map((childNode: any) => RenderCompositionNode(childNode, formState))}
                    </div>
                );
        }
    }

    // Handle CompositionComponentNode (leaf elements)
    if (node.__typename === "CompositionComponentNode" || node.component) {
        return (
            <div key={node.key} data-epi-block-id={node.key}>
                <CompositionNodeComponent compositionComponentNode={node} formState={formState}/>
            </div>
        );
    }

    // Fallback for unknown node types
    return null;
};
