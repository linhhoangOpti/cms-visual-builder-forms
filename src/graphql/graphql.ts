/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type BlankExperience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component?: Maybe<_IComponentFacet>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component?: InputMaybe<_IComponentOrderByInput>;
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component?: InputMaybe<_IComponentWhereInput>;
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export enum FactorModifier {
  /** Add 1 to the field value and take the natural logarithm */
  Log = 'LOG',
  /** Do not apply any multiplier to the field value */
  None = 'NONE',
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  Reciprocal = 'RECIPROCAL',
  /** Take the square root of the field value */
  Sqrt = 'SQRT',
  /** Square the field value (multiply it by itself) */
  Square = 'SQUARE'
}

export type FloatFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Float']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Float']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Float']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Float']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Float']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Float']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type GenericMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: 'GenericMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  container?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  createdBy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  lastModifiedBy?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  variation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteContainerArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteCreatedByArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLastModifiedByArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocalesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompletePathArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  container?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  createdBy?: Maybe<Array<Maybe<StringFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  expired?: Maybe<Array<Maybe<DateFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  lastModifiedBy?: Maybe<Array<Maybe<StringFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  locales?: Maybe<Array<Maybe<StringFacet>>>;
  path?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  variation?: Maybe<Array<Maybe<StringFacet>>>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetContainerArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetCreatedByArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetExpiredArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLastModifiedByArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLocalesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPathArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  container?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  createdBy?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  expired?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  lastModifiedBy?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  locales?: InputMaybe<OrderBy>;
  path?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  variation?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  container?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  createdBy?: InputMaybe<StringFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  expired?: InputMaybe<DateFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  lastModifiedBy?: InputMaybe<StringFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  locales?: InputMaybe<StringFilterInput>;
  path?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  variation?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: 'ImageMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsChoiceElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsChoiceElement';
  AllowMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Options?: Maybe<Scalars['JSON']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsChoiceElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsChoiceElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsChoiceElementAutocomplete = {
  __typename?: 'OptiFormsChoiceElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsChoiceElementFacet = {
  __typename?: 'OptiFormsChoiceElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsChoiceElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsChoiceElementOutput = {
  __typename?: 'OptiFormsChoiceElementOutput';
  autocomplete?: Maybe<OptiFormsChoiceElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsChoiceElementFacet>;
  item?: Maybe<OptiFormsChoiceElement>;
  items?: Maybe<Array<Maybe<OptiFormsChoiceElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsChoiceElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsChoiceElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsChoiceElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsCondition = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsCondition';
  ComparisonOperator?: Maybe<Scalars['String']['output']>;
  ComparisonValue?: Maybe<Scalars['String']['output']>;
  DependsOnField?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsCondition_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsCondition_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsConditionAutocomplete = {
  __typename?: 'OptiFormsConditionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsConditionFacet = {
  __typename?: 'OptiFormsConditionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsConditionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsConditionOutput = {
  __typename?: 'OptiFormsConditionOutput';
  autocomplete?: Maybe<OptiFormsConditionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsConditionFacet>;
  item?: Maybe<OptiFormsCondition>;
  items?: Maybe<Array<Maybe<OptiFormsCondition>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsConditionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsConditionProperty = {
  __typename?: 'OptiFormsConditionProperty';
  ComparisonOperator?: Maybe<Scalars['String']['output']>;
  ComparisonValue?: Maybe<Scalars['String']['output']>;
  DependsOnField?: Maybe<Scalars['String']['output']>;
};

export type OptiFormsConditionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsConditionWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsContainerData = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: 'OptiFormsContainerData';
  DependencyRules?: Maybe<Array<Maybe<OptiFormsDependencyRuleProperty>>>;
  Description?: Maybe<Scalars['String']['output']>;
  ResetConfirmationMessage?: Maybe<Scalars['String']['output']>;
  ShowSummaryMessageAfterSubmission?: Maybe<Scalars['Boolean']['output']>;
  SubmitConfirmationMessage?: Maybe<Scalars['String']['output']>;
  SubmitUrl?: Maybe<ContentUrl>;
  Title?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type OptiFormsContainerData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsContainerData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsContainerDataAutocomplete = {
  __typename?: 'OptiFormsContainerDataAutocomplete';
  SubmitUrl?: Maybe<ContentUrlAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type OptiFormsContainerDataFacet = {
  __typename?: 'OptiFormsContainerDataFacet';
  DependencyRules?: Maybe<OptiFormsDependencyRulePropertyFacet>;
  SubmitUrl?: Maybe<ContentUrlFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type OptiFormsContainerDataOrderByInput = {
  DependencyRules?: InputMaybe<OptiFormsDependencyRulePropertyOrderByInput>;
  SubmitUrl?: InputMaybe<ContentUrlOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type OptiFormsContainerDataOutput = {
  __typename?: 'OptiFormsContainerDataOutput';
  autocomplete?: Maybe<OptiFormsContainerDataAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsContainerDataFacet>;
  item?: Maybe<OptiFormsContainerData>;
  items?: Maybe<Array<Maybe<OptiFormsContainerData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsContainerDataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsContainerDataWhereInput = {
  DependencyRules?: InputMaybe<OptiFormsDependencyRulePropertyWhereInput>;
  SubmitUrl?: InputMaybe<ContentUrlWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsContainerDataWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type OptiFormsDependencyRule = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsDependencyRule';
  ConditionCombination?: Maybe<Scalars['String']['output']>;
  Conditions?: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  SatisfiedAction?: Maybe<Scalars['String']['output']>;
  TargetElement?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsDependencyRule_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsDependencyRule_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsDependencyRuleAutocomplete = {
  __typename?: 'OptiFormsDependencyRuleAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsDependencyRuleFacet = {
  __typename?: 'OptiFormsDependencyRuleFacet';
  Conditions?: Maybe<Array<Maybe<StringFacet>>>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};


export type OptiFormsDependencyRuleFacetConditionsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRuleOrderByInput = {
  Conditions?: InputMaybe<OrderBy>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsDependencyRuleOutput = {
  __typename?: 'OptiFormsDependencyRuleOutput';
  autocomplete?: Maybe<OptiFormsDependencyRuleAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsDependencyRuleFacet>;
  item?: Maybe<OptiFormsDependencyRule>;
  items?: Maybe<Array<Maybe<OptiFormsDependencyRule>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsDependencyRuleOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsDependencyRuleProperty = {
  __typename?: 'OptiFormsDependencyRuleProperty';
  ConditionCombination?: Maybe<Scalars['String']['output']>;
  Conditions?: Maybe<Array<Maybe<OptiFormsConditionProperty>>>;
  SatisfiedAction?: Maybe<Scalars['String']['output']>;
  TargetElement?: Maybe<Scalars['String']['output']>;
};

export type OptiFormsDependencyRulePropertyFacet = {
  __typename?: 'OptiFormsDependencyRulePropertyFacet';
  Conditions?: Maybe<Array<Maybe<StringFacet>>>;
};


export type OptiFormsDependencyRulePropertyFacetConditionsArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type OptiFormsDependencyRulePropertyOrderByInput = {
  Conditions?: InputMaybe<OrderBy>;
};

export type OptiFormsDependencyRulePropertyWhereInput = {
  Conditions?: InputMaybe<StringFilterInput>;
};

export type OptiFormsDependencyRuleWhereInput = {
  Conditions?: InputMaybe<StringFilterInput>;
  _and?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsDependencyRuleWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsNumberElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsNumberElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsNumberElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsNumberElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsNumberElementAutocomplete = {
  __typename?: 'OptiFormsNumberElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsNumberElementFacet = {
  __typename?: 'OptiFormsNumberElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsNumberElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsNumberElementOutput = {
  __typename?: 'OptiFormsNumberElementOutput';
  autocomplete?: Maybe<OptiFormsNumberElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsNumberElementFacet>;
  item?: Maybe<OptiFormsNumberElement>;
  items?: Maybe<Array<Maybe<OptiFormsNumberElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsNumberElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsNumberElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsNumberElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsRangeElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsRangeElement';
  Increment?: Maybe<Scalars['Int']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Max?: Maybe<Scalars['Int']['output']>;
  Min?: Maybe<Scalars['Int']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsRangeElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsRangeElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsRangeElementAutocomplete = {
  __typename?: 'OptiFormsRangeElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsRangeElementFacet = {
  __typename?: 'OptiFormsRangeElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsRangeElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsRangeElementOutput = {
  __typename?: 'OptiFormsRangeElementOutput';
  autocomplete?: Maybe<OptiFormsRangeElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsRangeElementFacet>;
  item?: Maybe<OptiFormsRangeElement>;
  items?: Maybe<Array<Maybe<OptiFormsRangeElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsRangeElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsRangeElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsRangeElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsResetElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsResetElement';
  Label?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsResetElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsResetElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsResetElementAutocomplete = {
  __typename?: 'OptiFormsResetElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsResetElementFacet = {
  __typename?: 'OptiFormsResetElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsResetElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsResetElementOutput = {
  __typename?: 'OptiFormsResetElementOutput';
  autocomplete?: Maybe<OptiFormsResetElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsResetElementFacet>;
  item?: Maybe<OptiFormsResetElement>;
  items?: Maybe<Array<Maybe<OptiFormsResetElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsResetElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsResetElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsResetElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsSelectionElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSelectionElement';
  AllowMultiSelect?: Maybe<Scalars['Boolean']['output']>;
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Options?: Maybe<Scalars['JSON']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSelectionElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsSelectionElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsSelectionElementAutocomplete = {
  __typename?: 'OptiFormsSelectionElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSelectionElementFacet = {
  __typename?: 'OptiFormsSelectionElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSelectionElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSelectionElementOutput = {
  __typename?: 'OptiFormsSelectionElementOutput';
  autocomplete?: Maybe<OptiFormsSelectionElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsSelectionElementFacet>;
  item?: Maybe<OptiFormsSelectionElement>;
  items?: Maybe<Array<Maybe<OptiFormsSelectionElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSelectionElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSelectionElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsSelectionElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsSubmitElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsSubmitElement';
  Label?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsSubmitElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsSubmitElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsSubmitElementAutocomplete = {
  __typename?: 'OptiFormsSubmitElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsSubmitElementFacet = {
  __typename?: 'OptiFormsSubmitElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsSubmitElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsSubmitElementOutput = {
  __typename?: 'OptiFormsSubmitElementOutput';
  autocomplete?: Maybe<OptiFormsSubmitElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsSubmitElementFacet>;
  item?: Maybe<OptiFormsSubmitElement>;
  items?: Maybe<Array<Maybe<OptiFormsSubmitElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsSubmitElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsSubmitElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsSubmitElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsTextareaElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextareaElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextareaElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextareaElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsTextareaElementAutocomplete = {
  __typename?: 'OptiFormsTextareaElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextareaElementFacet = {
  __typename?: 'OptiFormsTextareaElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextareaElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextareaElementOutput = {
  __typename?: 'OptiFormsTextareaElementOutput';
  autocomplete?: Maybe<OptiFormsTextareaElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsTextareaElementFacet>;
  item?: Maybe<OptiFormsTextareaElement>;
  items?: Maybe<Array<Maybe<OptiFormsTextareaElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextareaElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextareaElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsTextareaElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsTextboxElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsTextboxElement';
  AutoComplete?: Maybe<Scalars['String']['output']>;
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsTextboxElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsTextboxElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsTextboxElementAutocomplete = {
  __typename?: 'OptiFormsTextboxElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsTextboxElementFacet = {
  __typename?: 'OptiFormsTextboxElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsTextboxElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsTextboxElementOutput = {
  __typename?: 'OptiFormsTextboxElementOutput';
  autocomplete?: Maybe<OptiFormsTextboxElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsTextboxElementFacet>;
  item?: Maybe<OptiFormsTextboxElement>;
  items?: Maybe<Array<Maybe<OptiFormsTextboxElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsTextboxElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsTextboxElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsTextboxElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type OptiFormsUrlElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'OptiFormsUrlElement';
  Label?: Maybe<Scalars['String']['output']>;
  Placeholder?: Maybe<Scalars['String']['output']>;
  PredefinedValue?: Maybe<Scalars['String']['output']>;
  SubmissionFieldName?: Maybe<Scalars['String']['output']>;
  Tooltip?: Maybe<Scalars['String']['output']>;
  Validators?: Maybe<Scalars['JSON']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type OptiFormsUrlElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type OptiFormsUrlElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type OptiFormsUrlElementAutocomplete = {
  __typename?: 'OptiFormsUrlElementAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type OptiFormsUrlElementFacet = {
  __typename?: 'OptiFormsUrlElementFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type OptiFormsUrlElementOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type OptiFormsUrlElementOutput = {
  __typename?: 'OptiFormsUrlElementOutput';
  autocomplete?: Maybe<OptiFormsUrlElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<OptiFormsUrlElementFacet>;
  item?: Maybe<OptiFormsUrlElement>;
  items?: Maybe<Array<Maybe<OptiFormsUrlElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type OptiFormsUrlElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OptiFormsUrlElementWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<OptiFormsUrlElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type ParagraphElement = IData & _IComponent & _IContent & _IItem & {
  __typename?: 'ParagraphElement';
  Html?: Maybe<Scalars['String']['output']>;
  Text?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ParagraphElement_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  Text?: Maybe<RichTextAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  Text?: Maybe<RichTextFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ParagraphElementOrderByInput = {
  Text?: InputMaybe<RichTextOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete?: Maybe<ParagraphElementAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ParagraphElementFacet>;
  item?: Maybe<ParagraphElement>;
  items?: Maybe<Array<Maybe<ParagraphElement>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  Text?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type PinnedInput = {
  /** Pinned collection keys */
  collections?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  OptiFormsChoiceElement?: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition?: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData?: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule?: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement?: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement?: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement?: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement?: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement?: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement?: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement?: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement?: Maybe<OptiFormsUrlElementOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryOptiFormsChoiceElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryOptiFormsConditionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryOptiFormsContainerDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryOptiFormsDependencyRuleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryOptiFormsNumberElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryOptiFormsRangeElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryOptiFormsResetElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryOptiFormsSelectionElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryOptiFormsSubmitElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryOptiFormsTextareaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryOptiFormsTextboxElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryOptiFormsUrlElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type Query_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  OptiFormsChoiceElement?: Maybe<OptiFormsChoiceElementOutput>;
  OptiFormsCondition?: Maybe<OptiFormsConditionOutput>;
  OptiFormsContainerData?: Maybe<OptiFormsContainerDataOutput>;
  OptiFormsDependencyRule?: Maybe<OptiFormsDependencyRuleOutput>;
  OptiFormsNumberElement?: Maybe<OptiFormsNumberElementOutput>;
  OptiFormsRangeElement?: Maybe<OptiFormsRangeElementOutput>;
  OptiFormsResetElement?: Maybe<OptiFormsResetElementOutput>;
  OptiFormsSelectionElement?: Maybe<OptiFormsSelectionElementOutput>;
  OptiFormsSubmitElement?: Maybe<OptiFormsSubmitElementOutput>;
  OptiFormsTextareaElement?: Maybe<OptiFormsTextareaElementOutput>;
  OptiFormsTextboxElement?: Maybe<OptiFormsTextboxElementOutput>;
  OptiFormsUrlElement?: Maybe<OptiFormsUrlElementOutput>;
  ParagraphElement?: Maybe<ParagraphElementOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _AssetItem?: Maybe<_AssetItemOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _ImageItem?: Maybe<_ImageItemOutput>;
  _Item?: Maybe<_ItemOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefOptiFormsChoiceElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsChoiceElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsChoiceElementWhereInput>;
};


export type QueryRefOptiFormsConditionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsConditionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsConditionWhereInput>;
};


export type QueryRefOptiFormsContainerDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsContainerDataOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsContainerDataWhereInput>;
};


export type QueryRefOptiFormsDependencyRuleArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsDependencyRuleOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsDependencyRuleWhereInput>;
};


export type QueryRefOptiFormsNumberElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsNumberElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsNumberElementWhereInput>;
};


export type QueryRefOptiFormsRangeElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsRangeElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsRangeElementWhereInput>;
};


export type QueryRefOptiFormsResetElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsResetElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsResetElementWhereInput>;
};


export type QueryRefOptiFormsSelectionElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSelectionElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSelectionElementWhereInput>;
};


export type QueryRefOptiFormsSubmitElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsSubmitElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsSubmitElementWhereInput>;
};


export type QueryRefOptiFormsTextareaElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextareaElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextareaElementWhereInput>;
};


export type QueryRefOptiFormsTextboxElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsTextboxElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsTextboxElementWhereInput>;
};


export type QueryRefOptiFormsUrlElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<OptiFormsUrlElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<OptiFormsUrlElementWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ParagraphElementOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_AssetItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_AssetItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_AssetItemWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_ImageItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageItemWhereInput>;
};


export type QueryRef_ItemArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ItemOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ItemWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  pinned?: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  source?: InputMaybe<Array<InputMaybe<Sources>>>;
  tracking?: InputMaybe<TrackingInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SourceFilterInput = {
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Sources {
  Default = 'DEFAULT'
}

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & _IItem & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type TrackingInput = {
  /** Search phrase to track */
  phrase: Scalars['String']['input'];
  /** Source of the search query (optional) */
  source?: InputMaybe<Scalars['String']['input']>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include?: InputMaybe<VariationIncludeMode>;
  includeOriginal?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoMedia = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _AssetItem = IData & _IAssetItem & _IItem & {
  __typename?: '_AssetItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _AssetItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _AssetItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _AssetItemAutocomplete = {
  __typename?: '_AssetItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _AssetItemFacet = {
  __typename?: '_AssetItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _AssetItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _AssetItemOutput = {
  __typename?: '_AssetItemOutput';
  autocomplete?: Maybe<_AssetItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_AssetItemFacet>;
  item?: Maybe<_IAssetItem>;
  items?: Maybe<Array<Maybe<_IAssetItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _AssetItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _AssetItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_AssetItemWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _AssetMetadata = {
  __typename?: '_AssetMetadata';
  fileSize?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type _AssetMetadataAutocomplete = {
  __typename?: '_AssetMetadataAutocomplete';
  mimeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _AssetMetadataAutocompleteMimeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _AssetMetadataAutocompleteUrlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _AssetMetadataFacet = {
  __typename?: '_AssetMetadataFacet';
  fileSize?: Maybe<Array<Maybe<NumberFacet>>>;
  mimeType?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _AssetMetadataFacetFileSizeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _AssetMetadataFacetMimeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _AssetMetadataFacetUrlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _AssetMetadataOrderByInput = {
  fileSize?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

export type _AssetMetadataWhereInput = {
  fileSize?: InputMaybe<FloatFilterInput>;
  mimeType?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type _Component = IData & _IComponent & _IContent & _IItem & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Content = IData & _IContent & _IItem & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Experience = IData & _IContent & _IExperience & _IItem & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & _IItem & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _IAssetItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IAssetItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IAssetItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImageItem = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImageItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImageItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IItem = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IAssetItem & _IContent & _IImage & _IImageItem & _IItem & _IMedia & {
  __typename?: '_Image';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageItem = IData & _IAssetItem & _IImageItem & _IItem & {
  __typename?: '_ImageItem';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _imageMetadata?: Maybe<_ImageMetadata>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _ImageItem_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ImageItem_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageItemAutocomplete = {
  __typename?: '_ImageItemAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ImageItemFacet = {
  __typename?: '_ImageItemFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _imageMetadata?: Maybe<_ImageMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ImageItemOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageItemOutput = {
  __typename?: '_ImageItemOutput';
  autocomplete?: Maybe<_ImageItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageItemFacet>;
  item?: Maybe<_IImageItem>;
  items?: Maybe<Array<Maybe<_IImageItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageItemWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _ImageMetadata = {
  __typename?: '_ImageMetadata';
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type _ImageMetadataFacet = {
  __typename?: '_ImageMetadataFacet';
  height?: Maybe<Array<Maybe<NumberFacet>>>;
  width?: Maybe<Array<Maybe<NumberFacet>>>;
};


export type _ImageMetadataFacetHeightArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type _ImageMetadataFacetWidthArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};

export type _ImageMetadataOrderByInput = {
  height?: InputMaybe<OrderBy>;
  width?: InputMaybe<OrderBy>;
};

export type _ImageMetadataWhereInput = {
  height?: InputMaybe<IntFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type _ImageOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _imageMetadata?: InputMaybe<_ImageMetadataWhereInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Item = IData & _IItem & {
  __typename?: '_Item';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Item_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Item_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ItemAutocomplete = {
  __typename?: '_ItemAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
};

export type _ItemFacet = {
  __typename?: '_ItemFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
};

export type _ItemOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ItemOutput = {
  __typename?: '_ItemOutput';
  autocomplete?: Maybe<_ItemAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ItemFacet>;
  item?: Maybe<_IItem>;
  items?: Maybe<Array<Maybe<_IItem>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ItemOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ItemWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ItemWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Media = IData & _IAssetItem & _IContent & _IItem & _IMedia & {
  __typename?: '_Media';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Metadata = {
  __typename?: '_Metadata';
  displayName?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type _MetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type _MetadataAutocomplete = {
  __typename?: '_MetadataAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type _MetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type _MetadataAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type _MetadataFacet = {
  __typename?: '_MetadataFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type _MetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type _MetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type _MetadataFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type _MetadataOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type _MetadataWhereInput = {
  displayName?: InputMaybe<SearchableStringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type _Page = IData & _IContent & _IItem & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export type _Section = IData & _IComponent & _IContent & _IItem & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IAssetItem & _IContent & _IItem & _IMedia & _IVideo & {
  __typename?: '_Video';
  _assetMetadata?: Maybe<_AssetMetadata>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _itemMetadata?: Maybe<_Metadata>;
  _json?: Maybe<Scalars['JSON']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _source?: Maybe<Scalars['String']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _assetMetadata?: Maybe<_AssetMetadataAutocomplete>;
  _itemMetadata?: Maybe<_MetadataAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _assetMetadata?: Maybe<_AssetMetadataFacet>;
  _itemMetadata?: Maybe<_MetadataFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _assetMetadata?: InputMaybe<_AssetMetadataOrderByInput>;
  _itemMetadata?: InputMaybe<_MetadataOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _assetMetadata?: InputMaybe<_AssetMetadataWhereInput>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _itemMetadata?: InputMaybe<_MetadataWhereInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _source?: InputMaybe<SourceFilterInput>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type UsePinnedInput = {
  collectionId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type CompositionComponentNodeFragment = { __typename?: 'CompositionComponentNode', key?: string | null, component?: { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsChoiceElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsCondition', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsContainerData', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsDependencyRule', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsNumberElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsRangeElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: 'OptiFormsResetElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
    { __typename?: 'OptiFormsSelectionElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'SelectionElementFragment': SelectionElementFragment } }
  ) | (
    { __typename?: 'OptiFormsSubmitElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'SubmitElementFragment': SubmitElementFragment } }
  ) | (
    { __typename?: 'OptiFormsTextareaElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'TextareaElementFragment': TextareaElementFragment } }
  ) | (
    { __typename?: 'OptiFormsTextboxElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'TextboxElementFragment': TextboxElementFragment } }
  ) | { __typename?: 'OptiFormsUrlElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | (
    { __typename?: 'ParagraphElement', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'ParagraphElementFragment': ParagraphElementFragment } }
  ) | { __typename?: '_Component', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | { __typename?: '_Section', _metadata?: { __typename?: 'ContentMetadata', types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', types?: Array<string | null> | null } | null } | null } & { ' $fragmentName'?: 'CompositionComponentNodeFragment' };

export type FormsQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type FormsQuery = { __typename?: 'Query', OptiFormsContainerData?: { __typename?: 'OptiFormsContainerDataOutput', items?: Array<{ __typename?: 'OptiFormsContainerData', composition?: { __typename?: 'CompositionStructureNode', grids?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, component?: (
            { __typename?: 'BlankSection' }
            & { ' $fragmentRefs'?: { '_IComponent_BlankSection_Fragment': _IComponent_BlankSection_Fragment } }
          ) | (
            { __typename?: 'OptiFormsChoiceElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsChoiceElement_Fragment': _IComponent_OptiFormsChoiceElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsCondition' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsCondition_Fragment': _IComponent_OptiFormsCondition_Fragment } }
          ) | (
            { __typename?: 'OptiFormsContainerData' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsContainerData_Fragment': _IComponent_OptiFormsContainerData_Fragment } }
          ) | (
            { __typename?: 'OptiFormsDependencyRule' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsDependencyRule_Fragment': _IComponent_OptiFormsDependencyRule_Fragment } }
          ) | (
            { __typename?: 'OptiFormsNumberElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsNumberElement_Fragment': _IComponent_OptiFormsNumberElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsRangeElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsRangeElement_Fragment': _IComponent_OptiFormsRangeElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsResetElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsResetElement_Fragment': _IComponent_OptiFormsResetElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSelectionElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSelectionElement_Fragment': _IComponent_OptiFormsSelectionElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSubmitElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSubmitElement_Fragment': _IComponent_OptiFormsSubmitElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextareaElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextareaElement_Fragment': _IComponent_OptiFormsTextareaElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextboxElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextboxElement_Fragment': _IComponent_OptiFormsTextboxElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsUrlElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsUrlElement_Fragment': _IComponent_OptiFormsUrlElement_Fragment } }
          ) | (
            { __typename?: 'ParagraphElement' }
            & { ' $fragmentRefs'?: { '_IComponent_ParagraphElement_Fragment': _IComponent_ParagraphElement_Fragment } }
          ) | (
            { __typename?: '_Component' }
            & { ' $fragmentRefs'?: { '_IComponent__Component_Fragment': _IComponent__Component_Fragment } }
          ) | (
            { __typename?: '_Section' }
            & { ' $fragmentRefs'?: { '_IComponent__Section_Fragment': _IComponent__Section_Fragment } }
          ) | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                { __typename?: 'CompositionComponentNode' }
                & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
              ) | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                  { __typename?: 'CompositionComponentNode' }
                  & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
                ) | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode' } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null, _metadata?: { __typename?: 'ContentMetadata', key?: string | null, version?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null } | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null } | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null } | null } | null> | null } | null };

export type VisualBuilderQueryVariables = Exact<{
  key?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
}>;


export type VisualBuilderQuery = { __typename?: 'Query', _Experience?: { __typename?: '_ExperienceOutput', items?: Array<{ __typename?: 'BlankExperience', composition?: { __typename?: 'CompositionStructureNode', grids?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, component?: (
            { __typename?: 'BlankSection' }
            & { ' $fragmentRefs'?: { '_IComponent_BlankSection_Fragment': _IComponent_BlankSection_Fragment } }
          ) | (
            { __typename?: 'OptiFormsChoiceElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsChoiceElement_Fragment': _IComponent_OptiFormsChoiceElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsCondition' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsCondition_Fragment': _IComponent_OptiFormsCondition_Fragment } }
          ) | (
            { __typename?: 'OptiFormsContainerData' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsContainerData_Fragment': _IComponent_OptiFormsContainerData_Fragment } }
          ) | (
            { __typename?: 'OptiFormsDependencyRule' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsDependencyRule_Fragment': _IComponent_OptiFormsDependencyRule_Fragment } }
          ) | (
            { __typename?: 'OptiFormsNumberElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsNumberElement_Fragment': _IComponent_OptiFormsNumberElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsRangeElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsRangeElement_Fragment': _IComponent_OptiFormsRangeElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsResetElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsResetElement_Fragment': _IComponent_OptiFormsResetElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSelectionElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSelectionElement_Fragment': _IComponent_OptiFormsSelectionElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSubmitElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSubmitElement_Fragment': _IComponent_OptiFormsSubmitElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextareaElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextareaElement_Fragment': _IComponent_OptiFormsTextareaElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextboxElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextboxElement_Fragment': _IComponent_OptiFormsTextboxElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsUrlElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsUrlElement_Fragment': _IComponent_OptiFormsUrlElement_Fragment } }
          ) | (
            { __typename?: 'ParagraphElement' }
            & { ' $fragmentRefs'?: { '_IComponent_ParagraphElement_Fragment': _IComponent_ParagraphElement_Fragment } }
          ) | (
            { __typename?: '_Component' }
            & { ' $fragmentRefs'?: { '_IComponent__Component_Fragment': _IComponent__Component_Fragment } }
          ) | (
            { __typename?: '_Section' }
            & { ' $fragmentRefs'?: { '_IComponent__Section_Fragment': _IComponent__Section_Fragment } }
          ) | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                { __typename?: 'CompositionComponentNode' }
                & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
              ) | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                  { __typename?: 'CompositionComponentNode' }
                  & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
                ) | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode' } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null, _metadata?: { __typename?: 'ContentMetadata', key?: string | null, version?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null } | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null } | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null } | null } | { __typename?: '_Experience', composition?: { __typename?: 'CompositionStructureNode', grids?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, component?: (
            { __typename?: 'BlankSection' }
            & { ' $fragmentRefs'?: { '_IComponent_BlankSection_Fragment': _IComponent_BlankSection_Fragment } }
          ) | (
            { __typename?: 'OptiFormsChoiceElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsChoiceElement_Fragment': _IComponent_OptiFormsChoiceElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsCondition' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsCondition_Fragment': _IComponent_OptiFormsCondition_Fragment } }
          ) | (
            { __typename?: 'OptiFormsContainerData' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsContainerData_Fragment': _IComponent_OptiFormsContainerData_Fragment } }
          ) | (
            { __typename?: 'OptiFormsDependencyRule' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsDependencyRule_Fragment': _IComponent_OptiFormsDependencyRule_Fragment } }
          ) | (
            { __typename?: 'OptiFormsNumberElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsNumberElement_Fragment': _IComponent_OptiFormsNumberElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsRangeElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsRangeElement_Fragment': _IComponent_OptiFormsRangeElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsResetElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsResetElement_Fragment': _IComponent_OptiFormsResetElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSelectionElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSelectionElement_Fragment': _IComponent_OptiFormsSelectionElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsSubmitElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsSubmitElement_Fragment': _IComponent_OptiFormsSubmitElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextareaElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextareaElement_Fragment': _IComponent_OptiFormsTextareaElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsTextboxElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsTextboxElement_Fragment': _IComponent_OptiFormsTextboxElement_Fragment } }
          ) | (
            { __typename?: 'OptiFormsUrlElement' }
            & { ' $fragmentRefs'?: { '_IComponent_OptiFormsUrlElement_Fragment': _IComponent_OptiFormsUrlElement_Fragment } }
          ) | (
            { __typename?: 'ParagraphElement' }
            & { ' $fragmentRefs'?: { '_IComponent_ParagraphElement_Fragment': _IComponent_ParagraphElement_Fragment } }
          ) | (
            { __typename?: '_Component' }
            & { ' $fragmentRefs'?: { '_IComponent__Component_Fragment': _IComponent__Component_Fragment } }
          ) | (
            { __typename?: '_Section' }
            & { ' $fragmentRefs'?: { '_IComponent__Section_Fragment': _IComponent__Section_Fragment } }
          ) | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<{ __typename?: 'CompositionComponentNode' } | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                { __typename?: 'CompositionComponentNode' }
                & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
              ) | { __typename?: 'CompositionNode' } | { __typename: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, layoutType?: string | null, nodes?: Array<(
                  { __typename?: 'CompositionComponentNode' }
                  & { ' $fragmentRefs'?: { 'CompositionComponentNodeFragment': CompositionComponentNodeFragment } }
                ) | { __typename?: 'CompositionNode' } | { __typename?: 'CompositionStructureNode' } | null> | null } | null> | null } | null> | null } | null> | null } | null> | null } | null, _metadata?: { __typename?: 'ContentMetadata', key?: string | null, version?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null } | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null } | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null } | null } | null> | null } | null };

type _IComponent_BlankSection_Fragment = { __typename: 'BlankSection' } & { ' $fragmentName'?: '_IComponent_BlankSection_Fragment' };

type _IComponent_OptiFormsChoiceElement_Fragment = { __typename: 'OptiFormsChoiceElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsChoiceElement_Fragment' };

type _IComponent_OptiFormsCondition_Fragment = { __typename: 'OptiFormsCondition' } & { ' $fragmentName'?: '_IComponent_OptiFormsCondition_Fragment' };

type _IComponent_OptiFormsContainerData_Fragment = (
  { __typename: 'OptiFormsContainerData' }
  & { ' $fragmentRefs'?: { 'FormContainerDataFragment': FormContainerDataFragment } }
) & { ' $fragmentName'?: '_IComponent_OptiFormsContainerData_Fragment' };

type _IComponent_OptiFormsDependencyRule_Fragment = { __typename: 'OptiFormsDependencyRule' } & { ' $fragmentName'?: '_IComponent_OptiFormsDependencyRule_Fragment' };

type _IComponent_OptiFormsNumberElement_Fragment = { __typename: 'OptiFormsNumberElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsNumberElement_Fragment' };

type _IComponent_OptiFormsRangeElement_Fragment = { __typename: 'OptiFormsRangeElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsRangeElement_Fragment' };

type _IComponent_OptiFormsResetElement_Fragment = { __typename: 'OptiFormsResetElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsResetElement_Fragment' };

type _IComponent_OptiFormsSelectionElement_Fragment = { __typename: 'OptiFormsSelectionElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsSelectionElement_Fragment' };

type _IComponent_OptiFormsSubmitElement_Fragment = { __typename: 'OptiFormsSubmitElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsSubmitElement_Fragment' };

type _IComponent_OptiFormsTextareaElement_Fragment = { __typename: 'OptiFormsTextareaElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsTextareaElement_Fragment' };

type _IComponent_OptiFormsTextboxElement_Fragment = { __typename: 'OptiFormsTextboxElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsTextboxElement_Fragment' };

type _IComponent_OptiFormsUrlElement_Fragment = { __typename: 'OptiFormsUrlElement' } & { ' $fragmentName'?: '_IComponent_OptiFormsUrlElement_Fragment' };

type _IComponent_ParagraphElement_Fragment = { __typename: 'ParagraphElement' } & { ' $fragmentName'?: '_IComponent_ParagraphElement_Fragment' };

type _IComponent__Component_Fragment = { __typename: '_Component' } & { ' $fragmentName'?: '_IComponent__Component_Fragment' };

type _IComponent__Section_Fragment = { __typename: '_Section' } & { ' $fragmentName'?: '_IComponent__Section_Fragment' };

export type _IComponentFragment = _IComponent_BlankSection_Fragment | _IComponent_OptiFormsChoiceElement_Fragment | _IComponent_OptiFormsCondition_Fragment | _IComponent_OptiFormsContainerData_Fragment | _IComponent_OptiFormsDependencyRule_Fragment | _IComponent_OptiFormsNumberElement_Fragment | _IComponent_OptiFormsRangeElement_Fragment | _IComponent_OptiFormsResetElement_Fragment | _IComponent_OptiFormsSelectionElement_Fragment | _IComponent_OptiFormsSubmitElement_Fragment | _IComponent_OptiFormsTextareaElement_Fragment | _IComponent_OptiFormsTextboxElement_Fragment | _IComponent_OptiFormsUrlElement_Fragment | _IComponent_ParagraphElement_Fragment | _IComponent__Component_Fragment | _IComponent__Section_Fragment;

export type FormContainerDataFragment = { __typename?: 'OptiFormsContainerData', SubmitConfirmationMessage?: string | null, ResetConfirmationMessage?: string | null, Title?: string | null, Description?: string | null, ShowSummaryMessageAfterSubmission?: boolean | null, SubmitUrl?: { __typename?: 'ContentUrl', type?: string | null, default?: string | null, hierarchical?: string | null, internal?: string | null, graph?: string | null, base?: string | null } | null } & { ' $fragmentName'?: 'FormContainerDataFragment' };

export type ParagraphElementFragment = { __typename?: 'ParagraphElement', Text?: { __typename?: 'RichText', html?: string | null } | null } & { ' $fragmentName'?: 'ParagraphElementFragment' };

export type SelectionElementFragment = { __typename?: 'OptiFormsSelectionElement', Label?: string | null, SubmissionFieldName?: string | null, Tooltip?: string | null, AutoComplete?: string | null, Placeholder?: string | null, Validators?: any | null, Options?: any | null } & { ' $fragmentName'?: 'SelectionElementFragment' };

export type SubmitElementFragment = { __typename?: 'OptiFormsSubmitElement', Label?: string | null, Tooltip?: string | null } & { ' $fragmentName'?: 'SubmitElementFragment' };

export type TextareaElementFragment = { __typename?: 'OptiFormsTextareaElement', Label?: string | null, SubmissionFieldName?: string | null, Tooltip?: string | null, Placeholder?: string | null, AutoComplete?: string | null, PredefinedValue?: string | null, Validators?: any | null } & { ' $fragmentName'?: 'TextareaElementFragment' };

export type TextboxElementFragment = { __typename?: 'OptiFormsTextboxElement', Label?: string | null, SubmissionFieldName?: string | null, Tooltip?: string | null, Placeholder?: string | null, AutoComplete?: string | null, PredefinedValue?: string | null, Validators?: any | null } & { ' $fragmentName'?: 'TextboxElementFragment' };

export const TextboxElementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textboxElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextboxElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}}]} as unknown as DocumentNode<TextboxElementFragment, unknown>;
export const TextareaElementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textareaElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextareaElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}}]} as unknown as DocumentNode<TextareaElementFragment, unknown>;
export const SelectionElementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"selectionElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSelectionElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}},{"kind":"Field","name":{"kind":"Name","value":"Options"}}]}}]} as unknown as DocumentNode<SelectionElementFragment, unknown>;
export const SubmitElementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"submitElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSubmitElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}}]}}]} as unknown as DocumentNode<SubmitElementFragment, unknown>;
export const ParagraphElementFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"paragraphElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<ParagraphElementFragment, unknown>;
export const CompositionComponentNodeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"compositionComponentNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textboxElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textareaElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"selectionElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"submitElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"paragraphElement"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textboxElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextboxElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textareaElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextareaElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"selectionElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSelectionElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}},{"kind":"Field","name":{"kind":"Name","value":"Options"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"submitElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSubmitElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"paragraphElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<CompositionComponentNodeFragment, unknown>;
export const FormContainerDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormContainerData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsContainerData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SubmitConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"ResetConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"SubmitUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"internal"}},{"kind":"Field","name":{"kind":"Name","value":"graph"}},{"kind":"Field","name":{"kind":"Name","value":"base"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryMessageAfterSubmission"}}]}}]} as unknown as DocumentNode<FormContainerDataFragment, unknown>;
export const _IComponentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"_IComponent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormContainerData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormContainerData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsContainerData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SubmitConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"ResetConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"SubmitUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"internal"}},{"kind":"Field","name":{"kind":"Name","value":"graph"}},{"kind":"Field","name":{"kind":"Name","value":"base"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryMessageAfterSubmission"}}]}}]} as unknown as DocumentNode<_IComponentFragment, unknown>;
export const FormsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Forms"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"OptiFormsContainerData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"grids"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_IComponent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"compositionComponentNode"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"compositionComponentNode"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormContainerData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsContainerData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SubmitConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"ResetConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"SubmitUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"internal"}},{"kind":"Field","name":{"kind":"Name","value":"graph"}},{"kind":"Field","name":{"kind":"Name","value":"base"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryMessageAfterSubmission"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textboxElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextboxElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textareaElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextareaElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"selectionElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSelectionElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}},{"kind":"Field","name":{"kind":"Name","value":"Options"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"submitElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSubmitElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"paragraphElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"_IComponent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormContainerData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"compositionComponentNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textboxElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textareaElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"selectionElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"submitElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"paragraphElement"}}]}}]}}]} as unknown as DocumentNode<FormsQuery, FormsQueryVariables>;
export const VisualBuilderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"VisualBuilder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"key"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_Experience"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"key"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"key"}}}]}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"_or"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_metadata"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"version"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"grids"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"_IComponent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"compositionComponentNode"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionStructureNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"layoutType"}},{"kind":"Field","alias":{"kind":"Name","value":"nodes"},"name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"compositionComponentNode"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FormContainerData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsContainerData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SubmitConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"ResetConfirmationMessage"}},{"kind":"Field","name":{"kind":"Name","value":"SubmitUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"default"}},{"kind":"Field","name":{"kind":"Name","value":"hierarchical"}},{"kind":"Field","name":{"kind":"Name","value":"internal"}},{"kind":"Field","name":{"kind":"Name","value":"graph"}},{"kind":"Field","name":{"kind":"Name","value":"base"}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"Description"}},{"kind":"Field","name":{"kind":"Name","value":"ShowSummaryMessageAfterSubmission"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textboxElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextboxElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textareaElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsTextareaElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"PredefinedValue"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"selectionElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSelectionElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"SubmissionFieldName"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}},{"kind":"Field","name":{"kind":"Name","value":"AutoComplete"}},{"kind":"Field","name":{"kind":"Name","value":"Placeholder"}},{"kind":"Field","name":{"kind":"Name","value":"Validators"}},{"kind":"Field","name":{"kind":"Name","value":"Options"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"submitElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OptiFormsSubmitElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Label"}},{"kind":"Field","name":{"kind":"Name","value":"Tooltip"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"paragraphElement"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ParagraphElement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"_IComponent"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"_IComponent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"FormContainerData"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"compositionComponentNode"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompositionComponentNode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"component"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textboxElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"textareaElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"selectionElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"submitElement"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"paragraphElement"}}]}}]}}]} as unknown as DocumentNode<VisualBuilderQuery, VisualBuilderQueryVariables>;