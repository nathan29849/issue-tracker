import I from '@components/Icons';
import { getModalItem } from '@components/Popup/Item';
import theme from '@styles/theme';
import { FilterContentType } from '@type/filterPopup';

interface IContentsProps {
  item: string;
  popupData: FilterContentType;
  handleItemClick: (
    e: React.MouseEvent<HTMLElement>,
    popupData: FilterContentType,
  ) => void;
}

export default function Contents({
  item,
  popupData,
  handleItemClick,
}: IContentsProps) {
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
