import { css } from '@emotion/react';

import { FilterContentType } from '@type/filterPopup';

export const getModalItem = (item: string, popupData: FilterContentType) => {
  switch (item) {
    case '이슈':
      return <div id={popupData.status}>{popupData.name}</div>;
    case 'author':
    case 'assignee':
      return (
        <>
          <div
            css={css`
              background-image: url(${`${popupData.profileImageUrl}`});
              border-radius: 50%;
              width: 1.25rem;
              height: 1.25rem;
              margin-right: 0.5rem;
            `}
          />
          <div className="filter__name">{popupData.username}</div>
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
