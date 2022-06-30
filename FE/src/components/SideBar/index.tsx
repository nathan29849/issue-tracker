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
  useAssignee,
  useLabel,
  useMileStone,
} from '@components/SideBar/context';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <S.Container>{children}</S.Container>
);

export const SideBar = () => {
  const { data: userData } = useQuery(['users'], getUsers);
  const { data: labelData } = useQuery(['labels'], getLabels);
  const { data: milestoneData } = useQuery(['milestones'], getMileStones);
  const { initPanel: initAssigneePanel } = useAssignee();
  const { initPanel: initLabelPanel } = useLabel();
  const { initPanel: initMileStonePanel } = useMileStone();

  useEffect(() => {
    initAssigneePanel(userData);
    initLabelPanel(labelData);

    if (milestoneData) {
      const milestone = Object.values(milestoneData).reduce(
        (acc, cur) => acc.concat(cur),
        [],
      );
      initMileStonePanel(milestone);
    }
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
