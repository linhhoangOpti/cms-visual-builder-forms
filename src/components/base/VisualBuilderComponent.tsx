import React, { FC, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import CompositionNodeComponent from './CompositionNodeComponent'
import { onContentSaved } from "@/helpers/onContentSaved";

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
                steps: nodes {
                  ... on CompositionStructureNode {
                    key
                    rows: nodes {
                      ... on CompositionStructureNode {
                        key
                        columns: nodes {
                          ... on CompositionStructureNode {
                            key
                            elements: nodes {
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

interface VisualBuilderProps {
  contentKey?: string;
  version?: string;
}

const VisualBuilderComponent: FC<VisualBuilderProps> = ({ version, contentKey }) => {
    const variables: Record<string, unknown> = {};
    if (version) {
        variables.version = version;
    }

    if (contentKey) {
        variables.key = contentKey;
    }

    const { data, refetch } = useQuery(VisualBuilder, { 
      variables: variables,
      notifyOnNetworkStatusChange: true, });

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

    const experience: any = experiences[experiences.length - 1];

    // console.log(experience);

    if (!experience) {
        return null;
    }

    return (
        <div className="relative w-full flex-1 vb:outline">
            <div className="relative w-full flex-1 vb:outline">
                {experience?.composition?.grids?.map((grid: any) =>
                    <div key={grid.key} className="relative w-full flex flex-col flex-nowrap justify-start vb:grid"
                         data-epi-block-id={grid.key}>
                        {grid.steps[0].rows?.map((row: any) =>
                            <div key={row.key} className="flex-1 flex flex-row flex-nowrap justify-start vb:row gap-4">
                                {row.columns?.map((column: any) => (
                                    <div className="flex-1 flex flex-col flex-nowrap justify-start vb:col" key={column.key}>
                                        {column.elements?.map((element: any) =>
                                            <div data-epi-block-id={element?.key} key={element?.key}>
                                                <CompositionNodeComponent compositionComponentNode={element}/>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>)}
                    </div>
                )}
            </div>
        </div>
    )
}

export default VisualBuilderComponent