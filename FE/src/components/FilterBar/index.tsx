import { css } from '@emotion/react';

import * as S from './style';

import I from '@components/Icons';
import Popup from '@components/Popup';
import Contents from '@components/Popup/Contents';
import { IPopupData } from '@components/Popup/type';
import useComponentVisible from '@hooks/useComponentVisible.jsx';
import { useSearch } from '@hooks/useSearch';

export default function FilterBar() {
  const issueFilterData = {
    info: [
      { id: 1, status: 'is:open', name: '열린이슈' },
      { id: 2, status: 'mine:@me', name: '내가작성한이슈' },
      { id: 3, status: 'assignedToMe:@me', name: '나에게할당된이슈' },
      { id: 4, status: 'comment:@me', name: '내가댓글을남긴이슈' },
      { id: 5, status: 'is:close', name: '닫힌이슈' },
    ],
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  // TODO 차후에 수정필요 replace 함수 대신 다른 함수로 작업
  const { replace } = useSearch('q', 'is:open');

  const handleOnFilterPopup = () => {
    setIsComponentVisible(true);
  };

  const handleItemClick = (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => {
    e.stopPropagation();
    replace(popupData.status, popupData.name);
    setIsComponentVisible(false);
  };

  return (
    <S.FilterBarLayer>
      <S.FilterButton onClick={handleOnFilterPopup}>
        <span>필터</span>
        <div
          ref={ref}
          css={css`
            position: absolute;
            left: 0;
            top: 3rem;
          `}
        >
          {isComponentVisible && (
            <Popup>
              <header>이슈 필터</header>
              {issueFilterData.info.map((popupData: IPopupData) => (
                <Contents
                  key={`popup-${popupData.id}`}
                  label="이슈"
                  popupData={popupData}
                  handleItemClick={handleItemClick}
                />
              ))}
            </Popup>
          )}
        </div>
        <I.ArrowDown />
      </S.FilterButton>
      <S.SearchBar>
        <S.Icon>
          <I.Search />
        </S.Icon>
        <S.Input type="text" placeholder="Search All Issues" />
      </S.SearchBar>
    </S.FilterBarLayer>
  );
}
