import styled from '@emotion/styled';

import { flexbox, simpleOpacityTransition, typoSmall } from '@styles/mixin';

export const Container = styled.div`
  display: inline-block;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  background-color: ${({ theme }) => theme.color.offWhite};
`;

export const PanelContainer = styled.div`
  padding: 2rem;
  width: 19.25rem;

  & + & {
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const Header = styled.header`
  ${flexbox({ ai: 'center' })};
  ${typoSmall(700)}
  cursor: pointer;
  color: ${({ theme }) => theme.color.label};
  height: 2rem;
  ${simpleOpacityTransition({
    delay: 100,
    hoverOpacity: 0.7,
    activeOpacity: 0.9,
  })}
`;

export const SelectButton = styled.button`
  background-color: transparent;
  ${typoSmall(700)}
  color: inherit;
`;

export const Title = styled.h2`
  flex-grow: 1;
  margin-right: 0.25rem;
`;

export const List = styled.ul``;

export const ItemCommon = styled.li`
  ${flexbox({ ai: 'center' })};
  word-break: break-all;
  margin-top: 1rem;
`;

export const TitleCommon = styled.p`
  ${typoSmall(400)};
  color: ${({ theme }) => theme.color.label};
`;

export const AssigneeItem = styled(ItemCommon)``;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

export const AssigneeName = styled(TitleCommon)`
  margin-left: 0.25rem;
`;

export const LabelItem = styled(ItemCommon)`
  height: 1.75rem;
`;

export const MileStoneItem = styled(ItemCommon)`
  flex-direction: column;
  align-items: flex-start;
`;

export const MileStoneTitle = styled(TitleCommon)`
  margin-top: 0.25rem;
`;
