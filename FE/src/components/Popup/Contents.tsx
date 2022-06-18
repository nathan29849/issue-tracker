import I from '@components/Icons';
import { getModalItem } from '@components/Popup/Item';
import { IPopupData } from '@components/Popup/type';

interface ContentsProps {
  label: string;
  popupData: IPopupData;
}

export default function Contents({ label, popupData }: ContentsProps) {
  return (
    <div className="filter__item-wrapper">
      <div className="filter__item">{getModalItem(label, popupData)}</div>
      <div className="filter__check">
        <I.Circle.Check />
      </div>
    </div>
  );
}
