import { css } from '@emotion/react';

import { IPopupData } from '@components/Popup/type';

export const getModalItem = (item: string, popupData: IPopupData) => {
  switch (item) {
    case '이슈':
      return <div id={popupData.status}>{popupData.name}</div>;
    case 'author':
    case 'assignee':
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
    case 'label':
      return (
        <>
          <div
            css={css`
              background: ${popupData.backgroundColor};
              border-radius: 50%;
              width: 1.25rem;
              height: 1.25rem;
              margin-right: 0.5rem;
            `}
          />
          <div className="filter__name">{popupData.title}</div>
        </>
      );
    case 'mileStone':
      return <div className="filter__name">{popupData.title}</div>;

    case 'checkBoxStatus':
      return <div className="filter__name">{popupData.title}</div>;
    default:
      throw Error('label type not found');
  }
};
