import styled from '@emotion/styled';

export const UserAvatar = styled.button<{ size: 'sm' | 'lg'; fill?: string }>`
  border-style: solid;
  border-color: ${({ theme, fill }) => fill || theme.color.body};
  border-width: ${({ size }) => (size === 'sm' ? 1 : 2)}px;
  border-radius: 50%;
  overflow: hidden;
  width: ${({ size }) => (size === 'lg' ? 2.75 : 1.25)}rem;
  height: ${({ size }) => (size === 'lg' ? 2.75 : 1.25)}rem;
  transition: all 500ms;

  ${({ size, theme, as }) =>
    size === 'lg' &&
    as === 'button' &&
    `
      &:hover {
        border-color: ${theme.color.blue};
      }
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Fill = styled.div<{ fill?: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ fill }) => fill};
`;
