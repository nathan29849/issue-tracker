import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import AssigneePanel from './AssigneePanel';
import LabelPanel from './LabelPanel';
import MileStonePanel from './MileStonePanel';
import * as S from './style';

import { getLabels } from '@apis/label';
import { getMileStones } from '@apis/milestone';
import { getUsers } from '@apis/user';
import {
  useAssigneePanel,
  useLabelPanel,
  useMileStonePanel,
} from '@components/SideBar/context';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

export const SideBar = () => {
  const { data: userData } = useQuery(['users'], getUsers);
  const { data: labelData } = useQuery(['labels'], getLabels);
  const { data: milestoneData } = useQuery(['milestones'], getMileStones);
  const { initPanel: initAssigneePanel } = useAssigneePanel();
  const { initPanel: initLabelPanel } = useLabelPanel();
  const { initPanel: initMileStonePanel } = useMileStonePanel();

  useEffect(() => {
    initAssigneePanel(userData);
    initLabelPanel(labelData);
    initMileStonePanel(milestoneData);
  }, [userData, labelData, milestoneData]);

  return (
    <Container>
      <AssigneePanel allowDuplicates />
      <LabelPanel allowDuplicates />
      <MileStonePanel />
    </Container>
  );
};

export default {
  Container,
  AssigneePanel,
  LabelPanel,
  MileStonePanel,
};
