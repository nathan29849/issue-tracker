import theme from './theme';

interface Flexbox {
  dir?: 'row' | 'column';
  jc?: string;
  ai?: string;
}

interface AlignPos {
  pos?: 'absolute' | 'fixed';
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
export const alignPosX = ({ pos = 'absolute' }: AlignPos) => `
  position: ${pos};
  left: 50%;
  transform: translateX(-50%);
`;

export const alignPosY = ({ pos = 'absolute' }: AlignPos) => `
  position: ${pos};
  top: 50%;
  transform: translateY(-50%);
`;

export const alignPosXY = ({ pos = 'absolute' }: AlignPos) => `
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
