import * as S from './style';

import I from '@components/Icons';
import Contents from '@components/Popup/Contents';
import Popup from '@components/Popup/Popup';
import { IPopupData } from '@components/Popup/type';
import useComponentVisible from '@hooks/useComponentVisible.jsx';

export default function FilterBar() {
  const issueFilterData = {
    info: [
      { id: 1, status: 'open', name: '열린 이슈' },
      { id: 2, status: 'mine', name: '내가 작성한 이슈' },
      { id: 3, status: 'assignedToMe', name: '나에게 할당된 이슈' },
      { id: 4, status: 'comment', name: '내가 댓글을 남긴 이슈' },
      { id: 5, status: 'close', name: '닫힌 이슈' },
    ],
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleOnFilterPopup = () => {
    setIsComponentVisible(true);
  };

  return (
    <S.FilterBarLayer>
      <S.FilterButton onClick={handleOnFilterPopup}>
        <span>필터</span>
        <div ref={ref}>
          {isComponentVisible && (
            <Popup>
              <header>이슈 필터</header>
              {issueFilterData.info.map((popupData: IPopupData) => (
                <Contents
                  key={`popup-${popupData.id}`}
                  label="이슈"
                  popupData={popupData}
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
