/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nfragment compositionComponentNode on CompositionComponentNode {\n    key\n    component {\n        _metadata {\n            types\n        }\n      \t...textboxElement\n        ...textareaElement\n        ...selectionElement\n        ...submitElement\n    }\n}\n": types.CompositionComponentNodeFragmentDoc,
    "\nquery VisualBuilder($key: String, $version: String) {\n  _Experience(where: {\n      _metadata: { key: { eq: $key } }\n      _or: { _metadata: { version: { eq: $version } } }\n    }) {\n    items {      \n      composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                steps: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    rows: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        columns: nodes {\n                          ... on CompositionStructureNode {\n                            key\n                            elements: nodes {\n                              ...compositionComponentNode\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n      _metadata {\n        key\n        version,        \n      }\n    }\n  }\n}\n\n": types.VisualBuilderDocument,
    "\nfragment selectionElement on OptiFormsSelectionElement {\n  Label\n  Tooltip\n  AutoComplete\n  Validators\n  Options\n}\n": types.SelectionElementFragmentDoc,
    "\nfragment submitElement on OptiFormsSubmitElement {\n  Label\n  Tooltip\n}\n": types.SubmitElementFragmentDoc,
    "\nfragment textareaElement on OptiFormsTextareaElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n": types.TextareaElementFragmentDoc,
    "\nfragment textboxElement on OptiFormsTextboxElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n": types.TextboxElementFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment compositionComponentNode on CompositionComponentNode {\n    key\n    component {\n        _metadata {\n            types\n        }\n      \t...textboxElement\n        ...textareaElement\n        ...selectionElement\n        ...submitElement\n    }\n}\n"): (typeof documents)["\nfragment compositionComponentNode on CompositionComponentNode {\n    key\n    component {\n        _metadata {\n            types\n        }\n      \t...textboxElement\n        ...textareaElement\n        ...selectionElement\n        ...submitElement\n    }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery VisualBuilder($key: String, $version: String) {\n  _Experience(where: {\n      _metadata: { key: { eq: $key } }\n      _or: { _metadata: { version: { eq: $version } } }\n    }) {\n    items {      \n      composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                steps: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    rows: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        columns: nodes {\n                          ... on CompositionStructureNode {\n                            key\n                            elements: nodes {\n                              ...compositionComponentNode\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n      _metadata {\n        key\n        version,        \n      }\n    }\n  }\n}\n\n"): (typeof documents)["\nquery VisualBuilder($key: String, $version: String) {\n  _Experience(where: {\n      _metadata: { key: { eq: $key } }\n      _or: { _metadata: { version: { eq: $version } } }\n    }) {\n    items {      \n      composition {\n            grids: nodes {\n              ... on CompositionStructureNode {\n                key\n                steps: nodes {\n                  ... on CompositionStructureNode {\n                    key\n                    rows: nodes {\n                      ... on CompositionStructureNode {\n                        key\n                        columns: nodes {\n                          ... on CompositionStructureNode {\n                            key\n                            elements: nodes {\n                              ...compositionComponentNode\n                            }\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          }\n      _metadata {\n        key\n        version,        \n      }\n    }\n  }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment selectionElement on OptiFormsSelectionElement {\n  Label\n  Tooltip\n  AutoComplete\n  Validators\n  Options\n}\n"): (typeof documents)["\nfragment selectionElement on OptiFormsSelectionElement {\n  Label\n  Tooltip\n  AutoComplete\n  Validators\n  Options\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment submitElement on OptiFormsSubmitElement {\n  Label\n  Tooltip\n}\n"): (typeof documents)["\nfragment submitElement on OptiFormsSubmitElement {\n  Label\n  Tooltip\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment textareaElement on OptiFormsTextareaElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n"): (typeof documents)["\nfragment textareaElement on OptiFormsTextareaElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nfragment textboxElement on OptiFormsTextboxElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n"): (typeof documents)["\nfragment textboxElement on OptiFormsTextboxElement {\n  Label\n  Tooltip\n  Placeholder\n  AutoComplete\n  PredefinedValue\n  Validators\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;