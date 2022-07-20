export interface IFilter {
  id: string;
  profileImageUrl: string;
  status: string;
  backgroundColor: string;
  textColor: string;
  title: string;
  name: string;
  username: string;
}

export interface IIssueFilterPopup {
  status: string;
  name: string;
}

export interface IAssigneeAndAuthorPopup {
  id: string;
  profileImageUrl: string;
  username: string;
}

export interface ILabelPopup {
  id: string;
  backgroundColor: string;
  title: string;
  textColor: string;
}

export interface IMileStonePopup {
  id: string;
  title: string;
  description: string;
}
