import React from 'react';

import { AssigneePanelProvider } from './AssigneePanel';
import { LabelPanelProvider } from './LabelPanel';
import { MileStonePanelProvider } from './MileStonePanel';

import Compose from '@utils/Compose';

export {
  useAssignee,
  useAssigneeState,
  useSetAssigneeState,
} from './AssigneePanel';

export { useLabel, useLabelState, useSetLabelState } from './LabelPanel';

export {
  useMileStone,
  useMileStoneState,
  useSetMileStoneState,
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
