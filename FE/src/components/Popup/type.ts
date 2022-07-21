/**
 * TODO
 * 백엔드 API 설계까지 임시적으로 사용하는 Popup 더미데이터
//  *
*/

export interface IFilter {
  id: string;
  imageUrl: string;
  status: string;
  backgroundColor: string;
  textColor: string;
  title: string;
  name: string;
}

// export type IssueFilter = Pick<CommonFilter, 'status' | 'name'>;

export type FilterPopupType = Partial<IFilter>;

export type IPopupData<T> = {
  readonly [P in keyof T]: T[P];
};
