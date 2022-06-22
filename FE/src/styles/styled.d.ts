import '@emotion/react';
import { Color, ZIndex } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: Color;
    zIndex: ZIndex;
  }
}
