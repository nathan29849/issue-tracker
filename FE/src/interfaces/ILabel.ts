import { LabelTextColorType } from '@type/label';

export interface ILabel {
  id: number;
  backgroundColor: string;
  title: string;
  description?: string;
  textColor: LabelTextColorType;
}
