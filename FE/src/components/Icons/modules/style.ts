import styled from '@emotion/styled';

/**
 * path 1개
 */
export const Icon = styled.i<{
  fontSize?: number;
  color?: string;
}>`
  ${({ fontSize }) => `font-size: ${fontSize}px`};
  ${({ color }) => `color: ${color}`};
`;

/**
 * path 2개
 */
export const ComplexIcon = styled(Icon)`
  ${({ color }) =>
    color &&
    `
    .accent:before {
      color: ${color} !important;
    }
  `}
`;

/**
 * Logo
 * color: #14142b
 */
export const Logo = styled.i<{ fontSize: number }>`
  color: #14142b;
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: 0.8;
  letter-spacing: -0.04em;
`;
