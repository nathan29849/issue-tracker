import { css } from '@emotion/react';

import { IPopupData } from '@components/Popup/type';

export const getModalItem = (label: string, popupData: IPopupData) => {
  switch (label) {
    case '이슈':
      return <div id={popupData.status}>{popupData.name}</div>;
    case '담당자':
    case '작성자':
      return (
        <>
          <div
            css={css`
              background-image: url(${popupData.imageUrl});
              border-radius: 50%;
              width: 1.25rem;
              height: 1.25rem;
              margin-right: 0.5rem;
            `}
          />
          <div className="filter__name">{popupData.name}</div>
        </>
      );
    case '레이블':
      return (
        <>
          <div
            css={css`
              background: ${popupData.color};
              border-radius: 50%;
              width: 1.25rem;
              height: 1.25rem;
              margin-right: 0.5rem;
            `}
          />
          <div className="filter__name">{popupData.name}</div>
        </>
      );
    case '마일스톤':
      return <div className="filter__name">{popupData.name}</div>;
    default:
      throw Error('label type not found');
  }
};