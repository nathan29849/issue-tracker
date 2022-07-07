import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';

import * as S from './style';

import Popup from '@components/Popup';
import Contents from '@components/Popup/Contents';
import { IPopupData } from '@components/Popup/type';
import useComponentVisible from '@hooks/useComponentVisible';
import { useSearch } from '@hooks/useSearch';
import { issueState } from '@recoil/atoms/issue';
import { FilterLabelTypes } from '@type/issue';

interface IFilterProps {
  onPopup: boolean;
  item: FilterLabelTypes;
  filterPopupData: IPopupData[];
  handleFilterClick: (item: FilterLabelTypes, status: boolean) => void;
}

export default function Filter({
  onPopup,
  item,
  filterPopupData,
  handleFilterClick,
}: IFilterProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleOnFilterPopup = () => {
    handleFilterClick(item, true);
    setIsComponentVisible(true);
  };
  const { urlParamAdd, urlParamReplace } = useSearch('q', 'is:open');

  const setIssueState = useSetRecoilState(issueState);

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => {
    e.stopPropagation();
    if ((e.target as Element).classList.contains('popup-header')) return;

    // TODO: 팝업이 더 많아지면 이 if 문들도 많아질텐데...
    if (item === 'label') {
      urlParamAdd(item, popupData.title);
    } else if (item === 'mileStone') {
      urlParamReplace(item, popupData.title);
    } else if (item === 'assignee' || item === 'author') {
      urlParamReplace(item, popupData.name);
    }

    // TODO: call filter get api => response issue recoil set
    setIssueState([]);
    setIsComponentVisible(false);
  };

  return (
    <S.FilterLayer onClick={handleOnFilterPopup}>
      <span className="filter__label">{item}</span>
      <S.ArrowDown />

      {onPopup && (
        <div
          ref={ref}
          css={css`
            position: absolute;
            display: inline-flex;
            right: 0;
            top: 2rem;
          `}
        >
          {isComponentVisible && (
            <Popup>
              <header className="popup-header">{item} Filter</header>
              {filterPopupData.map((popupData: IPopupData) => (
                <Contents
                  key={`popup-${popupData.id}`}
                  item={item}
                  popupData={popupData}
                  handleItemClick={handleItemClick}
                />
              ))}
            </Popup>
          )}
        </div>
      )}
    </S.FilterLayer>
  );
}
