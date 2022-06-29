import React from 'react';

import { AssigneePanelProvider } from './AssigneePanel';
import { LabelPanelProvider } from './LabelPanel';
import { MileStonePanelProvider } from './MileStonePanel';

import Compose from '@utils/Compose';

export {
  useAssigneePanel,
  useAssigneePanelState,
  useSetAssigneePanelState,
} from './AssigneePanel';

export {
  useLabelPanel,
  useLabelPanelState,
  useSetLabelPanelState,
} from './LabelPanel';

export {
  useMileStonePanel,
  useMileStonePanelState,
  useSetMileStonePanelState,
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
