import styled from '@emotion/styled';

import { typoSmall, inlineFlexbox, typoXSmall } from '@styles/mixin';

export const WordCount = styled.div`
  ${typoXSmall(400)};
  color: ${({ theme }) => theme.color.label};
  position: absolute;
  bottom: 4.5rem;
  right: 1.59375rem;
  pointer-events: none;
`;

export const Label = styled.label`
  ${typoXSmall(700)};
  color: ${({ theme }) => theme.color.label};
  cursor: pointer;
  i {
    margin-right: 0.5rem;
  }
`;

export const Footer = styled.footer`
  height: 3.25rem;
  background-image: linear-gradient(
    to right,
    black 50%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: top;
  background-size: 0.5rem 0.8px;
  background-repeat: repeat-x;
  padding: 1rem 1.5rem;
  transition: all 100ms;
`;

export const PlaceHolder = styled.div`
  ${typoSmall(400)};
  ${inlineFlexbox({ ai: 'center' })};
  position: absolute;
  flex-basis: 6rem;
  left: 1.5rem;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.color.placeholder};
  height: 100%;
  pointer-events: none;
  white-space: nowrap;
  transition: font-size 150ms, transform 150ms;
`;

export const Input = styled.input`
  ${typoSmall(400)};
  display: inline-flex;
  flex-grow: 1;
  height: 100%;
  padding: 0.25rem 1.5rem;
  background-color: inherit;
  color: ${({ theme }) => theme.color.titleActive};
  transition: padding 200ms;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const InputLayer = styled.div<{
  width: number | string;
  size?: string;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  active?: boolean;
}>`
  ${typoSmall(400)};
  position: relative;
  display: inline-flex;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  background-color: ${({ theme }) => theme.color.inputBackground};
  border: 1px solid transparent;
  border-radius: 14px;
  overflow: hidden;
  transition: all 300ms;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.titleActive};
    background-color: ${({ theme }) => theme.color.offWhite};
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.5;
  `};

  ${({ active, theme }) =>
    active &&
    `
      ${PlaceHolder} {
        ${typoXSmall(400)};
        color: ${theme.color.label};
      }
    `};

  ${({ size, active }) =>
    size === 'sm'
      ? `
        height: 2.5rem;
        
        ${PlaceHolder} {
          position: static;
          width: auto;
          margin-left: 1.5rem;
          order: 1;
        };
        
        ${Input} {
          order: 2; 
          padding-left: 0.5rem;
        };
      `
      : `
        height: 3.5rem;
        
        ${
          active &&
          `
            ${PlaceHolder} {
              transform: translate3d(0, -1rem, 0);
            };
           
            ${Input} {
              padding-top: 1.25rem;
            };
          `
        }
      `};

  ${({ success, theme }) =>
    success &&
    `
      border-color: ${theme.color.green} !important;
      background-color: ${theme.color.lightGreen} !important;

      ${PlaceHolder} {
        color: ${theme.color.darkGreen};
      };
  `};

  ${({ error, theme }) =>
    error &&
    `
      border-color: ${theme.color.red} !important;
      background-color: ${theme.color.lightRed} !important;
      
      ${PlaceHolder} {
        color: ${theme.color.darkRed};
      };
  `};
`;

export const Textarea = styled(Input)`
  resize: vertical;
`;

export const TextareaLayer = styled(InputLayer)`
  position: relative;
  flex-direction: column;
  height: auto;
  transition: all 100ms;

  ${PlaceHolder} {
    align-items: flex-start;
    padding-top: 1rem;
  }

  ${Textarea} {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.7rem;
    transform: translate3d(-0.2rem, -0.2rem, 0);
    min-height: 12.5rem;
    line-height: 1.75;
  }

  ${({ active }) =>
    active &&
    `
      padding-top: 1.5rem;
      ${PlaceHolder} {
        transform: translate3d(0, -1rem, 0);
      }
      
      ${Textarea} {
        margin-top: 1rem;
      }
    `};
`;
