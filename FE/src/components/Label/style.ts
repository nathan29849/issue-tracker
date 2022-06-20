import styled from '@emotion/styled';

import { typoXSmall, inlineFlexbox } from '@styles/mixin';

export const Button = styled.button`
  ${typoXSmall(400)};
  padding: 0.25rem 1rem;
  border-radius: 30px;
`;

export const LabelButton = styled(Button)<{
  bgColor?: string;
  darkText?: boolean;
}>`
  color: ${({ darkText, theme }) =>
    darkText ? theme.color.titleActive : theme.color.offWhite};
  background-color: ${({ bgColor }) => bgColor};
`;

export const OutlinedButton = styled(Button)`
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.color.line};
  color: ${({ theme }) => theme.color.label};
  padding: 0.1875rem 0.9375rem;
`;

export const IssueLabelButton = styled.button<{ closed?: boolean }>`
  ${typoXSmall(400)};
  ${inlineFlexbox({ ai: 'center' })}
  padding: 0.625rem 1rem;
  height: 2.5rem;
  border-radius: 30px;
  cursor: default;
  border: 1px solid
    ${({ closed, theme }) => (closed ? theme.color.purple : theme.color.blue)};
  color: ${({ closed, theme }) =>
    closed ? theme.color.purple : theme.color.blue};
  background-color: ${({ closed, theme }) =>
    closed ? theme.color.lightPurple : theme.color.lightBlue};

  i {
    margin-right: 0.25rem;
  }
`;
