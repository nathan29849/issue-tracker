import theme from './theme';

interface Flexbox {
  dir?: 'row' | 'column';
  jc?: string;
  ai?: string;
}

interface AlignPos {
  (pos?: 'absolute' | 'fixed'): string;
}

/* flexbox */
export const flexbox = ({ dir = 'row', jc, ai }: Flexbox) => `
  display: flex;
  flex-direction: ${dir};
  justify-content: ${jc};
  align-items: ${ai};
`;

export const inlineFlexbox = ({ dir = 'row', jc, ai }: Flexbox) => `
  display: inline-flex;
  flex-direction: ${dir};
  justify-content: ${jc};
  align-items: ${ai};
`;

/* align position */
export const alignPosX: AlignPos = (pos = 'absolute') => `
  position: ${pos};
  left: 50%;
  transform: translateX(-50%);
`;

export const alignPosY: AlignPos = (pos = 'absolute') => `
  position: ${pos};
  top: 50%;
  transform: translateY(-50%);
`;

export const alignPosXY: AlignPos = (pos = 'absolute') => `
  position: ${pos};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

/* typography */
type FontWeight = 400 | 700;
export const typoDisplay = (fontWeight: FontWeight) => `
  font-size: ${theme.fontSize.display};
  font-weight: ${fontWeight};
`;

export const typoLarge = (fontWeight: FontWeight) => `
  font-size: ${theme.fontSize.lg};
  font-weight: ${fontWeight};
`;

export const typoMedium = (fontWeight: FontWeight) => `
  font-size: ${theme.fontSize.md};
  font-weight: ${fontWeight};
`;

export const typoSmall = (fontWeight: FontWeight) => `
  font-size: ${theme.fontSize.sm};
  font-weight: ${fontWeight};
`;

export const typoXSmall = (fontWeight: FontWeight) => `
  font-size: ${theme.fontSize.xs};
  font-weight: ${fontWeight};
`;

interface SimpleOpacityTransition {
  delay: number;
  hoverOpacity: number;
  activeOpacity: number;
}

export const simpleOpacityTransition = ({
  delay,
  hoverOpacity,
  activeOpacity,
}: SimpleOpacityTransition) => `
  transition: opacity ${delay}ms;
   &:hover {
    opacity: ${hoverOpacity};
  }

  &:active {
    opacity: ${activeOpacity};
  }

`;
