import React, { FC, useEffect } from 'react'
import { useQuery } from '@apollo/client'

import { graphql } from '@/graphql'
import CompositionNodeComponent from './CompositionNodeComponent'
import { onContentSaved } from "@/helpers/onContentSaved";
import { RenderSectionView } from './VisualBuilderComponent';

export const Forms = graphql(/* GraphQL */ `
query Forms($key: String, $version: String) {
  OptiFormsContainerData(where: {
      _metadata: { key: { eq: $key } }
      _or: { _metadata: { version: { eq: $version } } }
    }) {
    items {      
      composition {
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
              {RenderSectionView(form?.composition?.steps[0].rows)}
            </div>
        </div>
    )
}

export default FormsComponent