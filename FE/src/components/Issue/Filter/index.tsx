import { css } from '@emotion/react';

import * as S from './style';

import { FilterLabelTypes } from '@components/Issue/Navigation';
import Popup from '@components/Popup';
import Contents from '@components/Popup/Contents';
import { IPopupData } from '@components/Popup/type';
import useComponentVisible from '@hooks/useComponentVisible.jsx';
import { useSearch } from '@hooks/useSearch';

interface IFilterProps {
  onPopup: boolean;
  label: FilterLabelTypes;
  filterPopupData: IPopupData[];
  handleFilterClick: (label: FilterLabelTypes, status: boolean) => void;
}

export default function Filter({
  onPopup,
  label,
  filterPopupData,
  handleFilterClick,
}: IFilterProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);
  const handleOnFilterPopup = () => {
    handleFilterClick(label, true);
    setIsComponentVisible(!isComponentVisible);
  };
  const { replace } = useSearch('q', 'is:open');

  const handleItemClick = (popupData: IPopupData) => {
    replace(popupData.status, popupData.name);
    setIsComponentVisible(false);
  };

  return (
    <S.FilterLayer onClick={handleOnFilterPopup}>
      <span className="filter__label">{label}</span>
      <S.ArrowDown />
      {/**
       * // TODO
       * 초기에 여러개의 필터 팝업창 중에 하나의 필터 팝업창만 어떻게 띄울까 고민함
       * 팝업마다 보여줘야할 데이터가 다르기 때문에 팝업의 상태를 객체로 관리하는게 맞을꺼같아 우선 진행
       * 현재 모든 팝업의 상태를 불린형태로 popupState[label]로 관리
       * popupState[label]이 true인 팝업만 초기에 띄워주지만
       * 모든 팝업을 한 번씩 클릭하면 결국 전부 true가 되서 초기에만 사용되는 변수값으로 전락되버림
       *
       *
       * 각 팝업을감싸는 태그가 ref로 관리되고 있어 isComponentVisible인 true인거만 팝업이 나오는 형태
       *  */}

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
              <header>{label} 필터</header>
              {filterPopupData.map((popupData: IPopupData) => (
                <Contents
                  key={`popup-${popupData.id}`}
                  label={label}
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
