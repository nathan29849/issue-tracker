import * as S from './style';

import I from '@components/Icons';
import { getModalItem } from '@components/Popup/Content';
import Popup from '@components/Popup/Popup';
import useComponentVisible from '@hooks/useComponentVisible.jsx';

export default function FilterBar() {
  const issueFilterData = {
    info: [
      { status: 'open', name: '열린 이슈' },
      { status: 'mine', name: '내가 작성한 이슈' },
      { status: 'assignedToMe', name: '나에게 할당된 이슈' },
      { status: 'comment', name: '내가 댓글을 남긴 이슈' },
      { status: 'close', name: '닫힌 이슈' },
    ],
  };
  const callback = () => {
    console.log('데이터 필터되는 콜백함수');
  };
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false, callback);

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
              {issueFilterData.info.map((popupData: any) => (
                <div
                  className="filter__item-wrapper"
                  key={`${popupData.status}`}
                >
                  <div className="filter__item">
                    {getModalItem('이슈', popupData)}
                  </div>
                  <div className="filter__check">
                    <I.Circle.Check />
                  </div>
                </div>
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
