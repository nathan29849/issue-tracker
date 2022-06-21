import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.offWhite};
`;
