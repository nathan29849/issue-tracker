import useComponentVisible from '@hooks/useComponentVisible.jsx';
import Popup from './Popup';
import * as S from './style';
import { FilterLabelTypes } from '@components/Issue/Navigation';
import I from '@components/Icons';

interface IFilterProps {
  onPopup: boolean;
  label: FilterLabelTypes;
  filterPopupData: any;
  handleFilterClick: (label: string, status: boolean) => void;
}

export default function Filter({
  onPopup,
  label,
  filterPopupData,
  handleFilterClick,
}: IFilterProps) {
  const callback = () => {
    console.log('데이터 필터되는 콜백함수');
  };
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true, callback);
  const handleOnFilterPopup = () => {
    handleFilterClick(label, true);
    setIsComponentVisible(true);
  };

  const getModalItem = (popupData: any) => {
    switch (label) {
      case '담당자':
      case '작성자':
        return (
          <>
            <div className="filter__image" imageUrl={popupData.imageUrl}></div>
            <div className="filter__name">{popupData.name}</div>
          </>
        );
      case '레이블':
        return (
          <>
            <div className="filter__color">{popupData.color}</div>
            <div className="filter__name">{popupData.name}</div>
          </>
        );
      case '마일스톤':
        return (
          <>
            <div className="filter__name">{popupData.name}</div>
          </>
        );
      default:
        throw Error('label type not found');
    }
  };

  return (
    <S.FilterLayer onClick={handleOnFilterPopup}>
      <span className="filter__label">{label}</span>
      <S.ArrowDown></S.ArrowDown>
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
        <div ref={ref}>
          {isComponentVisible && (
            <Popup>
              <header>
                {label} {'필터'}
              </header>
              {filterPopupData.info.map((popupData: any) => {
                return (
                  <div
                    className="filter__item-wrapper"
                    key={`popup-${popupData.id}`}
                  >
                    <div className="filter__item">
                      {getModalItem(popupData.content)}
                    </div>
                    <div className="filter__check">
                      <I.Circle.Check />
                    </div>
                  </div>
                );
              })}
            </Popup>
          )}
        </div>
      )}
    </S.FilterLayer>
  );
}
