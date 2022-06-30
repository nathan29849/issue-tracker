import React from 'react';

import { AssigneePanelProvider } from './AssigneePanel';
import { LabelPanelProvider } from './LabelPanel';
import { MileStonePanelProvider } from './MileStonePanel';

import Compose from '@utils/Compose';

export {
  useAssignee,
  useAssigneeState,
  useSetAssigneeState,
  useSelectedAssignee,
  useSelectedAssigneeId,
} from './AssigneePanel';

export {
  useLabel,
  useLabelState,
  useSetLabelState,
  useSelectedLabel,
  useSelectedLabelId,
} from './LabelPanel';

export {
  useMileStone,
  useMileStoneState,
  useSetMileStoneState,
  useSelectedMileStone,
  useSelectedMileStoneId,
} from './MileStonePanel';

export { AssigneePanelProvider, LabelPanelProvider, MileStonePanelProvider };

export const SideBarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <Compose
    components={[
      AssigneePanelProvider,
      LabelPanelProvider,
      MileStonePanelProvider,
    ]}
  >
    {children}
  </Compose>
);
