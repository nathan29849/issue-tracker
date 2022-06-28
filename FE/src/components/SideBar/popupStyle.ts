import styled from '@emotion/styled';

import { flexbox, typoSmall } from '@styles/mixin';

export const PopupContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: -0.5rem;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.background};
`;

export const List = styled.ul``;

export const ItemCommon = styled.li<{ selected: boolean }>`
  height: 2.75rem;
  padding: 0 1rem;
  border-top: 1px solid ${({ theme }) => theme.color.line};
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.offWhite};
  color: ${({ theme, selected }) =>
    selected ? theme.color.titleActive : theme.color.body};
  transition: background-color 250ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }
`;

export const AssigneeItem = styled(ItemCommon)`
  ${flexbox({ ai: 'center' })}
`;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

export const AssigneeName = styled.p`
  ${typoSmall(400)};
  margin-left: 0.5rem;
  flex-grow: 1;
  word-break: break-all;
`;
