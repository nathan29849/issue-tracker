import I from '@components/Icons';
import { getModalItem } from '@components/Popup/Item';
import { IPopupData } from '@components/Popup/type';
import theme from '@styles/theme';

interface ContentsProps {
  label: string;
  popupData: IPopupData;
  handleItemClick: (
    e: React.MouseEvent<HTMLElement>,
    popupData: IPopupData,
  ) => void;
}

export default function Contents({
  label,
  popupData,
  handleItemClick,
}: ContentsProps) {
  return (
    <button
      type="button"
      className="filter__item-button"
      onClick={e => handleItemClick(e, popupData)}
    >
      <div className="filter__item">{getModalItem(label, popupData)}</div>
      <div className="filter__check">
        <I.Circle.Check color={theme.color.body} />
      </div>
    </button>
  );
}
