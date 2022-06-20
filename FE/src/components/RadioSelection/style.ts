import styled from '@emotion/styled';

import {
  flexbox,
  inlineFlexbox,
  typoXSmall,
  typoSmall,
  simpleOpacityTransition,
} from '@styles/mixin';

export const Option = styled.li<{ checked?: boolean }>`
  ${typoSmall(400)}
  ${flexbox({ ai: 'center' })};
  ${simpleOpacityTransition({
    hoverOpacity: 0.85,
    activeOpacity: 0.7,
  })};

  user-select: none;
  color: ${({ theme, checked }) =>
    checked ? theme.color.titleActive : theme.color.body};
  margin-left: 0.5rem;
  padding-right: 1.5rem;
  height: 100%;
  cursor: pointer;

  i {
    margin-right: 0.5rem;
  }
`;

export const Options = styled.ul`
  ${flexbox({ ai: 'center' })};
  height: 100%;
`;

export const Title = styled.header`
  ${flexbox({ ai: 'center' })};
  ${typoXSmall(700)};
  padding-right: 3.625rem;
  color: ${({ theme }) => theme.color.label};
  height: 100%;
`;

export const RadioSelectionLayer = styled.div`
  ${inlineFlexbox({ ai: 'center' })}
  height: 2.5rem;
  padding: 0 1.5rem;
  border-radius: 11px;
  background-color: ${({ theme }) => theme.color.inputBackground};
`;
