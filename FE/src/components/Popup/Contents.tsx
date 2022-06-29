import I from '@components/Icons';
import { getModalItem } from '@components/Popup/Item';
import { IPopupData } from '@components/Popup/type';
import theme from '@styles/theme';

interface ContentsProps {
  item: string;
  popupData: IPopupData;
  handleItemClick: (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => void;
}

export default function Contents({
  item,
  popupData,
  handleItemClick,
}: ContentsProps) {
  return (
    <button
      type="button"
      className="filter__item-button"
      onClick={e => handleItemClick(e, popupData)}
    >
      <div className="filter__item">{getModalItem(item, popupData)}</div>
      <div className="filter__check">
        <I.Circle.Check color={theme.color.body} />
      </div>
    </button>
  );
}
