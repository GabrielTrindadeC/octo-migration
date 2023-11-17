import { TInputComponent } from '@renderer/components/InputSearch/InputSearch.types';

export interface ISearchClueProps {
  clearInput?: TInputComponent['clearInput'];
  value: string;
  label: string;
}
