import { FragmentType, useFragment } from '../../graphql/fragment-masking'
import { graphql } from '@/graphql'
import { Label } from '../ui/label'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const SelectionElementComponentNodeFragment = graphql(/* GraphQL */ `
fragment selectionElement on OptiFormsSelectionElement {
  Label
  Tooltip
  AutoComplete
  Validators
  Options
}
`)

const SelectionElementComponent = (props: {
  selectionElement: FragmentType<typeof SelectionElementComponentNodeFragment>,
  formState?: any
}) => {
  const node = useFragment(SelectionElementComponentNodeFragment, props.selectionElement)
  const Options = node.Options || []
  return (<>
    <Label>{node.Label}</Label>
    <Select onValueChange={(value) => props.formState[node.Label!] = value}>
      <SelectTrigger>
        <SelectValue placeholder="Country" />
      </SelectTrigger>
      <SelectContent>
        {Options.map((option: any, index: number) => (
          <SelectItem key={index} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>

  </>)
}

export default SelectionElementComponent