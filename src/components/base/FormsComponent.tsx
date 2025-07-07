import React, { FC, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import { onContentSaved } from "@/helpers/onContentSaved";
import { RenderCompositionNode } from './VisualBuilderComponent';

export const Forms = graphql(/* GraphQL */ `
query Forms($key: String, $version: String) {
  OptiFormsContainerData(where: {
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

`)

interface FormsProps {
    contentKey?: string;
    version?: string;
}

const FormsComponent: FC<FormsProps> = ({ version, contentKey }) => {
    const variables: Record<string, unknown> = {};
    if (version) {
        variables.version = version;
    }

    if (contentKey) {
        variables.key = contentKey;
    }

    const { data, refetch } = useQuery(Forms, {
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

    const forms = data?.OptiFormsContainerData?.items;
    if (!forms) {
        return null;
    }

    const form: any = forms[forms.length - 1];
    if (!form) {
        return null;
    }

    return (
        <div className="relative w-lg flex-1 vb:outline">
            <div className="relative w-lg flex-1 vb:outline">
                {form?.composition?.grids?.map((grid: any) =>
                    <div key={grid.key} className="relative w-lg flex flex-col flex-nowrap justify-start vb:grid"
                        data-epi-block-id={grid.key}>
                        {RenderCompositionNode(grid)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FormsComponent