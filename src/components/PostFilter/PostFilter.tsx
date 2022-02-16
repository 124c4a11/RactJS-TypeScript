import { DetailedHTMLProps, Dispatch, HTMLAttributes, SetStateAction } from "react";
import { Select, Input } from "..";


type SortOptionType = 'title' | 'description'


export interface IFilter {
  sortOption: SortOptionType | '';
  searchQuery: string;
}


export interface IPostFilterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  filter: IFilter;
  setFilter: Dispatch<SetStateAction<IFilter>>;
}


export function PostFilter({
  filter,
  setFilter,
  ...props
}: IPostFilterProps): JSX.Element {
  return (
    <div {...props}>
      <Select<SortOptionType>
        value={filter.sortOption}
        defaultOption="Sort"
        options={[
          { value: 'title', body: 'By title' },
          { value: 'description', body: 'By description' }
        ]}
        onChangeOption={(sortOption) => setFilter({ ...filter, sortOption })}
      />

      <hr style={{ margin: '15px 0' }} />

      <Input
        value={filter.searchQuery}
        onChange={(e) => setFilter({
          ...filter,
          searchQuery: e.target.value
        })}
        placeholder='Search...'
      />
    </div>
  );
}
