import styled from '@emotion/styled';

import { flexbox, typoSmall } from '@styles/mixin';

export const PopupContainer = styled.div`
  z-index: ${({ theme }) => theme.zIndex.sideBar.popup};
  position: absolute;
  top: 2rem;
  right: -0.5rem;
`;

export const InnerContainer = styled.div`
  max-height: 18rem;
  overflow-y: scroll;
`;

export const Header = styled.header`
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: 1px solid ${({ theme }) => theme.color.line};
  position: sticky;
  top: 0;
`;

export const List = styled.ul``;

export const ItemCommon = styled.li<{ selected: boolean }>`
  ${flexbox({ ai: 'center' })}
  height: 2.75rem;
  padding: 0 1rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.offWhite};
  color: ${({ theme, selected }) =>
    selected ? theme.color.titleActive : theme.color.body};
  transition: background-color 250ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }

  &:not(:first-child) {
    border-top: 1px solid ${({ theme }) => theme.color.line};
  }
`;

export const TitleCommon = styled.p`
  ${typoSmall(400)};
  margin-left: 0.5rem;
  flex-grow: 1;
  word-break: break-all;
`;

export const AssigneeItem = styled(ItemCommon)``;

export const AvatarWrapper = styled.div`
  flex-shrink: 0;
`;

export const AssigneeName = styled(TitleCommon)``;

export const LabelTitle = styled(TitleCommon)``;
