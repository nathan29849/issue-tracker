import {
  IIssueFilterPopup,
  IAssigneeAndAuthorPopup,
  ILabelPopup,
  IMileStonePopup,
} from '@interfaces/IFilterPopup';

export type FilterLabelTypes =
  | 'assignee'
  | 'label'
  | 'mileStone'
  | 'author'
  | 'checkBoxStatus';

export type FilterContentType = Partial<
  IIssueFilterPopup & IAssigneeAndAuthorPopup & ILabelPopup & IMileStonePopup
>;
