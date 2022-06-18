import styled from '@emotion/styled';

import { typoSmall, flexbox } from '@styles/mixin';

export const Icon = styled.span`
  position: absolute;
  left: 24px;
  margin-right: 0.5rem;
  pointer-events: none;
  color: ${({ theme }) => theme.color.placeholder};
`;

export const Input = styled.input`
  width: 29.5rem;
  height: 100%;
  font-size: 1rem;
  padding: 0 1.5rem 0 3rem;
  background-color: ${({ theme }) => theme.color.inputBackground};
  color: ${({ theme }) => theme.color.titleActive};

  &::placeholder {
    color: ${({ theme }) => theme.color.placeholder};
  }

  // TODO:
  // Empty 및 초기값(is:open)일 때의 text color = placeholder
`;

export const SearchBar = styled.div`
  position: relative;
  border-left: 1px solid ${({ theme }) => theme.color.line};
  ${flexbox({ jc: 'center', ai: 'center' })};

  input {
    border-radius: 0 0.75rem 0.75rem 0;
  }
`;

export const FilterButton = styled.div`
  position: relative;
  cursor: pointer;
  width: 8rem;
  padding: 0.375rem 1.5rem;
  color: ${({ theme }) => theme.color.label};
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 0.75rem 0 0 0.75rem;
  ${flexbox({ jc: 'space-between', ai: 'center' })};
  ${typoSmall(700)}

  i {
    font-weight: 400;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.line};
    color: ${({ theme }) => theme.color.body};
  }
`;

export const FilterBarLayer = styled.form`
  display: inline-flex;
  height: 2.5rem;
  border: 1px solid ${({ theme }) => theme.color.line};
  border-radius: 0.75rem;

  &:focus-within {
    border-color: black;

    ${Icon} {
      color: ${({ theme }) => theme.color.label};
    }
  }
`;
